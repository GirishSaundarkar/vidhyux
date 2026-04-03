const express = require('express');

const router = express.Router();
const bookUsController = require('../../controllers/bookUs.controller');

router.route('/').post(bookUsController.bookUs).get(bookUsController.getBookUs);

module.exports = router;
