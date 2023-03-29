import { CommentContext, IComment } from "app/context/comment";
import * as React from "react";

const NewComment = () => {
    const initialCommentState: IComment = {
        id: Date.now(),
        text: "",
    };
    const { comments, loading, setComments, setLoading } =
        React.useContext(CommentContext);

    const [comment, setComment] = React.useState({ ...initialCommentState });

    const handleOnChangeInput = ({
        target,
    }: React.ChangeEvent<HTMLInputElement>) => {
        setComment({ ...comment, text: target.value });
    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const newComment = comment;
        console.log(`comment: `, comment);
        const url = "/api/comment";
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(comment),
        };
        fetch(url, requestOptions)
            .then((response) => console.log("Submitted Successfully"))
            .catch((error) => console.log("Form submit error", error));

        setComments([...comments, comment]);
    };

    return (
        <>
            <input
                type="text"
                onChange={handleOnChangeInput}
                value={comment?.text}
            />
            <button onClick={handleSubmit}>Add Comment</button>
        </>
    );
};

export default NewComment