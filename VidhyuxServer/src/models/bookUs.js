const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const bookUsSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      match: /^[0-9]{10}$/,
    },
    eventDate: [
      {
        type: Date,
        required: true,
      },
    ],
    // events: [
    //   {
    //     eventType: {
    //       type: String,
    //       enum: ['haldi', 'mehendi', 'wedding', 'reception'],
    //       required: true,
    //     },
    //     eventDate: {
    //       type: Date,
    //       required: true,
    //     },
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);

bookUsSchema.plugin(toJSON);
bookUsSchema.plugin(paginate);

const BookUs = mongoose.model('BookUs', bookUsSchema);
module.exports = BookUs;
