const { makeExecutableSchema } = require('@graphql-tools/schema');
const { merge } = require('lodash');
const SchemaDefination = require('../models/schema-defination');

const StudentResolver = require('../resolvers/student/student-resolver');
const CourseResolver = require('../resolvers/course/course-resolver');

const { Student, StudentInput, studentLogin } = require('../models/students/student-graphql');
const { Course, CourseInput, Status } = require('../models/courses/course-graphql');


const executableSchema = makeExecutableSchema({

    typeDefs: [
        SchemaDefination,

        Student,
        StudentInput,
        studentLogin,

        Course,
        CourseInput,
        Status
    ],
    resolvers: merge(
        StudentResolver,
        CourseResolver
    )
})


module.exports = executableSchema;