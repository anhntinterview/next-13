import NextAuth, { Session } from "next-auth";
import GithubProvider from "next-auth/providers/github";
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
// import clientPromise from "lib/mongodb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";
import { prisma } from "lib/prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

// const prisma = new PrismaClient();

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            id: "credentials",
            name: "credentials",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials, req) => {
                const data = await prisma.myUser.findMany({
                    where: {
                        email: credentials?.email,
                    },
                });

                const user = await data[0];
                if (!user) {
                    throw new Error("Email is not registered");
                }
                console.log(`user: `, user);
                const isPasswordCorrect = await compare(
                    credentials!.password,
                    user.access_token as string
                );
                console.log(`isPasswordCorrect: `, isPasswordCorrect);
                if (!isPasswordCorrect) {
                    throw new Error("Password is incorrect");
                }
                return user;
            },
        }),
    ],
    pages: {
        signIn: "/ecommercial/auth/signin",
        // signOut: "/ecommercial/auth/signout",
    },
    // // adapter: MongoDBAdapter(clientPromise),
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },
    secret: process.env.SECRET,
    jwt: {
        // A secret to use for key generation (you should set this explicitly)
        secret: process.env.SECRET,
        // Set to true to use encryption (default: false)
        // encryption: true,
        // You can define your own encode/decode functions for signing and encryption
        // if you want to override the default behaviour.
        // encode: async ({ secret, token, maxAge }) => {},
        // decode: async ({ secret, token, maxAge }) => {},
    },
    // // Callbacks are asynchronous functions you can use to control what happens
    // // when an action is performed.
    // // https://next-auth.js.org/configuration/callbacks
    // callbacks: {
    //     jwt(params) {
    //         // update token
    //         if (params.user?.role) {
    //             params.token.role = params.user.role;
    //         }
    //         // return final_token
    //         return params.token;
    //     },
    // },
    debug: process.env.NODE_ENV === "development",
});
