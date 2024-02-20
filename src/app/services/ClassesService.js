const pool = require('../../config/db');
const { sortBySemester, sortByProblemsByTopics } = require('../../utils');

class ClassesService {
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
                    select s2."name" as semester_name, s.id as subject_id, s."name" as subject_name, u.name as teacher_name, c.id as class_id
                    from student_classes sc 
                    join classes c on c.id = sc.class_id 
                    join subjects s ON s.id = c.subject_id 
                    join semesters s2 on s2.id = c.semester_id  
                    join teacher_classes tc on tc.class_id = c.id 
                    join users u on u.id = tc.teacher_id 
                    where sc.student_id = $1
                `;
            }

            const response = await pool.query(query, [userID]);

            return res.status(200).json({
                code: 200,
                message: 'successfully',
                body: {
                    courses: sortBySemester(response.rows),
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
                select ct.topic_name, tp.problem_id, tp.time_limit , tp.start_time , tp.end_time, p.title 
                from class_topics ct 
                join topic_problems tp on tp.class_topics_id = ct.id 
                join problems p on p.id = tp.problem_id 
                where ct.class_id = $1
            `;

            const response = await pool.query(query, [class_id]);

            return res.status(200).json({
                code: 200,
                message: 'successfully',
                body: {
                    topic_problems: sortByProblemsByTopics(response.rows),
                },
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

module.exports = new ClassesService();
