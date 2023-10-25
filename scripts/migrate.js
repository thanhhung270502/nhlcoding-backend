const pool = require('../src/config/db');
(async () => {
    try {
        // await pool.query('CREATE DATABASE nhlcodingDB');
        await pool.query('drop table if exists users');

        const createTableUsers = `CREATE TABLE users (
            id SERIAL NOT NULL,
            email varchar NOT NULL,
            "password" varchar NOT NULL,
            name varchar null,
            avatar varchar null,
            provider varchar NULL,
            "role" int NULL,
            CONSTRAINT users_pk PRIMARY KEY (id)
        )`;
        await pool.query(createTableUsers);

        await pool.query('drop table if exists testcases');

        const createTableTestCases = `CREATE TABLE testcases (
            id int NOT NULL,
            problem_id int NULL,
            "input" varchar NULL,
            "output" varchar NULL,
            memory decimal NULL,
            runtime decimal NULL,
            CONSTRAINT testcases_pk PRIMARY KEY (id)
        )`;
        await pool.query(createTableTestCases);

        await pool.query('drop table if exists "language"');

        const createTableLanguages = `
        drop table if exists "language";
        CREATE TABLE "language" (
            id int NOT NULL,
            "name" varchar NULL,
            "template" varchar NULL,
            CONSTRAINT language_pk PRIMARY KEY (id)
        )`;
        await pool.query(createTableLanguages);

        await pool.query('drop table if exists problem_langugages');

        const createTableProblemLanguages = `
        drop table if exists problem_languages;
        CREATE TABLE problem_languages (
            id int NOT NULL,
            problem_id int NULL,
            language_id int NULL,
            initialcode varchar NULL,
            CONSTRAINT problem_languages_pk PRIMARY KEY (id),
            CONSTRAINT problem_languages_fk FOREIGN KEY (language_id) REFERENCES public."language"(id)
        )`;
        await pool.query(createTableProblemLanguages);

        console.log('Successfully created!!!');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
})();
