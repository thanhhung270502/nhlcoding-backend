const pool = require('../src/config/db');

const createTableUsers = async () => {
    try {
        await pool.query('drop table if exists users cascade');

        const query = `
        create table users (
            id SERIAL primary key,
            email text not null,
            "password" text not null,
            "name" text not null,
            avatar text,
            "role" text default 'normal',
            provider text default 'manual'
        )`;
        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const createTableLanguages = async () => {
    try {
        await pool.query('drop table if exists "languages" cascade');

        const query = `
        create table languages (
            id SERIAL primary key,
            "name" text not null
        );`;
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
        create table levels (
            id SERIAL primary key,
            "name" text default ''
        )`;
        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const createTableProblems = async () => {
    try {
        await pool.query('drop table if exists problems cascade');

        const query = `
        create table problems (
            id SERIAL primary key,
            title text not null,
            level_id integer not null,
            description text not null,
            instruction text,
            likes integer not null,
            dislikes integer not null,
            categories text[],
            is_public bool default true,
            constraint fk_problem_level
                foreign key (level_id)
                    references levels(id)
        )`;
        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const createTableSemesters = async () => {
    try {
        await pool.query('drop table if exists semesters cascade');

        const query = `
        create table semesters (
            id SERIAL primary key,
            name text not null,
            start_date timestamp,
            end_date timestamp
        )`;
        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const createTableSubjects = async () => {
    try {
        await pool.query('drop table if exists subjects cascade');

        const query = `
        create table subjects (
            id SERIAL primary key,
            "name" text not null,
            short_name text
        )`;
        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

// status_enum = { 11: "Compilation Error", 12: "Runtime Error", 13: "Time Limit Exceeded", 15: "OK", 17: "Memory Limit Exceeded", 19: "Illegal system call", 20: "Internal Error", 21: "Server Overload" };
const createTableSubmissions = async () => {
    try {
        await pool.query('drop table if exists submissions cascade');

        const query = `
        create table submissions (
            id SERIAL primary key,
            language_id integer,
            user_id integer,
            problem_id integer,
            runtime float default 0.0,
            memory float default 0.0, 
            status text not null default 'Accepted',
            "datetime" timestamp not null,
            code text not null,
            score float not null,
            constraint fk_submission_problem_id
                foreign key (problem_id)
                    references problems(id),
            constraint fk_submission_user_id
                foreign key (user_id)
                    references users(id),
            constraint fk_submission_language_id
                foreign key (language_id)
                    references languages(id)
        )`;
        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const createTableClasses = async () => {
    try {
        await pool.query('drop table if exists classes cascade');

        const query = `
        create table classes (
            id SERIAL,
            subject_id integer,
            semester_id integer,
            "name" text not null,
            primary key (id, subject_id, semester_id),
            constraint fk_subject_id
                foreign key (subject_id)
                    references subjects(id),
            constraint fk_semester_id
                foreign key (semester_id)
                    references semesters(id)
        )`;
        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

const createTableTestCases = async () => {
    try {
        await pool.query('drop table if exists testcases cascade');

        const query = `
        create table testcases (
            id SERIAL primary key,
            problem_id integer,
            "input" text,
            "output" text,
            memory float default 0.0,
            runtime float default 0.0,
            constraint fk_testcase_problem
                foreign key (problem_id)
                    references problems(id)
        )`;
        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const createTableProblemClasses = async () => {
    try {
        await pool.query('drop table if exists problem_classes cascade');

        const query = `
        create table problem_classes (
            id SERIAL primary key,
            problem_id integer,
            class_id integer,
            subject_id integer,
            semester_id integer,
            time_limit float,
            start_time timestamp,
            end_time timestamp,
            retries integer,
            constraint fk_pc_problem_id
                foreign key (problem_id)
                    references problems(id),
            constraint fk_pc_class_id
                foreign key (class_id, subject_id, semester_id)
                    references classes(id, subject_id, semester_id)
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
        create table problem_languages (
            id SERIAL primary key,
            problem_id integer,
            language_id integer,
            initial_code text,
            solution_code text,
            full_code text,
            constraint fk_pl_problem_id
                foreign key (problem_id)
                    references problems(id),
            constraint fk_pl_language_id
                foreign key (language_id)
                    references languages(id)
        )`;
        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const createTableStudentClasses = async () => {
    try {
        await pool.query('drop table if exists student_classes cascade');

        const query = `
        create table student_classes (
            id SERIAL primary key,
            student_id integer,
            class_id integer,
            subject_id integer,
            semester_id integer,
            constraint fk_uc_student_id
                foreign key (student_id)
                    references users(id),
            constraint fk_uc_class_id
                foreign key (class_id, subject_id, semester_id)
                    references classes(id, subject_id, semester_id)
        )`;
        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const createTableTeacherClasses = async () => {
    try {
        await pool.query('drop table if exists teacher_classes cascade');

        const query = `
        create table teacher_classes (
            id SERIAL primary key,
            teacher_id integer,
            class_id integer,
            subject_id integer,
            semester_id integer,
            constraint fk_tc_teacher_id
                foreign key (teacher_id)
                    references users(id),
            constraint fk_tc_class_id
                foreign key (class_id, subject_id, semester_id)
                    references classes(id, subject_id, semester_id)
        )`;
        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const createTableTestcaseSubmissions = async () => {
    try {
        await pool.query('drop table if exists testcase_submissions cascade');

        const query = `
        create table testcase_submissions (
            id SERIAL primary key,
            testcase_id integer,
            submission_id integer,
            constraint fk_ts_testcase_id
                foreign key (testcase_id)
                    references testcases(id),
            constraint fk_ts_submission_id
                foreign key (submission_id)
                    references submissions(id)
        )`;
        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

// status_list = ['Todo', 'Solved', 'Attempted']
const createUserProblems = async () => {
    try {
        await pool.query('drop table if exists user_problems cascade');

        const query = `
        create table user_problems (
            id 				SERIAL				primary key,
            user_id         int                 NOT NULL,
            problem_id      int                 NOT NULL,
            status          text                NOT NULL        DEFAULT 'Todo',
            CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES users (id),
            CONSTRAINT problem_fk FOREIGN KEY (problem_id) REFERENCES problems (id)
        )`;
        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

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
};

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
};

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
};

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
};

const createCheckProblemClassesTrigger = async () => {
    try {
        await pool.query(`    
CREATE OR REPLACE FUNCTION check_public_problem()
    RETURNS TRIGGER AS $$
BEGIN
    IF (SELECT is_public FROM problems WHERE id = NEW.problem_id) THEN
        IF TG_OP = 'INSERT' THEN
            RAISE EXCEPTION 'Only private problems can be inserted';
        ELSIF TG_OP = 'UPDATE' THEN
            RAISE EXCEPTION 'Only private problems can be updated';
        END IF;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql
        `);
        await pool.query(`
        CREATE TRIGGER check_public_problem_trigger
        BEFORE INSERT OR UPDATE ON problem_classes
        FOR EACH ROW
        EXECUTE FUNCTION check_public_problem()
        `);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

const createCheckStudentClassesTrigger = async () => {
    try {
        await pool.query(`    
    CREATE OR REPLACE FUNCTION check_student_role()
        RETURNS TRIGGER AS $$
    BEGIN
        IF (SELECT role FROM users WHERE id = NEW.student_id) <> 'student' THEN
            RAISE EXCEPTION 'Only students can be inserted or updated';
        END IF;
        
        RETURN NEW;
    END;
    $$ LANGUAGE plpgsql
        `);
        await pool.query(`
    CREATE TRIGGER check_student_role_trigger
    BEFORE INSERT OR UPDATE ON student_classes
    FOR EACH ROW
    EXECUTE FUNCTION check_student_role()
        `);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const createCheckTeacherClassesTrigger = async () => {
    try {
        await pool.query(`    
CREATE OR REPLACE FUNCTION check_teacher_role()
    RETURNS TRIGGER AS $$
BEGIN
    IF (SELECT role FROM users WHERE id = NEW.teacher_id) <> 'teacher' THEN
        RAISE EXCEPTION 'Only teachers can be inserted or updated';
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql
        `);
        await pool.query(`
    CREATE TRIGGER check_teacher_role_trigger
    BEFORE INSERT OR UPDATE ON teacher_classes
    FOR EACH ROW
    EXECUTE FUNCTION check_teacher_role()
        `);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

(async () => {
    try {
        console.log('Waiting...');
        console.log('If program does not show anything, program run sucessfully');

        await createTableUsers();
        await createTableLanguages();
        await createTableLevels();
        await createTableProblems();
        await createTableSemesters();
        await createTableSubjects();
        await createTableTestCases();
        await createTableSubmissions();
        await createTableClasses();

        await createTableProblemClasses();
        await createTableProblemLanguages();
        await createTableStudentClasses();
        await createTableTeacherClasses();
        await createTableTestcaseSubmissions();

        // Additional table for tracking user
        await createUserProblems();

        // Insert Functions and Triggers
        await createInsertUserProblemsFunction();
        await createInsertUserProblemsTrigger();
        await createUpdateUserProblemsFunction();
        await createInsertSubmissionTrigger();
        await createCheckProblemClassesTrigger();
        await createCheckStudentClassesTrigger();
        await createCheckTeacherClassesTrigger();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
})();
