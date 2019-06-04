import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    me: async (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const userProfile = await prisma.user({ id: user.id });
      const userPosts = await prisma.user({ id: user.id }).posts();
      return {
        user: userProfile,
        posts: userPosts
      };
    }
  },
  User: {
    fullName: parent => {
      return `${parent.firstName} ${parent.lastName}`;
    }
  }
};
