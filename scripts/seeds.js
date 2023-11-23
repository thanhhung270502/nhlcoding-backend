const pool = require('../src/config/db');

const insertUsers = async () => {
    try {
        await pool.query(`
        INSERT INTO public.users(email, "password", name, avatar, provider, role)
        VALUES('kane.ly@digibank.vn', '123456', 'Thanh Hùng', 'https://kenh14cdn.com/203336854389633024/2023/8/9/photo-6-1691581011481133485486.jpg', 'manual', 0);
        INSERT INTO public.users(email, "password", name, avatar, provider, role)
        VALUES('thanhhung270502@gmail.com', '123456', 'Thanh Hùng', 'https://kenh14cdn.com/203336854389633024/2023/8/9/photo-6-1691581011481133485486.jpg', 'manual', 0);`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertTestCases = async () => {
    try {
        await pool.query(`insert into public.testcases (problem_id, "input", "output") values (1, '1 2', '3')`);
        await pool.query(`insert into public.testcases (problem_id, "input", "output") values (1, '3 4', '7')`);
        await pool.query(`insert into public.testcases (problem_id, "input", "output") values (1, '4 6', '10')`);
        await pool.query(
            `insert into public.testcases (problem_id, "input", "output") values (2, '[2,7,11,15] 9', '[0, 1]')`,
        );
        await pool.query(
            `insert into public.testcases (problem_id, "input", "output") values (2, '[3,2,4] 6', '[1, 2]')`,
        );
        await pool.query(
            `insert into public.testcases (problem_id, "input", "output") values (2, '[3,3] 6', '[0, 1]')`,
        );
        await pool.query(`insert into public.testcases (problem_id, "input", "output") values (3, '"1" "2"', '"3"')`);
        await pool.query(`insert into public.testcases (problem_id, "input", "output") values (3, '"3" "4"', '"7"')`);
        await pool.query(`insert into public.testcases (problem_id, "input", "output") values (3, '"4" "6"', '"10"')`);
        await pool.query(`insert into public.testcases (problem_id, "input", "output") values (4, '"a" "b"', '"ab"')`);
        await pool.query(`insert into public.testcases (problem_id, "input", "output") values (4, '"c" "d"', '"7"')`);
        await pool.query(`insert into public.testcases (problem_id, "input", "output") values (4, '"e" "f"', '"10"')`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertLanguages = async () => {
    try {
        await pool.query(`
            insert into public."languages" ("name") 
                                    values ('python');
            insert into public."languages" ("name") 
                                    values ('cpp');
            `);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertProblemLanguages = async () => {
    try {
        await pool.query(`
            insert into public.problem_languages (problem_id, language_id, initialcode) values (1, 1, 'def add(a, b):\n\t');
            insert into public.problem_languages (problem_id, language_id, initialcode) values (1, 2, 'int add(int a, int b) {\n\t\n}');
            insert into public.problem_languages (problem_id, language_id, initialcode) values (2, 1, 'def twoSum(nums, target):\n\t');
            insert into public.problem_languages (problem_id, language_id, initialcode) values (2, 2, 'vector<int> twoSum(vector<int>& nums, int target) {\n\t\n}');
            `);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertLevels = async () => {
    try {
        await pool.query(`
            insert into public.levels (name) values ('Easy');
            insert into public.levels (name) values ('Medium');
            insert into public.levels (name) values ('Hard');
            `);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertProblems = async () => {
    try {
        await pool.query(`
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (2, 'Problem 1', 'Description 1', 'Solution 1', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (3, 'Problem 2', 'Description 2', 'Solution 2', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (1, 'Problem 3', 'Description 3', 'Solution 3', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (2, 'Problem 4', 'Description 4', 'Solution 4', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (3, 'Problem 5', 'Description 5', 'Solution 5', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (1, 'Problem 6', 'Description 6', 'Solution 6', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (2, 'Problem 7', 'Description 7', 'Solution 7', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (3, 'Problem 8', 'Description 8', 'Solution 8', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (1, 'Problem 9', 'Description 9', 'Solution 9', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (2, 'Problem 10', 'Description 10', 'Solution 10', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (3, 'Problem 11', 'Description 11', 'Solution 11', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (1, 'Problem 12', 'Description 12', 'Solution 12', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (2, 'Problem 13', 'Description 13', 'Solution 13', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (3, 'Problem 14', 'Description 14', 'Solution 14', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (1, 'Problem 15', 'Description 15', 'Solution 15', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (2, 'Problem 16', 'Description 16', 'Solution 16', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (3, 'Problem 17', 'Description 17', 'Solution 17', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (1, 'Problem 18', 'Description 18', 'Solution 18', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (2, 'Problem 19', 'Description 19', 'Solution 19', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (3, 'Problem 20', 'Description 20', 'Solution 20', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (1, 'Problem 21', 'Description 21', 'Solution 21', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (2, 'Problem 22', 'Description 22', 'Solution 22', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (3, 'Problem 23', 'Description 23', 'Solution 23', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (1, 'Problem 24', 'Description 24', 'Solution 24', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (2, 'Problem 25', 'Description 25', 'Solution 25', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (3, 'Problem 26', 'Description 26', 'Solution 26', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (1, 'Problem 27', 'Description 27', 'Solution 27', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (2, 'Problem 28', 'Description 28', 'Solution 28', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (3, 'Problem 29', 'Description 29', 'Solution 29', 10, 10);
            insert into public.problems (level_id, title, description, solution, likes, dislikes) values (1, 'Problem 30', 'Description 30', 'Solution 30', 10, 10);
        `);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

// const insertProblems = async () => {
//     try {
//         await pool.query(
//             `
//             insert into public.problems (level_id,  title,          description,        solution,       likes,  dislikes)
//                                 values  (1,         'Problem 1',    'Description 1',    'Solution 1',   10,     10);
//             insert into public.problems (level_id,  title,          description,        solution,       likes,  dislikes)
//                                 values (2, 'Problem 2', 'Description 2', 'Solution 2', 10, 10);
//             insert into public.problems (level_id,  title,          description,        solution,       likes,  dislikes)
//                                 values (3, 'Problem 3', 'Description 3', 'Solution 3', 10, 10);
//             insert into public.problems (level_id,  title,          description,        solution,       likes,  dislikes)
//                                 values  (1,         'Problem 4',    'Description 4',    'Solution 1',   10,     10);
//             insert into public.problems (level_id,  title,          description,        solution,       likes,  dislikes)
//                                 values (3, 'Problem 5', 'Description 5', 'Solution 2', 10, 10);
//             insert into public.problems (level_id,  title,          description,        solution,       likes,  dislikes)
//                                 values (2, 'Problem 6', 'Description 6', 'Solution 3', 10, 10);
//             insert into public.problems (level_id,  title,          description,        solution,       likes,  dislikes)
//                                 values  (1,         'Problem 7',    'Description 7',    'Solution 7',   10,     10);
//             insert into public.problems (level_id,  title,          description,        solution,       likes,  dislikes)
//                                 values (2, 'Problem 8', 'Description 8', 'Solution 8', 10, 10);
//             insert into public.problems (level_id,  title,          description,        solution,       likes,  dislikes)
//                                 values (3, 'Problem 9', 'Description 9', 'Solution 9', 10, 10);
//             insert into public.problems (level_id,  title,          description,        solution,       likes,  dislikes)
//                                 values  (1,         'Problem 10',    'Description 10',    'Solution 10',   10,     10);
//             insert into public.problems (level_id,  title,          description,        solution,       likes,  dislikes)
//                                 values (3, 'Problem 11', 'Description 11', 'Solution 11', 10, 10);
//             insert into public.problems (level_id,  title,          description,        solution,       likes,  dislikes)
//                                 values (2, 'Problem 12', 'Description 12', 'Solution 12', 10, 10);`,
//         );
//     } catch (err) {
//         console.log(err);
//         process.exit(1);
//     }
// };

const insertUserProblems = async () => {
    try {
        await pool.query(
            `
            insert into public.user_problems (user_id, problem_id) values (1, 1);
            insert into public.user_problems (user_id, problem_id) values (1, 2);
            insert into public.user_problems (user_id, problem_id) values (1, 3);
            insert into public.user_problems (user_id, problem_id) values (1, 4);
            insert into public.user_problems (user_id, problem_id) values (2, 1);
            insert into public.user_problems (user_id, problem_id) values (2, 2);
            `,
        );
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertUserSubmission = async () => {
    try {
        await pool.query(
            `
            insert into public.submissions (user_problems_id ,  language_id,    runtime,    memory,     status,     code) 
                                    values (1,                  1,              10,         10,         'fail',     'Submit code 1');
            insert into public.submissions (user_problems_id ,  language_id,    runtime,    memory,     status,     code) 
                                    values (2,                  1,              10,         10,         'fail',     'Submit code 2');
            `,
        );
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertSumbission = async () => {
    try {
        await pool.query(
            `
            insert into public.submissions (user_problems_id ,  language_id,    runtime,    memory,     status,     code) 
                                    values (1,                  1,              10,         10,         'fail',     'Submit code 1');
            insert into public.submissions (user_problems_id ,  language_id,    runtime,    memory,     status,     code) 
                                    values (2,                  1,              10,         10,         'fail',     'Submit code 2');
            `,
        );
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

// const insertLanguages = async () => {
//     try {
//     } catch (err) {
//         console.log(err);
//         process.exit(1);
//     }
// };

(async () => {
    try {
        // Insert testcases into database
        console.log('Waiting...');
        console.log('If program does not show anything, program run sucessfully');
        await insertUsers();
        await insertLevels();
        await insertProblems();
        // await insertTestCases();
        await insertLanguages();
        // await insertProblemLanguages();
        // await insertUserProblems();
        // await insertSumbission();
        // await insertUserSubmission();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
})();
