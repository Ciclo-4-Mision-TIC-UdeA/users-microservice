import { Sql } from '@prisma/client/runtime';
import { prisma } from '../config/prisma';

const userResolvers = {
  User: {
    __resolveReference: async (ref) => {
      return prisma.user.findUnique({
        where: {
          id: ref.id,
        },
      });
    },
    author: async (parent, args, context) => {
      const us = await prisma.$queryRaw<
        [any]
      >`select * from social."Author" as A where A."userId" = ${parent.id} limit 1`;
      if (us.length > 0) {
        return us[0];
      }
    },
  },
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
