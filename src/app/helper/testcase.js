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
const supportCpp = (nameFunc, input, code) => {
    var stdin = '';
    var stdout = '\tcout << ' + nameFunc + '(';

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
            stdout += variables[i] + ');\n';
        } else {
            stdout += variables[i] + ', ';
        }
    }
    stdout += '\treturn 0;';
    return stdin + stdout;
};

const supportConvertCode = async (code, numParams, input, language) => {
    var resLanguage = await getLanguageByID(language);
    var nameFunc = getNameFunc(code);
    var template = resLanguage.template;
    template = template.replace('TODO', code);
    template = template.replaceAll('\\n', '\n');

    if (language === 'cpp') {
        template = template.replace('PROCESSING', supportCpp(nameFunc, input, code));
    } else if (language === 'python') {
        template += supportPython(nameFunc, numParams, input);
    }

    return template;
};

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
    isNumber,
    isArray,
    supportSubmitCode,
    getLanguageByID,
    supportConvertCode,
    supportCpp,
};
