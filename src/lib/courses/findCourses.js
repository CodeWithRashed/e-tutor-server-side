const { Course } = require("../../models");

const findCourses = async (query, page, pageSize) => {
    
    let totalPageSize = null;
    if (pageSize) {
        totalPageSize = pageSize;
    }
    const startIndex = (page - 1) * pageSize;
 

    const options = {
        sort: {
            enrollCount: 1
        }
    };
    const result = await Course.find(query)
    .skip(startIndex)
    .limit(totalPageSize)
    .select('_id thumbnail title teacher price image enrollCount')
    .populate('teacher', 'name email image')
    .sort(options.sort)
    .exec();
    return result
}

module.exports = findCourses