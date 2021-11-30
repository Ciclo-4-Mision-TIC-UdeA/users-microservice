import { prisma } from '../config/prisma';

const userResolvers = {
  Query: {
    users: async (parent, args, context) => {
      return await prisma.user.findMany({
        include: {
          profile: true,
        },
      });
    },
  },
};

export { userResolvers };
