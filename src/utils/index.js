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

const sortBySemesterByTeacher2 = (classes) => {
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

const sortBySemesterByTeacher = (classes) => {
    var results = [];

    for (let i = 0; i < classes.length; i++) {
        let semester_name = classes[i].semester_name;
        let subjects = [];
        for (let j = i; j < classes.length; j++) {
            if (classes[j].semester_name === semester_name) {
                let subject_id = classes[j].subject_id;
                let subject_name = classes[j].subject_name;
                let teacher_name = classes[j].teacher_name;
                let thisClasses = [
                    {
                        class_name: classes[j].class_name,
                        class_id: classes[j].class_id,
                    },
                ];

                for (let k = j + 1; k < classes.length; k++) {
                    if (subject_id === classes[k].subject_id) {
                        var newClass = {
                            class_name: classes[k].class_name,
                            class_id: classes[k].class_id,
                        };
                        thisClasses.push(newClass);

                        if (k === classes.length - 1) {
                            j = k;
                            break;
                        }
                    } else {
                        j = k - 1;
                        break;
                    }
                }

                var subject = {
                    subject_id,
                    subject_name,
                    teacher_name,
                    classes: thisClasses,
                };
                subjects.push(subject);
                if (j === classes.length - 1) {
                    i = j;
                    break;
                }
            } else {
                i = j - 1;
                // console.log(j);
                break;
            }
        }

        results.push({
            semester_name,
            subjects,
        });
    }
    return results;
};

const sortByProblemsByTopics = (problems) => {
    var results = {};

    for (var i = 0; i < problems.length; i++) {
        let class_name = problems[i].class_name;

        if (!(class_name in results)) {
            results[class_name] = {
                class_id: problems[i].class_id,
                class_name: problems[i].class_name,
                topics: {},
            };
        }

        let problem_id = problems[i].problem_id;
        var problems_list = [];
        if (problem_id !== null) {
            problems_list = [
                {
                    topic_problems_id: problems[i].topic_problems_id,
                    problem_id: problems[i].problem_id,
                    title: problems[i].title,
                    time_limit: problems[i].time_limit,
                    start_time: problems[i].start_time,
                    end_time: problems[i].end_time,
                },
            ];
        }

        let topic_name = problems[i].topic_name;

        let newElement = {
            class_topics_id: problems[i].class_topics_id,
            topic_name,
            idx: problems[i].idx,
            problems: problems_list,
        };

        for (var j = i + 1; j < problems.length; j++) {
            if (problems[i].topic_name == problems[j].topic_name) {
                var element = {
                    topic_problems_id: problems[j].topic_problems_id,
                    problem_id: problems[j].problem_id,
                    title: problems[j].title,
                    time_limit: problems[j].time_limit,
                    start_time: problems[j].start_time,
                    end_time: problems[j].end_time,
                };
                problems_list.push(element);
            } else {
                i = j - 1;
                break;
            }
        }

        newElement['problems'] = problems_list;

        results[class_name]['topics'][topic_name] = newElement;

        // if (topic_name in results[class_name]['topics']) {
        //     results[class_name]['topics'][topic_name] = [...results[class_name]['topics'][topic_name], newElement];
        // } else {
        //     if (problems[i].problem_id === null) {
        //         results[class_name]['topics'][topic_name] = [];
        //     } else {
        //         results[class_name]['topics'][topic_name] = [newElement];
        //     }
        // }
    }
    return results;
};

const sortByProblemsByTopics2 = (problems) => {
    var results = {};

    for (var i = 0; i < problems.length; i++) {
        let class_name = problems[i].class_name;
        if (!(class_name in results)) {
            results[class_name] = {
                class_id: problems[i].class_id,
                class_name: problems[i].class_name,
                topics: {},
            };
        }
    }

    return results;
};

const getCurrentTimeFormatted = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const date = new Date();
    const hour = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    const formattedTime = `${hour}:${minutes}:${seconds} ${month} ${day}, ${year}`;
    return formattedTime;
};

module.exports = {
    sortById,
    sortBySemester,
    sortBySemesterByTeacher,
    sortByProblemsByTopics,
    sortByProblemsByTopics2,
    getCurrentTimeFormatted,
};
