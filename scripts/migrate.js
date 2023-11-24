const pool = require('../src/config/db');

const createTableUsers = async () => {
    try {
        await pool.query('drop table if exists users cascade');

        const query = `
        CREATE TABLE users (
            id SERIAL NOT NULL,
            email varchar NOT NULL,
            "password" varchar NOT NULL,
            name varchar null,
            avatar varchar null,
            provider varchar NULL,
            "role" int NULL,
            CONSTRAINT users_pk PRIMARY KEY (id)
        )`;
        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const createTableTestCases = async () => {
    try {
        await pool.query('drop table if exists testcases cascade');

        const query = `
        CREATE TABLE testcases (
            id SERIAL NOT NULL,
            problem_id int NULL,
            "input" varchar NULL,
            "output" varchar NULL,
            memory decimal NULL,
            runtime decimal NULL,
            CONSTRAINT testcases_pk PRIMARY KEY (id)
        )`;
        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const createTableLanguages = async () => {
    try {
        await pool.query('drop table if exists "language" cascade');

        const query = `
        CREATE TABLE "language" (
            id SERIAL NOT NULL,
            "name" varchar NULL,
            CONSTRAINT language_pk PRIMARY KEY (id)
        )`;
        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const createTableProblemLanguages = async () => {
    try {
        await pool.query('drop table if exists problem_languages cascade');

        const query = `
        CREATE TABLE problem_languages (
            id SERIAL NOT NULL,
            problem_id int NULL,
            language_id int NULL,
            initial_code varchar NULL,
            solution_code varchar,
            full_code varchar,
            CONSTRAINT problem_languages_pk PRIMARY KEY (id),
            CONSTRAINT problem_languages_fk FOREIGN KEY (language_id) REFERENCES public."language"(id)
        )`;
        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const createTableLevels = async () => {
    try {
        await pool.query('drop table if exists levels cascade');

        const query = `
        CREATE TABLE public.levels (
            id 				SERIAL					NOT NULL,
            name            text                NOT NULL            DEFAULT '',
            CONSTRAINT level_pk PRIMARY KEY (id)
        )`;
        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

const createTableProblems = async () => {
    try {
        await pool.query('drop table if exists public.problems cascade');

        const query = `
        CREATE TABLE public.problems (
            id 				SERIAL					NOT NULL,
            level_id        int                 NOT NULL,
            title			text				NOT NULL,
            description		text				NOT NULL,
            solution		text				,
            likes			int					NOT NULL,
            dislikes		int					NOT NULL,
            CONSTRAINT problem_pk PRIMARY KEY (id),
            CONSTRAINT problem_level_fk FOREIGN KEY (level_id) REFERENCES public.levels (id)
        )`;
        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

// status_list = ['Todo', 'Solved', 'Attempted']
const createUserProblems = async () => {
    try {
        await pool.query('drop table if exists user_problems cascade');

        const query = `
        CREATE TABLE public.user_problems (
            id 				SERIAL					NOT NULL,
            user_id         int                 NOT NULL,
            problem_id      int                 NOT NULL,
            status          text                NOT NULL        DEFAULT 'Todo',
            CONSTRAINT user_problems_pk PRIMARY KEY (id),
            CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES public.users (id),
            CONSTRAINT problem_fk FOREIGN KEY (problem_id) REFERENCES public.problems (id)
        )`;
        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

// status_enum = { 11: "Compilation Error", 12: "Runtime Error", 13: "Time Limit Exceeded", 15: "OK", 17: "Memory Limit Exceeded", 19: "Illegal system call", 20: "Internal Error", 21: "Server Overload" };
const createTableSubmissions = async () => {
    try {
        await pool.query('drop table if exists submissions cascade');

        const query = `
        CREATE TABLE public.submissions (
            id 				    SERIAL				NOT NULL,
            user_problems_id    int,
            status              text                NOT NULL            DEFAULT 'Accepted',
            "datetime"          text                NOT NULL,
            language_id         int,
            runtime             float               DEFAULT 0,
            memory              float               DEFAULT 0.0,
            code                text                NOT NULL,
            CONSTRAINT submission_pk PRIMARY KEY (id),
            CONSTRAINT user_problems_fk FOREIGN KEY (user_problems_id) REFERENCES public.user_problems(id),
            CONSTRAINT submission_languages_fk FOREIGN KEY (language_id) REFERENCES public."language"(id)
        )`;
        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

const createInsertUserProblemsFunction = async () => {
    try {
        const query = `
        create or replace function insert_user_problems_function()
        returns trigger as $$
        declare check_insert integer;
            begin 
                select count(id) into check_insert
                from public.user_problems 
                where user_id = new.user_id
                and problem_id = new.problem_id;
            
                if check_insert = 0 then
                    return new;
                end if;
                
                return null;
            end
        $$ language plpgsql`;

        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

const createUpdateUserProblemsFunction = async () => {
    try {
        const query = `
        create or replace function update_user_problems()
        returns trigger as $$
        declare 
            problem_status text;
            begin 
                select status into problem_status 
                from user_problems
                where id = new.user_problems_id;

                if ((new.status <> 'Accepted') and (problem_status <> 'Solved')) then
                    problem_status := 'Attempted';
                else
                    problem_status := 'Solved';
                end if;
            
                update public.user_problems 
                set status = problem_status
                where id = new.user_problems_id;
                
                return null;
            end
        $$ language plpgsql`;

        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

const createInsertSubmissionTrigger = async () => {
    try {
        const query = `
        create or replace trigger insert_new_submission 
            after insert on public.submissions 
            for each row 
            execute function update_user_problems()
        `;

        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

const createInsertUserProblemsTrigger = async () => {
    try {
        const query = `
        create or replace trigger insert_new_user_problems 
            before insert on public.user_problems 
            for each row 
            execute function insert_user_problems_function();
        `;

        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

// const createTableTestcaseSumissions = async () => {
//     try {
//         await pool.query('drop table if exists testcase_submissions cascade');

//         const query = `
//         CREATE TABLE public.testcase_submissions (
//             id 				    SERIAL					NOT NULL,
//             testcase_id         int                 NOT NULL,
//             submission_id       int                 NOT NULL,
//             CONSTRAINT testcase_submissions_pk PRIMARY KEY (id)
//             CONSTRAINT testcase_fk FOREIGN KEY (testcase_id) REFERENCES public.testcases (id),
//             CONSTRAINT submission_fk FOREIGN KEY (submission_id) REERENCES public.submissions (id)
//         )`;
//         await pool.query(query);
//     } catch (err) {
//         console.log(err);
//         process.exit(1);
//     }
// }

// const create = async () => {
//     try {
//         await pool.query('drop table if exists users');

//         const query = `CREATE TABLE users (
//             id SERIAL NOT NULL,
//             email varchar NOT NULL,
//             "password" varchar NOT NULL,
//             name varchar null,
//             avatar varchar null,
//             provider varchar NULL,
//             "role" int NULL,
//             CONSTRAINT users_pk PRIMARY KEY (id)
//         )`;
//         await pool.query(query);
//     } catch (err) {
//         console.log(err);
//         process.exit(1);
//     }
// };

(async () => {
    try {
        console.log('Waiting...');
        console.log('If program does not show anything, program run sucessfully');
        await createTableUsers();
        await createTableLanguages();
        await createTableLevels();
        await createTableProblems();
        await createTableProblemLanguages();
        await createTableTestCases();
        await createUserProblems();
        await createTableSubmissions();

        // Insert Functions and Triggers
        await createInsertUserProblemsFunction();
        await createInsertUserProblemsTrigger();
        await createUpdateUserProblemsFunction();
        await createInsertSubmissionTrigger();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
})();
