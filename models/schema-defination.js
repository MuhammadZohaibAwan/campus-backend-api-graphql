const SchemaDefination = `
# Declare Custom Scalar 
  scalar Date
  scalar Upload

#Schema 
  schema {
    query : Query
    mutation : Mutation
  }

# Queries
  type Query {
    getStudents: [Student]
    getStudent(id: String!): Student
    
    getCourses: [Course]
    getCourse(id: String!): Course
  }

# Mutations
  type Mutation {
    createStudent(student: StudentInput!): Student
    updateStudent(id: String!, student: StudentInput!): Student
    studentLogin(id: String!, student: StudentInput!): Student

    createCourse(course: CourseInput!): Course
    updateCourse(id: String!, course: CourseInput!): Course 
  }
`

module.exports = SchemaDefination;