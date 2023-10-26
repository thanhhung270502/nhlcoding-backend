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
            id int NOT NULL,
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
            id int NOT NULL,
            "name" varchar NULL,
            "template" varchar NULL,
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
            id int NOT NULL,
            problem_id int NULL,
            language_id int NULL,
            initialcode varchar NULL,
            CONSTRAINT problem_languages_pk PRIMARY KEY (id),
            CONSTRAINT problem_languages_fk FOREIGN KEY (language_id) REFERENCES public."language"(id)
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
        CREATE TABLE public.problems (
            id 				int					NOT NULL,
            title			text				NOT NULL,
            description		text				NOT NULL,
            solution		text				,
            likes			int					NOT NULL,
            dislikes		int					NOT NULL,
            level           text                NOT NULL,
            CONSTRAINT problem_pk PRIMARY KEY (id)
        )`;
        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

const createTableSubmissions = async () => {
    try {
        await pool.query('drop table if exists submissions cascade');

        const query = `
        CREATE TABLE public.submissions (
            id 				    int					NOT NULL,
            problem_id          int,
            language_id         int,
            runtime             float               DEFAULT 0,
            memory              float               DEFAULT 0.0,
            status              text                NOT NULL            DEFAULT 'fail',
            wrong_testcases     int                 NOT NULL            DEFAULT 0,
            code                text                NOT NULL,
            CONSTRAINT submission_pk PRIMARY KEY (id),
            CONSTRAINT submission_problem_fk FOREIGN KEY (problem_id) REFERENCES public.problems(id),
            CONSTRAINT submission_languages_fk FOREIGN KEY (language_id) REFERENCES public."language"(id)
        )`;
        await pool.query(query);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

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
        await createTableProblemLanguages();
        await createTableTestCases();
        await createTableProblems();
        await createTableSubmissions();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
})();
