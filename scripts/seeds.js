const pool = require('../src/config/db');

const insertUsers = async () => {
    try {
        await pool.query(`
        INSERT INTO public.users("id", email, "password", name, avatar, provider, role)
        VALUES(1, 'kane.ly@digibank.vn', '123456', 'Thanh Hùng', 'https://kenh14cdn.com/203336854389633024/2023/8/9/photo-6-1691581011481133485486.jpg', 'manual', 0)`);
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
        await pool.query(
            `insert into public.testcases (problem_id, "input", "output") values (3, '"1" "2"', '"3"')`,
        );
        await pool.query(
            `insert into public.testcases (problem_id, "input", "output") values (3, '"3" "4"', '"7"')`,
        );
        await pool.query(
            `insert into public.testcases (problem_id, "input", "output") values (3, '"4" "6"', '"10"')`,
        );
        await pool.query(
            `insert into public.testcases (problem_id, "input", "output") values (4, '"a" "b"', '"ab"')`,
        );
        await pool.query(
            `insert into public.testcases (problem_id, "input", "output") values (4, '"c" "d"', '"7"')`,
        );
        await pool.query(
            `insert into public.testcases (problem_id, "input", "output") values (4, '"e" "f"', '"10"')`,
        );
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertLanguages = async () => {
    try {
        await pool.query(
            `insert into public."language" ("name", "template") values ('python', 'import sys \nTODO \nif __name__ == "__main__": \n')`,
        );
        await pool.query(
            `insert into public."language" ("name", "template") values ('cpp', '#include <iostream>\n#include <vector>\nusing namespace std;\nTODO\nstring convertToString(vector<int> arr) {\n\tstring result = "[";\n\tfor (int i = 0; i < arr.size(); i++) {\n\t\tif (i == arr.size() - 1) {\n\t\t\tstring s = to_string(arr[i]) + "]"; \n\t\t\tresult = result + s;\n\t\t}\n\t\telse {\n\t\t\tstring s = to_string(arr[i]) + ", ";\n\t\t\tresult = result + s;\n\t\t}\n\t}\n\treturn result;\n}\n\nint main() {\nPROCESSING\n}')`,
        );
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertProblemLanguages = async () => {
    try {
        await pool.query(
            `insert into public.problem_languages (problem_id, language_id, initialcode) values (1, 1, 'def add(a, b):\n\t')`,
        );
        await pool.query(
            `insert into public.problem_languages (problem_id, language_id, initialcode) values (1, 2, 'int add(int a, int b) {\n\t\n}')`,
        );
        await pool.query(
            `insert into public.problem_languages (problem_id, language_id, initialcode) values (2, 1, 'def twoSum(nums, target):\n\t')`,
        );
        await pool.query(
            `insert into public.problem_languages (problem_id, language_id, initialcode) values (2, 2, 'vector<int> twoSum(vector<int>& nums, int target) {\n\t\n}')`,
        );
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertLevels = async () => {
    try {
        await pool.query(
            `insert into public.levels (name) 
                    values ('Easy')`,
        );
        await pool.query(
            `insert into public.levels (name) 
                    values ('Medium')`,
        );
        await pool.query(
            `insert into public.levels (name) 
                    values ('Hard')`,
        );
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

const insertProblems = async () => {
    try {
        await pool.query(
            `
            insert into public.problems (level_id,  title,          description,        solution,       likes,  dislikes) 
                                values  (1,         'Problem 1',    'Description 1',    'Solution 1',   10,     10);
            insert into public.problems (level_id,  title,          description,        solution,       likes,  dislikes) 
                                values (2, 'Problem 2', 'Description 2', 'Solution 2', 10, 10);
            insert into public.problems (level_id,  title,          description,        solution,       likes,  dislikes) 
                                values (3, 'Problem 3', 'Description 3', 'Solution 3', 10, 10);
            insert into public.problems (level_id,  title,          description,        solution,       likes,  dislikes) 
                                values  (1,         'Problem 4',    'Description 4',    'Solution 1',   10,     10);
            insert into public.problems (level_id,  title,          description,        solution,       likes,  dislikes) 
                                values (3, 'Problem 5', 'Description 5', 'Solution 2', 10, 10);
            insert into public.problems (level_id,  title,          description,        solution,       likes,  dislikes) 
                                values (2, 'Problem 6', 'Description 6', 'Solution 3', 10, 10);`,
        );
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertUserProblems = async () => {
    try {
        await pool.query(
            `
            insert into public.user_problems (user_id, problem_id) values (1, 1);
            insert into public.user_problems (user_id, problem_id) values (1, 4);
            `
        )
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

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
}



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
        await insertTestCases();
        await insertLanguages();
        await insertProblemLanguages();
        await insertLevels();
        await insertProblems();
        await insertUserProblems();
        await insertSumbission();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
})();
