import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "lib/prisma/client";
import bcrypt from "bcrypt";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req;

    switch (method) {
        case "POST":
            const { email, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 12);
            const user = await prisma.myUser.create({
                data: {
                    email,
                    access_token: hashedPassword
                },
            });
            
            res.status(201).json(user);
            break;
        default:
            res.setHeader("Allow", ["POST"]);
            res.status(405).end(`Methos ${method} Not Allowed`);
    }
}
