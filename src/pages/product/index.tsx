import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

interface IProductProps {
    id: string;
}

const Product: React.FunctionComponent<IProductProps> = ({ id = 1 }) => {
    return (
        <div className="">
            <Link href={`/product/${id}`}>Move to one</Link>
            <Link href={`/product/2`}>Move to two</Link>
            <Link href={`/product/3`} replace>
                Move to three
            </Link>
        </div>
    );
};

export default Product;
