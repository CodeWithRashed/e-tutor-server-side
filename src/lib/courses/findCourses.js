const { Course } = require("../../models");

const findCourses = async () => {
    // const query = {
    //     title: {$regex: queryData.search, $options: 'i'}
    // };

    const options = {
        // sort: {
        //     enrollCount: filter.sort === 'asc' ? 1 : -1
        // }
        sort: {
            enrollCount: 1
        }
    };

    
    // const result = await Course.find('_id title price image').sort(options.sort);
    const result = await Course.find().select('_id title teacher price image enrollCount').populate('teacher', 'name email').sort(options.sort);
    // const result = await Course.find()
    return result
}

module.exports = findCourses