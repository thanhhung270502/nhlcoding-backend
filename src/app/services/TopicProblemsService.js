const pool = require('../../config/db');
const {
    sortBySemester,
    sortByProblemsByTopics,
    sortBySemesterByTeacher,
    sortByProblemsByTopics2,
} = require('../../utils');

class TopicProblemsService {
    // [GET]
    async index(req, res) {
        try {
            const response = await pool.query('SELECT * FROM classes');
            return res.status(200).json(response.rows);
        } catch (err) {
            return res.status(500).json('Internal Server Error');
        }
    }

    // [GET]
    async getAllClasses(req, res) {
        try {
            const userID = req.userID;
            const userRole = req.userRole;

            console.log(userID, userRole);

            let query = '';
            if (userRole === 'student') {
                query = `
                    select s2."name" as semester_name, s.id as subject_id, s."name" as subject_name, u.name as teacher_name, c.id as class_id, c."name" as class_name
                    from student_classes sc 
                    join classes c on c.id = sc.class_id 
                    join subjects s ON s.id = c.subject_id 
                    join semesters s2 on s2.id = c.semester_id  
                    join teacher_classes tc on tc.class_id = c.id 
                    join users u on u.id = tc.teacher_id 
                    where sc.student_id = $1
                    order by s2."name" desc, s."name" asc, c.id asc
                `;
                const response = await pool.query(query, [userID]);

                return res.status(200).json({
                    code: 200,
                    message: 'successfully',
                    body: {
                        courses: sortBySemesterByTeacher(response.rows),
                    },
                });
            } else if (userRole === 'teacher') {
                query = `
                    select s2."name" as semester_name, s.id as subject_id, s."name" as subject_name, u.name as teacher_name, c.id as class_id, c."name" as class_name
                    from teacher_classes tc 
                    join classes c on c.id = tc.class_id 
                    join subjects s ON s.id = c.subject_id 
                    join semesters s2 on s2.id = c.semester_id 
                    join users u on u.id = tc.teacher_id 
                    where tc.teacher_id = $1
                    order by s2."name" desc, s."name" asc, c.id asc
                `;
                const response = await pool.query(query, [userID]);
                return res.status(200).json({
                    code: 200,
                    message: 'successfully',
                    body: {
                        courses: sortBySemesterByTeacher(response.rows),
                    },
                });
            }
            return res.status(200).json({
                code: 200,
                message: 'successfully',
                body: {
                    courses: [],
                },
            });
        } catch (err) {
            return res.status(500).json('Internal Server Error');
        }
    }

