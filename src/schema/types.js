export default `
  type Subscription {
    assignmentAdded(studentID: ID!): Assignment
  }
  type AuthPayload {
    token: String
    user: User
  }
  input UserInput {
    # First and last name
    firstName: String!
    lastName: String!
    email: String!
    role: Role
    password: String
  }
  enum Role {
    Admin
    Student
    Faculty
  }
  interface User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    role: Role!
  }
  type Student implements User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    role: Role!
    courses: [Course]
    assignments: [Assignment]
    gpa: Float!
  }
  type Faculty implements User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    role: Role!
    courses: [Course]
  }
  type Admin implements User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    role: Role!
  }
  type Course {
    id: ID!
    name: String!
    professor: Faculty
    students: [Student]
    assignments: [Assignment]
  }
  type Assignment {
    id: ID!
    name: String!
    course: Course!
    grades: [AssignmentGrade]
  }
  type AssignmentGrade {
    id: ID!
    assignment: Assignment
    student: User
    grade: String!
  }
`;
