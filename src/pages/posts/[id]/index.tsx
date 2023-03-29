import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import * as React from "react";

export type PageParamsType = {
    id: string;
};

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface IPostProps {
    post: IPost;
}

const Post: React.FunctionComponent<IPostProps> = ({ post }) => {
    return (
        <div className="">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;

export async function getStaticPaths() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    const data = await response.json();

    const paths = data.map((item: IPost) => ({
        params: {
            id: item.id.toString(),
        },
    }));
    return {
        // paths,
        paths: [
            {
                params: { id: '1' },
            },
            {
                params: { id: '2' },
            },
            {
                params: { id: '3' },
            },
        ],
        fallback: 'blocking',
    };
}

export const getStaticProps = async ({
    params,
}: GetStaticPropsContext<PageParamsType>): Promise<
    GetStaticPropsResult<IPostProps>
> => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params?.id}`
    );

    const data = await response.json();

    if(!data.id){
        return {
            notFound: true
        }
    }

    return {
        props: { post: data },
    };
};
