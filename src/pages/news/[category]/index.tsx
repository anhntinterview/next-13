import * as React from "react";
import {
    GetServerSideProps,
    GetServerSidePropsContext,
    GetServerSidePropsResult,
} from "next";
import { IArticlesProps } from "..";
import Link from "next/link";

type CategoryParamsType = {
    category: string;
};

interface ICategoryProps extends IArticlesProps {
    category?: string;
}

const Category: React.FunctionComponent<ICategoryProps> = ({
    articles,
    category,
}) => {
    return (
        <div className="">
            <h2>List of {category}</h2>
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

export default Category;

export const getServerSideProps = async ({
    params,
    req,
    res,
    query
}: GetServerSidePropsContext<CategoryParamsType>): Promise<
    GetServerSidePropsResult<ICategoryProps>
> => {
    console.log(query);
    console.log(req.headers.cookie);
    res.setHeader("Set-Cookie", ["name=Robert"]);
    const response = await fetch(
        `http://localhost:4000/news?category=${params?.category}`
    );
    const data = await response.json();

    return {
        props: {
            articles: data,
            category: params?.category,
        },
    };
};
