import { comments } from "data/comment";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        res.status(200).json(comments);
    } else if (req.method === "POST") {
        const newComment = req.body;
        comments.push(newComment);
        res.status(201).json(newComment);
    }
}
