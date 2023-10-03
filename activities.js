const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  topics: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Topic',
    },
  ],
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;