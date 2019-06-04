import { prisma } from "../generated/prisma-client";

export default {
  User: {
    fullName: parent => {
      return `${parent.firstName} ${parent.lastName}`;
    },
    itsMe: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      return user.id === parentId;
    },
    amIFollowing: async (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      try {
        // $exists 같은 구조를 찾을 때 쓰는 것 where 필요 X => AND, OR 등등 사용
        const exists = await prisma.$exists.user({
          // followers_some => 여러가지 (ex : Array) 중에서 찾아낸다.
          AND: [{ id: parentId }, { followers_some: [user.id] }]
        });
        if (exists) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
