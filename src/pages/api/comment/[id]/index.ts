import { comments } from "data/comment";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const comment = comments.find((item) =>
        typeof id === "string" ? item.id === parseInt(id) : "id is not string"
    );
    if (req.method === "GET") {
        
    } else if (req.method === "DELETE") {
        const index = comments.findIndex((item) =>
            typeof id === "string"
                ? item.id === parseInt(id)
                : "id is not string"
        );
        comments.splice(index, 1);
    }
    res.status(200).json(comment);
}
