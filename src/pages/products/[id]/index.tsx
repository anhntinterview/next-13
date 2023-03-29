import * as React from "react";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import { useRouter } from "next/router";

export type ProductParamsType = {
    id: string;
};

export interface IProductProps {
    id: number;
    name: string;
    description: string;
    price: number;
    sex: string;
}

const Product: React.FunctionComponent<{ product: IProductProps }> = ({
    product,
}) => {
    const router = useRouter();

    if(router.isFallback) {
        return <div className="">Loading ...</div>
    }
    return (
        <div className="detail-product">
            {product.price}
            {product.description}
        </div>
    );
};

export default Product;

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { id: "1" },
            },
        ],
        fallback: true,
    };
}

export const getStaticProps = async ({
    params,
}: GetStaticPropsContext<ProductParamsType>): Promise<
    GetStaticPropsResult<{ product: IProductProps }>
> => {
    console.log(`Generating / Regeneration ProductList ${params?.id}`);
    const response = await fetch(`http://localhost:4000/products/${params?.id}`);

    const data = await response.json();

    return {
        props: { product: data },
        revalidate: 10
    };
};
