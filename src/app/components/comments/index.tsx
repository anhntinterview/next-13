import { CommentContext } from "app/context/comment";
import * as React from "react";

interface ICommentsProps {}

const Comments: React.FunctionComponent<ICommentsProps> = (props) => {
    const { comments, loading, setComments, setLoading } =
        React.useContext(CommentContext);

    if (loading) {
        return <p>Loading ...</p>;
    }

    return (
        <div className="">
            {comments?.map((item) => (
                <div key={item.id}>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Comments;
