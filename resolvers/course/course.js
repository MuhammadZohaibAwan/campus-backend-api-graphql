const Course = require('../../models/courses/course');


const getCourses = async (_, args) => {
    return Course.getCourses();
};

const getCourse = async (_, { id }) => Course.getCourse(id);

const createCourse = async (_, { course }) => Course.createCourse(course);


const updateCourse = async (_, { id, course }, ctx) => Course.updateCourse(id, course);


module.exports = {
    getCourse,
    getCourses,
    createCourse,
    updateCourse,
};