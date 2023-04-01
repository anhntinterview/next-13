import * as React from "react";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "app/layout";

interface IHomeProps {}

type PostBodyParams = {
    language: string;
    code: string;
};

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    const { data: session } = useSession();
    const router = useRouter();
    console.log(`session: `,useSession());
    const [body, setBody] = React.useState<PostBodyParams>({
        language: "JavaScript",
        code: "split a string and export duplicate item",
    });

    const handleSubmit = async ({ language, code }: PostBodyParams) => {
        const response = await fetch("/api/ecommercial/posts", {
            method: "POST",
            body: JSON.stringify({ language, code }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();
        console.log(data);
    };
    if (!session) {
        return (
            <>
                Not signed in <br />
                <button onClick={() => signIn()}>Sign in</button>
            </>
        );
    }
    return (
        <Layout>
            Signed in as {session.user?.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
            <button onClick={() => handleSubmit(body)}>
                Try to add a Post
            </button>
        </Layout>
    );
};

export default Home;
