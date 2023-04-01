import * as React from "react";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import { useRouter } from "next/router";

interface ISignInProps {
    providers: typeof getProviders;
}

const SignIn: React.FunctionComponent<ISignInProps> = ({ providers }) => {
    const [auth, setAuth] = React.useState({
        email: "",
        password: "",
    });
    const router = useRouter();
    const session = useSession();
    const [isError, setIsError] = React.useState<string>();

    React.useEffect(() => {
        console.log(session.data);
        
        if(session.data) {
            router.push("/ecommercial/home");
        }
    }, [session]);

    const handleEmailValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAuth((prevState) => ({
            ...prevState,
            email: e.target.value,
        }));
    };

    const handlePasswordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAuth((prevState) => ({
            ...prevState,
            password: e.target.value,
        }));
    };
    const handleSignInByGithub = async () => {
        const res = await signIn("github");
        console.log(`res: `, res);
    }
    const handleSignInByCredentials = async () => {
        console.log(`providers: `, providers);
        console.log(`Object.values(providers): `, Object.values(providers));
        const res = await signIn("credentials", {
            redirect: false,
            email: auth.email,
            password: auth.password,
            callbackUrl: router.query.callbackUrl as string,
        });

        res?.error && setIsError(res.error)
    };

    return (
        <div className="">
            <input type="text" value={auth.email} onChange={handleEmailValue} />
            <input
                type="password"
                value={auth.password}
                onChange={handlePasswordValue}
            />
            
            <button onClick={handleSignInByCredentials}>Sign In with Credentials</button>
            <br />
            <hr />
            <button onClick={handleSignInByGithub}>Sign In with Github</button>
            {isError && <p>{isError}</p>}
            {/* {Object.values(providers).map(
                (provider) =>
                    provider.name !== "Credentials" && (
                        <button
                            key={provider.name}
                            onClick={() => {
                                signIn(provider.id, {
                                    callbackUrl: `/ecommercial/auth/signin`,
                                });
                            }}
                        >
                            Sign in with {provider.name}
                        </button>
                    )
            )} */}
        </div>
    );
};

export default SignIn;

export async function getServerSideProps() {
    return {
        props: {
            providers: await getProviders(),
        },
    };
}
