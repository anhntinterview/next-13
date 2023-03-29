import { comments } from "data/comment";
import { GetStaticPropsContext, GetStaticPathsResult, GetStaticPropsResult } from "next";
import * as React from "react";
import { IComment } from "..";

type ParamsCommentType = {
    id: string;
};

interface ICommentProps {
    comment: IComment
}

const Comment: React.FunctionComponent<ICommentProps> = ({comment}) => {
    return <div className="">
        <p>{comment.text}</p>
    </div>;
};

export default Comment;

export const getStaticPaths = async () => {

    return {
        paths:[
            {
                params : {
                    id: '1'
                }
            },
            {
                params : {
                    id: '2'
                }
            },
            {
                params : {
                    id: '3'
                }
            }
        ],
        fallback:false
    }
}

export const getStaticProps = async ({
    params,
}: GetStaticPropsContext<ParamsCommentType>): Promise<
    GetStaticPropsResult<{ comment?: IComment }>
> => {
    const id = params?.id;

    const comment = comments.find(item => id ? item.id === parseInt(id) : 'Missing param id of comment')

    return {
        props: {
            comment
        },
    };
};
