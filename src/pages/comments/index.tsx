// --- OTHER VERSION WITH CONTEXT
// import Comments from "app/components/comments";
// import NewComment from "app/components/comments/NewComment";
// import { CommentsContextProvier, IComment } from "app/context/comment";
import Link from "next/link";
import * as React from "react";

export interface IComment {
    id: number;
    text: string;
}

interface ICommentProps {
    comments: Array<IComment>;
}

const CommentsPage: React.FunctionComponent<ICommentProps> = () => {
    const [comments, setComments] = React.useState<Array<IComment>>();
    const [comment, setComment] = React.useState<IComment>();
    const [loading, setLoading] = React.useState<boolean>(true);

    const fetchComments = async () => {
        const response = await fetch("/api/comment");
        const data = await response.json();

        setComments(data);
        setLoading(false);
    };

    React.useEffect(() => {
        fetchComments();
    }, []);

    console.log(`comments: `, comments);

    if (loading) {
        return <h1>Loading ...</h1>;
    }

    const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setComment(() => {
            return {
                id: Date.now(),
                text: e.target.value,
            };
        });
    };

    const handleAddComment = async () => {
        if (comment?.text === "") {
            console.log("empty string!!!");
        } else {
            const response = await fetch("/api/comment", {
                method: "POST",
                body: JSON.stringify(comment),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            console.log(data);
        }
    };

    async function handleDeleteComment(id: number) {
        const response = await fetch(`/api/comment/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        console.log(data);
        fetchComments()
    }

    console.log(`comments: `, comments);

    return (
        <div className="">
            <input
                type="text"
                onChange={handleOnChangeInput}
                value={comment?.text}
            />
            <button onClick={fetchComments}>Load Comment</button>
            <button onClick={handleAddComment}>Add Comment</button>

            {comments?.map((item) => (
                <div key={item.id}>
                    <Link href={`/comments/${item.id}`}>Comment {item.id}</Link>
                    <p>{item.text}</p>
                    <button onClick={() => handleDeleteComment(item.id)}>
                        Delete Comment
                    </button>
                    <hr />
                </div>
            ))}
        </div>
    );

    // --- OTHER VERSION WITH CONTEXT
    // return (
    //     <CommentsContextProvier>
    //         <NewComment />
    //         <Comments />
    //     </CommentsContextProvier>
    // );
};

export default CommentsPage;
