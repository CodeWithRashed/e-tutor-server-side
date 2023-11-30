const { Assignment } = require("../../models");

const findAssignments = async (filter) => {
let query = {}
if(filter){
    query = filter
}
  const result = await Assignment.find(query);

  return result;
};

module.exports = findAssignments;
