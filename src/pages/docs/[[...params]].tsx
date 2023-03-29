import * as React from "react";
import { useRouter } from "next/router";

interface IDocsProps {}

const Docs: React.FunctionComponent<IDocsProps> = (props) => {
    const router = useRouter();
    const { params } = router.query;
    return (
        <div className="">
            <h1>Catch all page to one content</h1>
            <p>{params}</p>
        </div>
    );
};

export default Docs;
