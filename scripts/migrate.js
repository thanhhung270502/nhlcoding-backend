const pool = require('../src/config/db');

const createTableUsers = async () => {
    try {
        await pool.query('drop table if exists users');

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
        await pool.query('drop table if exists testcases');

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
        await pool.query('drop table if exists "language"');

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
        await pool.query('drop table if exists problem_langugages');

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
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
})();
