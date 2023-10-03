const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    Username: {type: String, /* required: true, unique: true */},
    Password: {type: String, /* required: true */},
    Email: {type: String, /* required: true, unique: true */},
    topic_id: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Topic',
        },
      ],
})


const User = mongoose.model('User', userSchema);

module.exports = User;