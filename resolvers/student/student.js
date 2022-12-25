const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const StudentModel = require('../../models/students/student');

const getStudents = async (_, args) => StudentModel.getStudents();

const getStudent = async (_, args) => StudentModel.getStudent(args.id);

const createStudent = async (_, { student: { userName, email, password } }) => {

    const existingStudent = await StudentModel.findOne({ email })
    if (existingStudent) throw new Error("user already exists with this email");

    const student = await StudentModel.createStudent({
        userName,
        email: email.toLowerCase(),
        password: await bcrypt.hash(password, 10)
    });

    const token = jwt.sign(
        { student_id: student._id, email },
        process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });

    student.token = token;

    const res = await student.save();

    return {
        id: res.id,
        ...res._doc
    };
};

const updateStudent = async (_, args) => StudentModel.updateStudent(args.id, args.student);

const studentLogin = async (_, { student: { email, password } }) => {
    const student = await StudentModel.findOne({ email })

    if (student && (await bcrypt.compare(password, student.password))) {
        const token = jwt.sign(
            { student_id: student._id, email },
            process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        student.token = token;
        return {
            id: student.id,
            ...student._doc
        }
    } else {
        throw new Error("Incorrect password");
    };
};

module.exports = {
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    studentLogin
};