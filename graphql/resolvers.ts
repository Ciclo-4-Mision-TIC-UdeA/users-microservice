import { prisma } from '../config/prisma';

const userResolvers = {
  User: {
    profile: async (parent, args, context) => {
      return await prisma.profile.findUnique({
        where: {
          userId: parent.id,
        },
      });
    },
    author: async (parent, args, context) => {
      const author =
        await prisma.$queryRaw`select * from social."Author" as A where A."userId" = ${parent.id}`;
      
      return author[0];
    },
  },
  Query: {
    users: async (parent, args, context) => {
      return await prisma.user.findMany();
    },
  },
};

export { userResolvers };
