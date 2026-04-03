/* eslint-disable no-shadow */
const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { bookUsService } = require('../services');

const bookUs = catchAsync(async (req, res) => {
  const result = await bookUsService.bookUs(req.body);
  res.status(httpStatus.CREATED).send(result);
});

const getBookUs = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['firstName', 'lastName', 'contactNumber']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await bookUsService.queryBookUs(filter, options);
  res.status(httpStatus.OK).send(result);
});

module.exports = {
  bookUs,
  getBookUs,
};
