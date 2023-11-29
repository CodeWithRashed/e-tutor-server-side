const { Course } = require("../../models");

const findCourses = async (query) => {
  let findQuery = {};
  let page = parseInt(query.page);
  let pageSize = parseInt(query.pageSize);
  let isApproved = query.isApproved;

  if (isApproved == "Approved" ) {
    findQuery = { isApproved: "Approved" };

  }

  if (isApproved == "All") {
    findQuery = { isApproved: { $in: ["Pending", "Approved", "Rejected"] } };
  }



  let totalPageSize = 5;
  if (pageSize) {
    totalPageSize = pageSize;
  }
  const startIndex = (page - 1) * pageSize;

  const options = {
    sort: {
      enrollCount: -1,
    },
  };
  const result = await Course.find(findQuery)
    .skip(startIndex)
    .limit(totalPageSize)
    .select(
      "_id thumbnail description title teacher price image enrollCount duration level language enrollCount rating isApproved"
    )
    .populate("teacher", "name email image category, experience, title")
    .sort(options.sort)
    .exec();
  return result;
};

module.exports = findCourses;
