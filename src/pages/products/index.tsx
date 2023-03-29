import Link from "next/link";
import * as React from "react";
import { IProductProps } from "./[id]";

interface IProductsProps {
    products: Array<IProductProps>;
}

const Products: React.FunctionComponent<IProductsProps> = ({ products }) => {
    return (
        <div className="">
            {products.map((item) => (
                <div key={item.id}>
                    <h2>{item.sex}</h2>
                    <Link href={`/products/${item.id}`}>{item.name}</Link>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Products;

export async function getStaticProps() {
    console.log(`Generating / Regeneration ProductList`);
    
    const response = await fetch("http://localhost:4000/products");
    const data = await response.json();

    return {
        props: {
            products: data,
        },
        revalidate: 20
    };
}
