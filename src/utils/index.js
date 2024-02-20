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

module.exports = {
    sortById,
    sortBySemester,
};
