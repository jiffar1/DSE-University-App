export default {
  user: (parent, args, context, info) => {
    return context.db.User.findAll();
  },

  // course: (parent, args, { db }, info) => {
  //   const where = args.userId ? { id: args.userId } : {};
  //   return db.course.findAll({
  //     include: [
  //       {
  //         model: db.Course,
  //         attributes: ["name"]
  //       }
  //     ]
  //   });
  // }
};
