const { getCourses, getCourse, createCourse, updateCourse } = require('./course');

const CourseResolver = {
    Query: {
        getCourse,
        getCourses,
    },

    Mutation: {
        createCourse,
        updateCourse,
    }
}

module.exports = CourseResolver;