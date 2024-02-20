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
        };
        if (key in newArray) {
            newArray[key] = [...newArray[key], newE];
        } else {
            newArray[key] = [newE];
        }
    }
    return newArray;
};

const sortByProblemsByTopics = (problems) => {
    var newArray = {};
    for (let i = 0; i < problems.length; i++) {
        let key = problems[i].topic_name;
        let newE = {
            problem_id: problems[i].problem_id,
            title: problems[i].title,
            time_limit: problems[i].time_limit,
            start_time: problems[i].start_time,
            end_time: problems[i].end_time,
        };
        if (key in newArray) {
            newArray[key] = [...newArray[key], newE];
        } else {
            newArray[key] = [newE];
        }
    }
    return newArray;
};

module.exports = {
    sortById,
    sortBySemester,
    sortByProblemsByTopics,
};
