const pool = require('../../config/db');

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

// Don't use
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

// Don't use
const isNumber = (str) => {
    console.log('isNumber: ', JSON.parse(str));
    return !isNaN(str);
};

// Don't use
const isArray = (str) => {
    console.log(JSON.parse(str));
    return Array.isArray(JSON.parse(str));
};

// Don't use
const convertToCorrectType = (str) => {
    if (isNumber(str)) return parseInt(str);
    else if (isArray(str)) return;
};

// Don't use
const getNameFunc = (str) => {
    var nameFunc = '';
    var check = false;
    for (let i = 0; i < str.length; i++) {
        if (check === false && str[i] === ' ') {
            check = true;
        }
        if (check === true) {
            if (str[i] === '(') {
                break;
            } else {
                nameFunc += str[i];
            }
        }
    }
    return nameFunc;
};

// Don't use
const getInfoFunc = (str) => {
    var nameFunc = '';
    var typeFunc = '';
    var check = false;
    for (let i = 0; i < str.length; i++) {
        if (check === false) {
            if (str[i] === ' ') check = true;
            else {
                typeFunc += str[i];
            }
        }
        if (check === true) {
            if (str[i] === '(') {
                break;
            } else {
                nameFunc += str[i];
            }
        }
    }
    return {
        name: nameFunc,
        type: typeFunc,
    };
};

const getLanguageByID = async (name) => {
    try {
        const query = 'SELECT * FROM language WHERE name = $1';
        const response = await pool.query(query, [name]);
        if (response.rows.length > 0) {
            return response.rows[0];
        } else {
            return [];
        }
    } catch (err) {
        console.log(err);
        return [err];
    }
};

// Don't use
const supportPython = (nameFunc, numParams, input) => {
    var addParams = '';
    var params = '';
    for (var i = 0; i < numParams; i++) {
        addParams += '\t' + 'a' + i + ' = ' + input[i] + '\n';
        if (i == numParams - 1) {
            params += 'a' + i;
        } else {
            params += 'a' + i + ',';
        }
    }
    return addParams + '\t' + 'print(' + nameFunc + '(' + params + ')' + ')';
};

// Don't use
const supportCpp = (infoFunc, input, code) => {
    var stdin = '';
    var stdout = '';
    if (infoFunc.type.includes('vector')) {
        stdout = '\tcout << convertToString(' + infoFunc.name + '(';
    } else {
        stdout = '\tcout << ' + infoFunc.name + '(';
    }

    var variable = '';
    var type = '';
    var variables = [];
    var types = [];
    var check = false;
    for (let i = code.indexOf('(') + 1; i <= code.indexOf(')'); i++) {
        if (check === false) {
            if (code[i] === ' ') {
                check = true;
            } else {
                type += code[i];
            }
        } else if (check === true) {
            if (code[i] === ',' || code[i] === ')') {
                variables.push(variable);
                types.push(type);
                variable = '';
                type = '';
                check = false;
                i++;
            } else {
                variable += code[i];
            }
        }
    }
    for (var i = 0; i < variables.length; i++) {
        newInput = input[i].replaceAll('[', '{');
        newInput = newInput.replaceAll(']', '}');
        type = types[i].replace('&', '');
        // stdin
        stdin += '\t' + type + ' ' + variables[i] + ' = ' + newInput + ';\n';
        // stdout
        if (i === variables.length - 1) {
            if (infoFunc.type.includes('vector')) {
                stdout += variables[i] + '));\n';
            } else {
                stdout += variables[i] + ');\n';
            }
        } else {
            stdout += variables[i] + ', ';
        }
    }
    stdout += '\treturn 0;';
    return stdin + stdout;
};

/*
    Parameters:
    - code: user's submission code
    - fullCode: full code of this problems and language
*/
const supportConvertCode = async (code, fullCode) => {
    if (!fullCode) return;
    var runCode = fullCode
    // console.log(code)
    runCode = runCode.replace('{{ANSWER}}', code)
    runCode = runCode.replaceAll('\\n', '\n')
    runCode = runCode.replaceAll('\\t', '\t')

    return runCode
};

// Don't use
const supportSubmitCode = (code, numParams, input) => {
    supportConvertCode(code, numParams, input, 'python');
    code = 'import sys\n' + code;
    // code = 'from ast import literal_eval\n' + code;
    var nameFunc = 'twoSum';
    var addParams = '';
    var params = '';
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

module.exports = {
    getTestcaseByProblemID,
    getLanguageByID,
    supportConvertCode
};
