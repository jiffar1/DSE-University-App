export default {
  addUser: (parent, args, { db }, info) => {
    return db.User.create({
      firstName: args.firstName,
      lastName: args.lastName,
      role: args.role,
      email: args.email,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(newCat => {
      return db.User.findAll();
    });
  }
};
