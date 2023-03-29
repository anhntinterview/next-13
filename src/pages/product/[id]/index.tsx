import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface IProductDetailProps {
    commentId: string
}

const ProductDetail: React.FunctionComponent<IProductDetailProps> = ({commentId = 1}) => {
    const router = useRouter();
    const productId = router.query.id;
    const handleClick = () => {
        router.push('/product')
    }
    return (
        <div className="">
            <h1>The current product id is {productId}</h1>
            <Link href={`/product/${productId}/${commentId}`}>Move to comment id</Link>
            <button onClick={handleClick}>Replace cart</button>
        </div>
    );
};

export default ProductDetail;
