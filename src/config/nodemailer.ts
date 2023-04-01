import nodemailer from "nodemailer";

const email = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass,
    },
});

export const mailOptions = (emailTo: string) => ({
    from: email,
    to: emailTo,
});
