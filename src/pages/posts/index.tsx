import Link from "next/link";
import * as React from "react";
import PostDetail, { IPost } from "./[id]";

interface IPostsProps {
    posts: Array<IPost>;
}

const Posts: React.FunctionComponent<IPostsProps> = ({ posts }) => {
    return (
        <div className="">
            {posts.map((item) => (
                <div key={item.id}>
                    <Link href={`posts/${item.id}`} passHref>{item.title}</Link>
                </div>
            ))}
        </div>
    );
};

export default Posts;

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return {
        props: {
            posts: data
        },
    };
}
