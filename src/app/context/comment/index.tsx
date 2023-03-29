import * as React from "react";

export interface IComment {
    id: number;
    text: string;
}

export type CommentContextType = {
    comments: Array<IComment>;
    loading: boolean;
    setComments: React.Dispatch<React.SetStateAction<Array<IComment>>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface ICommentsContextProvierProps {
    children: React.ReactNode;
}

export const CommentContext = React.createContext({} as CommentContextType);

export const CommentsContextProvier: React.FunctionComponent<
    ICommentsContextProvierProps
> = ({ children }) => {
    const [comments, setComments] = React.useState([] as Array<IComment>);
    const [loading, setLoading] = React.useState(false);

    const fetchComments = async () => {
        const response = await fetch("/api/comment");
        const data = await response.json();

        setComments(data);
        setLoading(false);
    };

    React.useEffect(() => {
        fetchComments();
    }, []);
    // React.useCallback(() => {
    //     fetchComments();
    // }, [comments]);
    

    const value = {
        comments,
        loading,
        setComments,
        setLoading,
    };

    return (
        <CommentContext.Provider value={value}>
            {children}
        </CommentContext.Provider>
    );
};


