const Student = `
    type Student {
        _id:String
        userName: String!
        email: String! 
        password: String!
        phoneNumber: Int
        rollNumber: Int
        token: String
        course : [Course]
        picture: Upload

    }
`;

const StudentInput = `
    input StudentInput {
        userName: String
        email: String! 
        password: String!
        phoneNumber: Int
        age: Int
        rollNumber: Int
        course : [String]
    }
`;

module.exports = {
    Student,
    StudentInput,
}