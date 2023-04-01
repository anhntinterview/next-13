import * as React from "react";

interface IRegisterProps {}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
    const [user, setuser] = React.useState({
        email: "",
        password: "",
    });
    const [msg, setMsg] = React.useState<string>();

    const handleEmailValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setuser((prevState) => ({
            ...prevState,
            email: e.target.value,
        }));
    };

    const handlePasswordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setuser((prevState) => ({
            ...prevState,
            password: e.target.value,
        }));
    };

    const handleRegister = async () => {
        const { password, email } = user;
        const response = await fetch("/api/ecommercial/users", {
            method: "POST",
            body: JSON.stringify({ password, email }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();
        data
            ? setMsg(
                  "Register is successfully. Please checking your email to active your email"
              )
            : setMsg("Register fail");
    };

    return (
        <div className="">
            <input
                type="text"
                value={user.email}
                onChange={handleEmailValue}
                placeholder="Typing your email"
            />
            <input
                type="password"
                value={user.password}
                onChange={handlePasswordValue}
                placeholder="Typing your password"
            />
            <button onClick={handleRegister}>Register</button>
            {msg && <p>{msg}</p>}
        </div>
    );
};

export default Register;
