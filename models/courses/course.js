const mongoose = require('mongoose');
const courseSchema = require('../../models/courses/course-mongoose');

courseSchema.statics = {

    getCourses() {
        return CourseModel.find({});
    },

    getCourse(id) {
        return CourseModel.findById(id)
    },

    createCourse(course) {
        return CourseModel.create(course)
    },

    updateCourse(id, {
        name,
        status,
    }) {
        return CourseModel.findByIdAndUpdate(
            id,
            {
                name,
                status,
            },
            {
                new: true
            }
        )
    }

};

const CourseModel = mongoose.model('Course', courseSchema)
module.exports = CourseModel

