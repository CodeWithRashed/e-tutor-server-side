const { Course } = require("../../models");

const findCourses = async (query, page, pageSize) => {

    let findQuery = query


    
    let totalPageSize = null;
    if (pageSize) {
        totalPageSize = pageSize;
        findQuery={}
    }
    const startIndex = (page - 1) * pageSize;
 

    const options = {
        sort: {
            enrollCount: 1
        }
    };
    const result = await Course.find(findQuery)
    .skip(startIndex)
    .limit(totalPageSize)
    .select('_id thumbnail description title teacher price image enrollCount duration level language enrollCount rating')
    .populate('teacher', 'name email image category, experience, title')
    .sort(options.sort)
    .exec();
    return result
}

module.exports = findCourses