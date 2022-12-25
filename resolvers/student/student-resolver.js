const { getStudents, getStudent, createStudent, updateStudent, studentLogin } = require('./student');

const StudentResolver = {
    Query: {
        getStudent,
        getStudents,
    },

    Mutation: {
        createStudent,
        updateStudent,
        studentLogin,
    }
}

module.exports = StudentResolver;