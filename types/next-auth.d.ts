import { DefaultUser, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import { myUser as MyUserModel  } from "@prisma/client";

/** Example on how to extend the built-in session types */
declare module "next-auth" {
    interface Session {
        /** This is an example. You can find me in types/next-auth.d.ts */
        foo: string;
    }
    // FIXED BUG: authorize of providers
    // just receive Awaitable type instead of Promise type of return value
    // Reference: https://stackoverflow.com/questions/75198644/nextauth-credentials-with-typescript
    interface MyUser extends MyUserModel {
        id: number; // <- here it is
    }
}

/** Example on how to extend the built-in types for JWT */
declare module "next-auth/jwt" {
    interface JWT {
        /** This is an example. You can find me in types/next-auth.d.ts */
        bar: number;
    }
}
