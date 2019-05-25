  import types from "./types";
export default `
  type Query {
    user: [User]
    students: [Student]
    faculty: [Faculty]
    currentUser: User
  }
`;