    // [GET]
    async getAllProblemsByTopics(req, res) {
        try {
            const class_id = req.params.slug;
            const userID = req.userID;
            const userRole = req.userRole;

            if (userRole === 'normal') {
                return res.status(403).json({
                    code: 403,
                    message: 'You must have permission to access this class.',
                });
            } else if (userRole === 'student') {
                let query = `
                    select * from student_classes sc 
                    where sc.class_id = $1 and sc.student_id = $2
                `;
                const checkBelongsToClass = await pool.query(query, [class_id, userID]);

                if (checkBelongsToClass.rows.length === 0) {
                    return res.status(400).json({
                        code: 400,
                        message: 'You do not belong to this class.',
                    });
                }

                query = `
                    select ct.id as class_topics_id, ct.topic_name, tp.id as topic_problems_id, tp.problem_id, tp.time_limit , tp.start_time , tp.end_time, p.title, ct.class_id, c."name" as class_name, ct.idx 
                    from class_topics ct 
                    left join topic_problems tp on tp.class_topics_id = ct.id 
                    left join problems p on p.id = tp.problem_id 
                    left join classes c on c.id = ct.class_id 
                    where ct.class_id = $1
                    order by ct.class_id , ct.idx
                `;

                const response = await pool.query(query, [class_id]);

                return res.status(200).json({
                    code: 200,
                    message: 'successfully',
                    body: {
                        topic_problems: sortByProblemsByTopics(response.rows),
                    },
                });
            } else if (userRole === 'teacher') {
                // Check belongs to class
                let query = `
                select * 
                from teacher_classes tc 
                join classes c on c.id  = tc.class_id 
                where tc.class_id = $1 and tc.teacher_id = $2
                `;
                let values = [class_id, userID];

                const checkBelongsToClass = await pool.query(query, values);

                if (checkBelongsToClass.rows.length === 0) {
                    return res.status(400).json({
                        code: 400,
                        message: 'You do not belong to this class.',
                    });
                }

                // Get all classes in this subject
                query = `
                select tc.teacher_id , tc.class_id, c.subject_id , c.semester_id , c."name"  as class_name
                from teacher_classes tc 
                join classes c on c.id  = tc.class_id 
                where c.subject_id = $1 and tc.teacher_id = $2 and c.semester_id = $3
                `;
                values = [checkBelongsToClass.rows[0].subject_id, userID, checkBelongsToClass.rows[0].semester_id];

                const getAllClassesInSubject = await pool.query(query, values);

                //
                let condition = '';
                for (let i = 0; i < getAllClassesInSubject.rows.length; i++) {
                    if (i === 0) {
                        condition += 'ct.class_id = ' + getAllClassesInSubject.rows[i].class_id;
                    } else {
                        condition += ' or ct.class_id = ' + getAllClassesInSubject.rows[i].class_id;
                    }
                }

                query = `
                    select ct.id as class_topics_id, tp.id as topic_problems_id, ct.topic_name, tp.problem_id, tp.time_limit , tp.start_time , tp.end_time, p.title, ct.class_id, c."name" as class_name, ct.idx 
                    from class_topics ct 
                    left join topic_problems tp on tp.class_topics_id = ct.id 
                    left join problems p on p.id = tp.problem_id 
                    left join classes c on c.id = ct.class_id 
                    where ${condition}
                    order by ct.class_id, ct.idx
                `;

                const response = await pool.query(query);

                if (response.rows.length > 0) {
                    return res.status(200).json({
                        code: 200,
                        message: 'successfully',
                        body: {
                            topic_problems: sortByProblemsByTopics(response.rows),
                        },
                    });
                } else {
                    return res.status(200).json({
                        code: 200,
                        message: 'successfully',
                        body: {
                            topic_problems: sortByProblemsByTopics2(getAllClassesInSubject.rows),
                        },
                    });
                }
            }
        } catch (err) {
            return res.status(500).json('Internal Server Error');
        }
    }

    // [GET]
    async getAllParticipantsInClass(req, res) {
        try {
            const class_id = req.params.slug;
            const userID = req.userID;
            const userRole = req.userRole;

            if (userRole === 'normal') {
                return res.status(403).json({
                    code: 403,
                    message: 'You must have permission to access this class.',
                });
            }

            let query = `
                select * from student_classes sc 
                where sc.class_id = $1 and sc.student_id = $2
            `;
            const checkBelongsToClass = await pool.query(query, [class_id, userID]);

            if (checkBelongsToClass.rows.length === 0) {
                return res.status(400).json({
                    code: 400,
                    message: 'You do not belong to this class.',
                });
            }
            query = `
                select u."name", s.student_code, u."role" 
                from student_classes sc 
                join users u on u.id = sc.student_id
                join students s on s.user_id = sc.student_id 
                where sc.class_id = $1
            `;

            const response = await pool.query(query, [class_id]);
            return res.status(200).json({
                code: 200,
                message: 'successfully',
                body: {
                    participants: response.rows,
                },
            });
        } catch (err) {
            return res.status(500).json('Internal Server Error');
        }
    }

    // [GET]
    async getSubjectNameByClassID(req, res) {
        const userID = req.userID;
        const userRole = req.userRole;

        const id = parseInt(req.params.slug);

        if (userRole === 'normal') {
            return res.status(400).json({
                code: 400,
                message: "You don't hove permission to use this service",
            });
        }

        let query = `
            select s."name" as subject_name
            from classes c 
            join subjects s on s.id  = c.subject_id 
            where c.id = $1
        `;

        try {
            const response = await pool.query(query, [id]);

            return res.status(201).json({
                code: 201,
                message: 'Get subject_name by class_id successfully',
                body: {
                    subject_name: response.rows[0].subject_name,
                },
            });
        } catch (err) {
            return res.status(500).json('Internal Server Error');
        }
    }

