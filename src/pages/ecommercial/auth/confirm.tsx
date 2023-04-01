import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface IConfirmProps {}

const Confirm: React.FunctionComponent<IConfirmProps> = (props) => {
    const { query } = useRouter();
    const [isSuccess, setIsSuccess] = React.useState(false);
    const activeAccount = async () => {
        console.log(query.email);
        const response = await fetch("/api/ecommercial/users", {
            method: "PATCH",
            body: JSON.stringify({ email: query.email }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        data && setIsSuccess(true);
    };

    React.useEffect(() => {
        activeAccount();
    }, []);
    return (
        <div className="">
            {isSuccess ? (
                <Link href="/ecommercial/auth/signin">
                    Active Success. Please sign in again!
                </Link>
            ) : (
                "Active Failed!"
            )}
        </div>
    );
};

export default Confirm;
