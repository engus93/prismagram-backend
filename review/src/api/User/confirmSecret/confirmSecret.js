import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils";

export default {
  Mutation: {
    confirmSecret: async (_, args) => {
      const { email, secret } = args;
      const user = await prisma.user({ email });
      if (user.loginSecret === secret) {
        // 보안을 위해 DB에 있는 secretKey 삭제
        await prisma.updateUser({
          where: {
            id: user.id
          },
          data: {
            loginSecret: ""
          }
        });
        // JWT 발행
        return generateToken(user.id);
      } else {
        throw Error("wrong email/secret combination");
      }
    }
  }
};