    // [GET]
    async getClassTopic(req, res) {
        const userID = req.userID;
        const userRole = req.userRole;

        if (userRole !== 'teacher') {
            return res.status(400).json({
                code: 400,
                message: "You don't hove permission to use this service",
            });
        }
    }

    // [GET]
    async getTopicProblem(req, res) {
        try {
            const id = req.params.slug;
            const response = await pool.query(`select * from topic_problems where id = ${id}`);
            return res.status(200).json({
                code: 200,
                message: 'Successully',
                body: response.rows,
            });
        } catch (err) {
            return res.status(500).json('Internal Server Error');
        }
    }

    // [POST]
    async create(req, res) {
        try {
            const { name, subject_id, semester_id } = req.body;

            if (!name || !subject_id || !semester_id) {
                return res.status(400).json({
                    code: 400,
                    message: 'Invalid parameters',
                });
            }

            // Check existing classes
            var getClass = await pool.query(
                `SELECT * FROM classes WHERE "name" = $1 AND subject_id = $2 AND semester_id = $3`,
                [name, subject_id, semester_id],
            );

            if (getClass.rows.length > 0) {
                return res.status(400).json({
                    code: 400,
                    message: 'Existing class',
                });
            }

            const response = await pool.query(
                `INSERT INTO classes ("name", subject_id, semester_id) VALUES ($1, $2, $3)`,
                [name, subject_id, semester_id],
            );

            getClass = await pool.query(
                `SELECT * FROM classes WHERE "name" = $1 AND subject_id = $2 AND semester_id = $3`,
                [name, subject_id, semester_id],
            );

            return res.status(201).json({
                code: 201,
                message: 'Created class successfully',
                body: getClass.rows[0],
            });
        } catch (err) {
            return res.status(500).json('Internal Server Error');
        }
    }

    // [POST]
    async createTopicOfClass(req, res) {
        const userID = req.userID;
        const userRole = req.userRole;

        if (userRole !== 'teacher') {
            return res.status(400).json({
                code: 400,
                message: "You don't hove permission to use this service",
            });
        }
        const class_id = parseInt(req.params.slug);
        const { topic_name, idx } = req.body;

        let query = `
            INSERT INTO class_topics (class_id, topic_name, idx) VALUES ($1, $2, $3)
        `;
        let values = [class_id, topic_name, idx];
        try {
            const response = await pool.query(query, values);

            return res.status(201).json({
                code: 201,
                message: 'Create new topic successfully',
            });
        } catch (err) {
            return res.status(500).json('Internal Server Error');
        }
    }

    // [POST]
    async createExercise(req, res) {
        const userRole = req.userRole;

        if (userRole !== 'teacher') {
            return res.status(400).json({
                code: 400,
                message: "You don't hove permission to use this service",
            });
        }

        let {
            title,
            level_id,
            description,
            instruction,
            categories,
            is_public,
            problem_languages,
            testcases,
            class_topics_id,
            time_limit,
            start_time,
            end_time,
            retries,
        } = req.body;

        console.log(req.body);
        console.log(is_public);

        if (class_topics_id) {
            class_topics_id = parseInt(class_topics_id);
        }

        if (time_limit) {
            time_limit = parseFloat(time_limit);
        }

        if (retries) {
            retries = parseFloat(retries);
        }

        try {
            const result = await pool.query(
                `
                INSERT INTO problems (title, level_id, description, instruction, categories, is_public) 
                VALUES ($1, $2, $3, $4, $5, $6)
                RETURNING *
            `,
                [title, level_id, description, instruction || '', categories || [], is_public || false],
            );

            const problem_id = result.rows.length > 0 ? result.rows[0].id : -1;
            if (problem_id === -1) {
                return res.json(422).json({
                    message: 'Problem created failed',
                    code: 422,
                });
            }

            console.log(problem_id);

            // testcases
            for (let i = 0; i < testcases.length; i++) {
                await pool.query('INSERT INTO testcases (problem_id, "input", "output") VALUES ($1, $2, $3)', [
                    problem_id,
                    testcases[i].input,
                    testcases[i].output,
                ]);
            }

            // problem_languages
            for (let i = 0; i < problem_languages.length; i++) {
                await pool.query(
                    `INSERT INTO problem_languages (problem_id, language_id, initial_code, solution_code, full_code) 
                    VALUES ($1, $2, $3, $4, $5)`,
                    [
                        problem_id,
                        problem_languages[i].language_id,
                        problem_languages[i].initial_code,
                        problem_languages[i].solution_code,
                        problem_languages[i].full_code,
                    ],
                );
            }

            let values = [problem_id, class_topics_id, 15.0, '2024-01-01 14:00:00', '2024-01-01 16:00:00', retries];

            const response = await pool.query(
                `INSERT INTO topic_problems (problem_id, class_topics_id, time_limit,start_time,end_time,retries) VALUES
                ($1, $2, $3, $4, $5, $6)`,
                [problem_id, class_topics_id, time_limit, start_time, end_time, retries],
            );

            console.log(response);

            return res.status(201).json({
                code: 201,
                message: 'Created successfully',
                body: {},
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error',
                error: err,
            });
        }
    }

