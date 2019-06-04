import { prisma } from "../../../../generated/prisma-client";

export default {
  Muation: {
    confirmSecret: (_, args) => {
      const { eamil, secret } = args;
      const user = prisma.user({ email });
      if (user.secret === secret) {
        //   JWT
        return "TOKEN";
      } else {
        throw Error("wrong eamil/secret combination");
      }
    }
  }
};
