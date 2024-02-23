const sortById = function (list) {
    return list.sort((a, b) => a.id - b.id);
};

const sortBySemester = (classes) => {
    var newArray = {};
    for (let i = 0; i < classes.length; i++) {
        let key = classes[i].semester_name;
        let newE = {
            subject_id: classes[i].subject_id,
            subject_name: classes[i].subject_name,
            teacher_name: classes[i].teacher_name,
            class_id: classes[i].class_id,
        };
        if (key in newArray) {
            newArray[key] = [...newArray[key], newE];
        } else {
            newArray[key] = [newE];
        }
    }
    return newArray;
};

const sortBySemesterByTeacher = (classes) => {
    var newArray = {};
    for (let i = 0; i < classes.length; i++) {
        let key = classes[i].semester_name;
        let newE = {
            subject_id: classes[i].subject_id,
            subject_name: classes[i].subject_name,
            teacher_name: classes[i].teacher_name,
            class_id: classes[i].class_id,
        };
        if (key in newArray) {
            let check = false;
            for (let j = 0; j < newArray[key].length; j++) {
                if (newArray[key][j].subject_id === classes[i].subject_id) {
                    check = true;
                    break;
                }
            }
            if (!check) {
                newArray[key] = [...newArray[key], newE];
            }
        } else {
            newArray[key] = [newE];
        }
    }
    return newArray;
};

const sortByProblemsByTopics2 = (problems) => {
    var newArray = {};
    for (let i = 0; i < problems.length; i++) {
        let key = problems[i].topic_name;
        let newE = {
            problem_id: problems[i].problem_id,
            title: problems[i].title,
            time_limit: problems[i].time_limit,
            start_time: problems[i].start_time,
            end_time: problems[i].end_time,
            class_name: problems[i].name,
        };
        if (key in newArray) {
            if (problems[i].problem_id !== null) {
                newArray[key] = [...newArray[key], newE];
            }
        } else {
            if (problems[i].problem_id === null) {
                newArray[key] = [];
            } else {
                newArray[key] = [newE];
            }
        }
    }
    return newArray;
};

const sortByProblemsByTopics = (problems) => {
    var results = {};
    for (var i = 0; i < problems.length; i++) {
        let class_name = problems[i].class_name;
        let newE = {
            problem_id: problems[i].problem_id,
            title: problems[i].title,
            time_limit: problems[i].time_limit,
            start_time: problems[i].start_time,
            end_time: problems[i].end_time,
        };

        if (!(class_name in results)) {
            results[class_name] = {};
        }

        let topic_name = problems[i].topic_name;
        if (topic_name in results[class_name]) {
            results[class_name][topic_name] = [...results[class_name][topic_name], newE];
        } else {
            if (problems[i].problem_id === null) {
                results[class_name][topic_name] = [];
            } else {
                results[class_name][topic_name] = [newE];
            }
        }
    }
    return results;
};

module.exports = {
    sortById,
    sortBySemester,
    sortBySemesterByTeacher,
    sortByProblemsByTopics,
};