    // [POST]
    async createTopicProblems(req, res) {
        try {
            let { problem_id, class_topics_id, time_limit, start_time, end_time, retries } = req.body;

            const response = await pool.query(
                `INSERT INTO topic_problems (problem_id, class_topics_id, time_limit,start_time,end_time,retries) VALUES
                (1, 4, 15.0, '2024-01-01 14:00:00', '2024-01-01 16:00:00', 3)`,
            );

            return res.status(201).json({
                code: 201,
                message: 'Created successfully',
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error',
                error: err,
            });
        }
    }

    // [PUT]
    async update(req, res) {
        try {
            let { name, subject_id, semester_id } = req.body;
            const id = parseInt(req.params.slug);

            const getClass = await pool.query(`SELECT * FROM classes WHERE id = $1`, [id]);

            if (getClass.rows.length === 0)
                return res.status(400).json({
                    code: 400,
                    message: 'Subject not found',
                });

            if (!name) name = getClass.rows[0].name;
            if (!semester_id) semester_id = getClass.rows[0].semester_id;
            if (!subject_id) subject_id = getClass.rows[0].subject_id;

            const query = `
                UPDATE classes 
                SET "name" = $1, subject_id = $2, semester_id = $3
                WHERE id = $4
            `;
            const values = [name, subject_id, semester_id, getClass.rows[0].id];

            const response = await pool.query(query, values);

            return res.status(200).json({
                code: 200,
                message: 'Update class successfully',
                body: { name, subject_id, semester_id },
            });
        } catch (err) {
            return res.status(500).json('Internal Server Error');
        }
    }

    // [PUT]
    async updateTopicName(req, res) {
        try {
            let { topic_name } = req.body;
            const id = parseInt(req.params.slug);

            const getClassTopic = await pool.query(`SELECT * FROM class_topics WHERE id = $1`, [id]);

            if (getClassTopic.rows.length === 0)
                return res.status(400).json({
                    code: 400,
                    message: 'This topic is not found',
                });

            if (!topic_name) topic_name = getClassTopic.rows[0].topic_name;

            const query = `
                UPDATE class_topics 
                SET topic_name = $1
                WHERE id = $2
            `;
            const values = [topic_name, id];

            const response = await pool.query(query, values);

            return res.status(200).json({
                code: 200,
                message: 'Update class successfully',
                body: { name, subject_id, semester_id },
            });
        } catch (err) {
            return res.status(500).json('Internal Server Error');
        }
    }

    // [DELETE]
    async delete(req, res) {
        try {
            const id = parseInt(req.params.slug);

            const getClass = await pool.query(`SELECT * FROM classes WHERE id = $1`, [id]);

            if (getClass.rows.length === 0)
                return res.status(400).json({
                    code: 400,
                    message: 'Class not found',
                });

            const query = `DELETE FROM classes WHERE id = $1`;
            const response = await pool.query(query, [id]);

            return res.status(200).json({
                code: 200,
                message: 'Class deleted successfully',
            });
        } catch (err) {
            return res.status(500).json('Internal Server Error');
        }
    }
}

module.exports = new TopicProblemsService();
