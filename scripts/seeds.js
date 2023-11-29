const pool = require('../src/config/db');

const insertUsers = async () => {
    try {
        await pool.query(`
        INSERT INTO public.users(email, "password", name, avatar, provider, role)
        VALUES('kane.ly@digibank.vn', 'IjEyMzQ1NiI=', 'Thanh Hùng', 'https://kenh14cdn.com/203336854389633024/2023/8/9/photo-6-1691581011481133485486.jpg', 'manual', 0);
        INSERT INTO public.users(email, "password", name, avatar, provider, role)
        VALUES('thanhhung2705@gmail.com', 'IjEyMzQ1NiI=', 'Thanh Hùng', 'https://kenh14cdn.com/203336854389633024/2023/8/9/photo-6-1691581011481133485486.jpg', 'manual', 0);`);
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
        await pool.query(`insert into public.testcases (problem_id, "input", "output") values (1, '1 -1', '0')`);
        await pool.query(
            `insert into public.testcases (problem_id, "input", "output") values (1, '-999999 999999', '0')`,
        );
        await pool.query(
            `insert into public.testcases (problem_id, "input", "output") values (2, '4\n2 7 11 15\n9', '[0, 1]')`,
        );
        await pool.query(
            `insert into public.testcases (problem_id, "input", "output") values (2, '3\n3 2 4\n6', '[1, 2]')`,
        );
        await pool.query(
            `insert into public.testcases (problem_id, "input", "output") values (2, '2\n3 3\n6', '[0, 1]')`,
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
        await pool.query(
            `insert into public.problem_languages   (problem_id,    language_id, 
                                                    initial_code, 
                                                    solution_code, 
                                                    full_code) 
                                            values  (1,             1, 
                                                    'def add(a, b):\n\t', 
                                                    'def add(a,b):\n\treturn a + b', 
                                                    'import sys\n{{ANSWER}} \nif __name__=="__main__":\n\ta=int(input())\n\tb=int(input())\n\tprint(add(a,b))\n')`,
        );

        await pool.query(
            `insert into public.problem_languages   (problem_id,    language_id, 
                                                    initial_code, 
                                                    solution_code, 
                                                    full_code)
                                            values  (1,             2, 
                                                    'int add(int a, int b) {\n\t\n}', 
                                                    'int add(int a, int b) {\n\treturn a + b;\n}', 
                                                    '#include <iostream>
                                                    #include <vector>
                                                    using namespace std;
                                                    {{ANSWER}} 
                                                    int main() {
                                                        int a, b;
                                                        cin >> a >> b;
                                                        int result = add(a,b);
                                                        cout << result;return 0;
                                                    }')`,
        );

        // TODO: add solution_code and full_code
        await pool.query(
            `insert into public.problem_languages   (problem_id,    language_id,    
                                                    initial_code, 
                                                    solution_code, 
                                                    full_code) 
                                        values      (2,             1,              
                                                    'def twoSum(n, nums, target):\n\t', 
                                                    'def twoSum(n, nums, target):\n\tfor i in range(len(nums)):\n\t\tfor j in range(i+1, len(nums)):\n\t\t\tif nums[i] + nums[j] == target:\n\t\t\t\treturn [i, j]\n\treturn None', 
                                                    'import sys\n{{ANSWER}} \nif __name__=="__main__":\n\tn=int(input())\n\tnums=[]\n\tfor i in range(n):\n\t\tele=int(input())\n\t\tnums+=[ele]\n\ttarget=int(input())\n\tprint(twoSum(n,nums,target))')`,
        );

        // TODO: add solution_code and full_code
        await pool.query(
            `insert into public.problem_languages   (problem_id,    language_id, 
                                                    initial_code, 
                                                    solution_code, 
                                                    full_code) 
                                            values  (2,             2, 
                                                    'vector<int> twoSum(int length, vector<int>& nums, int target) {\n\t\n}', 
                                                    'vector<int> twoSum(int length, vector<int>& nums, int target) {
                                                        for (int i = 0; i < (int)nums.size() - 1; i++) {
                                                            for (int j = i + 1; j < (int)nums.size(); j++) {
                                                                if (nums[i] + nums[j] == target) {
                                                                vector<int> ans = {i, j};
                                                                return ans;
                                                                }
                                                            }
                                                        }
                                                        return vector<int>();
                                                    }', 
                                                    '
                                                    #include <iostream>
                                                    #include <vector>
                                                    using namespace std;
                                                    {{ANSWER}} 
                                                    int main() {
                                                        int length, target;
                                                        cin >> length;
                                                        vector<int> nums;
                                                        for (int i = 0; i < length; i++) {
                                                            int ele;
                                                            cin >> ele;
                                                            nums.push_back(ele);
                                                        }
                                                        cin >> target;
                                                        vector<int> result = twoSum(length, nums, target);
                                                        cout<<"[";
                                                        for (int i=0; i<(int)result.size(); i++) {
                                                            cout<<result[i];
                                                            if (i != (int)result.size()-1)
                                                                cout<<", ";
                                                        }
                                                        cout<<"]";
                                                        return 0;
                                                    }
                                                    ')`,
        );
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
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (2, 'Problem 1', 'Description 1', 'Instruction 1', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (3, 'Problem 2', 'Description 2', 'Instruction 2', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (1, 'Problem 3', 'Description 3', 'Instruction 3', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (2, 'Problem 4', 'Description 4', 'Instruction 4', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (3, 'Problem 5', 'Description 5', 'Instruction 5', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (1, 'Problem 6', 'Description 6', 'Instruction 6', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (2, 'Problem 7', 'Description 7', 'Instruction 7', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (3, 'Problem 8', 'Description 8', 'Instruction 8', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (1, 'Problem 9', 'Description 9', 'Instruction 9', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (2, 'Problem 10', 'Description 10', 'Instruction 10', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (3, 'Problem 11', 'Description 11', 'Instruction 11', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (1, 'Problem 12', 'Description 12', 'Instruction 12', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (2, 'Problem 13', 'Description 13', 'Instruction 13', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (3, 'Problem 14', 'Description 14', 'Instruction 14', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (1, 'Problem 15', 'Description 15', 'Instruction 15', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (2, 'Problem 16', 'Description 16', 'Instruction 16', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (3, 'Problem 17', 'Description 17', 'Instruction 17', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (1, 'Problem 18', 'Description 18', 'Instruction 18', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (2, 'Problem 19', 'Description 19', 'Instruction 19', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (3, 'Problem 20', 'Description 20', 'Instruction 20', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (1, 'Problem 21', 'Description 21', 'Instruction 21', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (2, 'Problem 22', 'Description 22', 'Instruction 22', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (3, 'Problem 23', 'Description 23', 'Instruction 23', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (1, 'Problem 24', 'Description 24', 'Instruction 24', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (2, 'Problem 25', 'Description 25', 'Instruction 25', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (3, 'Problem 26', 'Description 26', 'Instruction 26', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (1, 'Problem 27', 'Description 27', 'Instruction 27', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (2, 'Problem 28', 'Description 28', 'Instruction 28', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (3, 'Problem 29', 'Description 29', 'Instruction 29', 10, 10);
            insert into public.problems (level_id, title, description, instruction, likes, dislikes) values (1, 'Problem 30', 'Description 30', 'Instruction 30', 10, 10);
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
            `,
        );
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

// const insertUserSubmission = async () => {
//     try {
//         await pool.query(
//             `
//             insert into public.submissions (user_problems_id ,  language_id,    runtime,    memory,     status,     code)
//                                     values (1,                  1,              10,         10,         'fail',     'Submit code 1');
//             insert into public.submissions (user_problems_id ,  language_id,    runtime,    memory,     status,     code)
//                                     values (2,                  1,              10,         10,         'fail',     'Submit code 2');
//             `,
//         );
//     } catch (err) {
//         console.log(err);
//         process.exit(1);
//     }
// };

const insertSumbission = async () => {
    try {
        await pool.query(
            `
            insert into public.submissions (user_problems_id ,  language_id,    runtime,    memory,     status,     code,     datetime) 
                                    values (1,                  1,              10,         10,         'Accepted',     'Submit code 1', '16:54 Nov 03, 2023');
            insert into public.submissions (user_problems_id ,  language_id,    runtime,    memory,     status,     code,     datetime)
                                    values (1,                  2,              10,         10,         'Wrong answar',     'Submit code 2', '18:00 Nov 03, 2023');
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
        await insertLanguages();
        await insertProblems();
        await insertTestCases();
        await insertProblemLanguages();
        await insertUserProblems();
        await insertSumbission();
        // await insertUserSubmission();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
})();
