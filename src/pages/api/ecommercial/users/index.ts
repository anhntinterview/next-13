import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "lib/prisma/client";
import bcrypt from "bcrypt";
import { mailOptions, transporter } from "config/nodemailer";

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
                    access_token: hashedPassword,
                },
            });

            await transporter.sendMail({
                ...mailOptions(email),
                subject: "Confirm email",
                text: "Please click confirm link below:",
                html: `<a href='http://localhost:3000/ecommercial/auth/confirm?email=${email}'>Click here!</a>`,
            });

            res.status(201).json(user);
            break;
        case "PATCH":
            const patchBody = req.body;
            const updateUser = await prisma.myUser.update({
                where: {
                    email: patchBody.email,
                },
                data: {
                    active: true
                }
            })
            res.status(201).json(updateUser);
            break;
        default:
            res.setHeader("Allow", ["POST"]);
            res.status(405).end(`Methos ${method} Not Allowed`);
    }
}
