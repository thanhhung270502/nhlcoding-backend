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
        await pool.query(`insert into public.testcases (id, problem_id, "input", "output") values (1, 1, '1 2', '3')`);
        await pool.query(`insert into public.testcases (id, problem_id, "input", "output") values (2, 1, '3 4', '7')`);
        await pool.query(`insert into public.testcases (id, problem_id, "input", "output") values (3, 1, '4 6', '10')`);
        await pool.query(
            `insert into public.testcases (id, problem_id, "input", "output") values (4, 2, '[2,7,11,15] 9', '[0, 1]')`,
        );
        await pool.query(
            `insert into public.testcases (id, problem_id, "input", "output") values (5, 2, '[3,2,4] 6', '[1, 2]')`,
        );
        await pool.query(
            `insert into public.testcases (id, problem_id, "input", "output") values (6, 2, '[3,3] 6', '[0, 1]')`,
        );
        await pool.query(
            `insert into public.testcases (id, problem_id, "input", "output") values (7, 3, '"1" "2"', '"3"')`,
        );
        await pool.query(
            `insert into public.testcases (id, problem_id, "input", "output") values (8, 3, '"3" "4"', '"7"')`,
        );
        await pool.query(
            `insert into public.testcases (id, problem_id, "input", "output") values (9, 3, '"4" "6"', '"10"')`,
        );
        await pool.query(
            `insert into public.testcases (id, problem_id, "input", "output") values (10, 4, '"a" "b"', '"ab"')`,
        );
        await pool.query(
            `insert into public.testcases (id, problem_id, "input", "output") values (11, 4, '"c" "d"', '"7"')`,
        );
        await pool.query(
            `insert into public.testcases (id, problem_id, "input", "output") values (12, 4, '"e" "f"', '"10"')`,
        );
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertLanguages = async () => {
    try {
        await pool.query(
            `insert into public."language" (id, "name", "template") values (1, 'python', 'import sys \nTODO \nif __name__ == "__main__": \n')`,
        );
        await pool.query(
            `insert into public."language" (id, "name", "template") values (2, 'cpp', '#include <iostream>\n#include <vector>\nusing namespace std;\nTODO\nstring convertToString(vector<int> arr) {\n\tstring result = "[";\n\tfor (int i = 0; i < arr.size(); i++) {\n\t\tif (i == arr.size() - 1) {\n\t\t\tstring s = to_string(arr[i]) + "]"; \n\t\t\tresult = result + s;\n\t\t}\n\t\telse {\n\t\t\tstring s = to_string(arr[i]) + ", ";\n\t\t\tresult = result + s;\n\t\t}\n\t}\n\treturn result;\n}\n\nint main() {\nPROCESSING\n}')`,
        );
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertProblemLanguages = async () => {
    try {
        await pool.query(
            `insert into public.problem_languages (id, problem_id, language_id, initialcode) values (1, 1, 1, 'def add(a, b):\n\t')`,
        );
        await pool.query(
            `insert into public.problem_languages (id, problem_id, language_id, initialcode) values (2, 1, 2, 'int add(int a, int b) {\n\t\n}')`,
        );
        await pool.query(
            `insert into public.problem_languages (id, problem_id, language_id, initialcode) values (3, 2, 1, 'def twoSum(nums, target):\n\t')`,
        );
        await pool.query(
            `insert into public.problem_languages (id, problem_id, language_id, initialcode) values (4, 2, 2, 'vector<int> twoSum(vector<int>& nums, int target) {\n\t\n}')`,
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
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
})();
