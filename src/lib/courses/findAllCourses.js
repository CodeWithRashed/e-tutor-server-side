const { Course } = require("../../models");

const findAllCourses = async (filter) => {
    const query = {
        title: {$regex: filter.search, $options: 'i'}
    };

    const options = {
        sort: {
            price: filter.sort === 'asc' ? 1 : -1
        }
    };

    const cursor = await Course.find(query,'_id title price img').sort(options.sort);

    return cursor
}

module.exports = findAllCourses