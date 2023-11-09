const pool = require('../../config/db');

const getProblemByLevel = async (level, limit, offset) => {
    var response;
    if (level === 'empty') {
        const query = `
            select p.id, p.title, p.description, l.name
            from problems p 
            left join levels l on p.level_id = l.id 
            order by p.id asc
            limit $1
            offset $2
        `;
        response = await pool.query(query, [limit, offset]);
    } else {
        const query = `
            select p.id, p.title, p.description, l.name
            from problems p 
            left join levels l on p.level_id = l.id 
            where l."name" = $1
            order by p.id asc
            limit $2
            offset $3
        `;
        response = await pool.query(query, [level, limit, offset]);
    }
    return response.rows;
};

const getProblemByLevelByName = async (name, level, limit, offset) => {
    var response;
    if (level === 'empty') {
        const query = `
            select p.id, p.title, p.description, l.name
            from problems p 
            left join levels l on p.level_id = l.id 
            where p.title ilike '%${name}%'
            order by p.id asc
            limit $1
            offset $2
        `;
        response = await pool.query(query, [limit, offset]);
    } else {
        const query = `
            select p.id, p.title, p.description, l.name
            from problems p 
            left join levels l on p.level_id = l.id 
            where l."name" = $1 
            and p.title ilike '%${name}%'
            order by p.id asc
            limit $2
            offset $3
        `;
        response = await pool.query(query, [level, limit, offset]);
    }
    return response.rows;
};

const getProblemByLevelByStatus = async (user_id, level, status, limit, offset) => {
    var response;
    if (level === 'empty' && status === 'empty') {
        const query = `
            select p.id, p.title, p.description, l.name, up.status as status, up.user_id 
            from problems p 
            left join levels l on p.level_id = l.id 
            left join (
                select * 
                from user_problems up 
                where up.user_id = $1
            ) up 
                on up.problem_id = p.id 
            order by p.id asc
            limit $2
            offset $3
        `;
        response = await pool.query(query, [user_id, limit, offset]);
    } else if (level !== 'empty' && status === 'empty') {
        const query = `
            select p.id, p.title, p.description, l.name, up.status as status, up.user_id 
            from problems p 
            left join levels l on p.level_id = l.id 
            left join (
                select * 
                from user_problems up 
                where up.user_id = $1
            ) up 
                on up.problem_id = p.id 
            where 
                l."name" = $2
            order by p.id asc
            limit $3
            offset $4
        `;
        response = await pool.query(query, [user_id, level, limit, offset]);
    } else if (level === 'empty' && status !== 'empty') {
        const query = `
            select p.id, p.title, p.description, l.name, up.status as status, up.user_id 
            from problems p 
            left join levels l on p.level_id = l.id 
            left join (
                select * 
                from user_problems up 
                where up.user_id = $1
            ) up 
                on up.problem_id = p.id 
            where 
                up.status = $2
            order by p.id asc
            limit $3
            offset $4
        `;
        response = await pool.query(query, [user_id, status, limit, offset]);
    } else {
        const query = `
            select p.id, p.title, p.description, l.name, up.status as status, up.user_id 
            from problems p 
            left join levels l on p.level_id = l.id 
            left join (
                select * 
                from user_problems up 
                where up.user_id = $1
            ) up 
                on up.problem_id = p.id 
            where 
                up.status = $2 and l."name" = $5
            order by p.id asc
            limit $3
            offset $4
        `;
        response = await pool.query(query, [user_id, status, limit, offset, level]);
    }
    return response.rows;
};

const getProblemByLevelByStatusByName = async (user_id, level, status, limit, offset, name) => {
    var response;
    if (level === 'empty' && status === 'empty') {
        const query = `
            select p.id, p.title, p.description, l.name, up.status as status, up.user_id 
            from problems p 
            left join levels l on p.level_id = l.id 
            left join (
                select * 
                from user_problems up 
                where up.user_id = $1
            ) up 
                on up.problem_id = p.id 
            where p.title ilike '%${name}%'
            order by p.id asc
            limit $2
            offset $3
        `;
        response = await pool.query(query, [user_id, limit, offset]);
    } else if (level !== 'empty' && status === 'empty') {
        const query = `
            select p.id, p.title, p.description, l.name, up.status as status, up.user_id 
            from problems p 
            left join levels l on p.level_id = l.id 
            left join (
                select * 
                from user_problems up 
                where up.user_id = $1
            ) up 
                on up.problem_id = p.id 
            where 
                l."name" = $2
                and p.title ilike '%${name}%'
            order by p.id asc
            limit $3
            offset $4
        `;
        response = await pool.query(query, [user_id, level, limit, offset]);
    } else if (level === 'empty' && status !== 'empty') {
        const query = `
            select p.id, p.title, p.description, l.name, up.status as status, up.user_id 
            from problems p 
            left join levels l on p.level_id = l.id 
            left join (
                select * 
                from user_problems up 
                where up.user_id = $1
            ) up 
                on up.problem_id = p.id 
            where 
                up.status = $2
                and p.title ilike '%${name}%'
            order by p.id asc
            limit $3
            offset $4
        `;
        response = await pool.query(query, [user_id, status, limit, offset]);
    } else {
        const query = `
            select p.id, p.title, p.description, l.name, up.status as status, up.user_id 
            from problems p 
            left join levels l on p.level_id = l.id 
            left join (
                select * 
                from user_problems up 
                where up.user_id = $1
            ) up 
                on up.problem_id = p.id 
            where 
                up.status = $2 
                and l."name" = $5
                and p.title ilike '%${name}%'
            order by p.id asc
            limit $3
            offset $4
        `;
        response = await pool.query(query, [user_id, status, limit, offset, level]);
    }
    return response.rows;
};

module.exports = {
    getProblemByLevel,
    getProblemByLevelByStatus,
    getProblemByLevelByName,
    getProblemByLevelByStatusByName,
};
