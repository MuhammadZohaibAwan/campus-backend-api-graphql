const Status = `
    enum Status {
        Compulsory
        Optional
    }`;

const Course = ` 
    type Course {
        _id: String!
        name: String!
        status: Status!
    }`;


const CourseInput = `
    input CourseInput {
        name: String!
        status: Status!
    }`;

module.exports = {
    Status,
    Course,
    CourseInput
}