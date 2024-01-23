const sortById = function (list) {
    return list.sort((a, b) => a.id - b.id);
};

module.exports = {
    sortById,
};