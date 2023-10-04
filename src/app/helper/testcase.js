const pool = require('../../config/db');
const { param } = require('../../routes/submission');

const getTestcaseByProblemID = async (problem_id) => {
    try {
        const query = 'SELECT * FROM testcases WHERE problem_id = $1';
        const response = await pool.query(query, [problem_id]);
        if (response.rows.length > 0) {
            return response.rows;
        } else {
            return [];
        }
    } catch (err) {
        console.log(err);
        return [err];
    }
};

const splitTC = (str) => {
    if (str.contains('[')) {
        var results = [];
        for (var i = 0; i < str.length; i++) {
            // if ()
        }
    } else {
        return str.split(' ');
    }
};

const isNumber = (str) => {
    console.log('isNumber: ', JSON.parse(str));
    return !isNaN(str);
};

const isArray = (str) => {
    console.log(JSON.parse(str));
    return Array.isArray(JSON.parse(str));
};

const convertToCorrectType = (str) => {
    if (isNumber(str)) return parseInt(str);
    else if (isArray(str)) return;
};

const getNameFunc = (str) => {
    var nameFunc = '';
    for (let i = 15; i < str.length; i++) {
        if (str[i] == '(') break;
        nameFunc += str[i];
    }
    return nameFunc;
};

const supportSubmitCode = (code, numParams, input) => {
    code = 'import sys\n' + code;
    // code = 'from ast import literal_eval\n' + code;
    var nameFunc = 'twoSum';
    var addParams = '';
    var params = '';
    console.log(input);
    for (var i = 0; i < numParams; i++) {
        var j = i + 1;
        addParams += '\t' + 'a' + i + ' = ' + input[i] + '\n';
        if (i == numParams - 1) {
            params += 'a' + i;
        } else {
            params += 'a' + i + ',';
        }
    }
    code += `
if __name__ == "__main__":
`;
    code += addParams;
    code += '\t' + 'print(' + nameFunc + '(' + params + ')' + ')';
    return code;
};

module.exports = { getTestcaseByProblemID, isNumber, isArray, supportSubmitCode };
