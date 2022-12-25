const mongoose = require('mongoose');
const studentSchema = require('../../models/students/student-mongoose');

studentSchema.statics = {

    getStudents() {
        return StudentModel.find({}).populate("course")
    },

    getStudent(id) {
        return StudentModel.findById(id)
    },

    createStudent(student) {
        return StudentModel.create(student)
    },

    updateStudent(student) {
        return StudentModel.create(student)
    },
};

const StudentModel = mongoose.model('Student', studentSchema)
module.exports = StudentModel

