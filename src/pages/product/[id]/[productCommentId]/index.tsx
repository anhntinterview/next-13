import * as React from "react";
import { useRouter } from "next/router";

interface IProductCommnentProps {}

const ProductCommnent: React.FunctionComponent<IProductCommnentProps> = (
    props
) => {
    const router = useRouter();
    const { productCommentId, id } = router.query;
    return (
        <div className="">
            The current product {id} is {productCommentId}
        </div>
    );
};

export default ProductCommnent;
