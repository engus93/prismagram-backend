import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils";

export default {
  Muation: {
    confirmSecret: (_, args) => {
      const { eamil, secret } = args;
      const user = prisma.user({ email });
      if (user.secret === secret) {
        // JWT 발행
        return generateToken(user.id);
      } else {
        throw Error("wrong eamil/secret combination");
      }
    }
  }
};
