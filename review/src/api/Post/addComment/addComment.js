import { isAuthenticated } from "./../../../middlewares";
import { prisma } from "./../../../../../origin/generated/prisma-client/index.d";
export default {
  Mutation: {
    addCommnet: async (_, args, { request }) => {
      isAuthenticated(request);
      const { postId, text } = args;
      const { user } = request;
      const comment = await prisma.createComment({
        user: {
          connect: {
            id: user.id
          }
        },
        post: {
          connect: {
            id: postId
          }
        },
        text
      });
      return comment;
    }
  }
};
