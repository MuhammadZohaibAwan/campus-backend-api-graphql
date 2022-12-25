const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },

    status: {
        type: String,
        enum: ['Compulsory', 'Optional'],
    },

});


module.exports = courseSchema;
