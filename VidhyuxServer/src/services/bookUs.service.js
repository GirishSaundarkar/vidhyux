const { BookUs } = require('../models');

const bookUs = async (bookUsBody) => {
  return BookUs.create(bookUsBody);
};

const queryBookUs = async (filter, options) => {
  const bookUsList = await BookUs.paginate(filter, options);
  return bookUsList;
};

module.exports = {
  bookUs,
  queryBookUs,
};
