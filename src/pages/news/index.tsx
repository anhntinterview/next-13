import * as React from "react";
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import Link from "next/link";

export interface IArticle {
    id: number;
    title: string;
    summary: string;
    description: string;
    category: string
}

export interface IArticlesProps {
    articles: Array<IArticle>;
}

const Articles: React.FunctionComponent<IArticlesProps> = ({ articles }) => {
    return (
        <div className="">
            {articles.map((item) => (
                <div key={item.id}>
                    <Link href={`/news/${item.id}`}>{item.title}</Link>
                    <p>{item.summary}</p>
                    <p>{item.category}</p>
                </div>
            ))}
        </div>
    );
};

export default Articles;

export const getServerSideProps = async (): Promise<
    GetServerSidePropsResult<IArticlesProps>
> => {
    const response = await fetch("http://localhost:4000/news");
    const data = await response.json();
    return {
        props: {
            articles: data,
        },
    };
};
