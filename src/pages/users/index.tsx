import User, { IUser } from "app/components/user";
import * as React from "react";

interface IUsersProps {
    users: Array<IUser>;
}

const Users: React.FunctionComponent<IUsersProps> = ({ users }) => {
    return (
        <>
            <h1>List of users</h1>
            {users.map((item) => (
                <div key={item.id}>
                    <User user={item} />
                </div>
            ))}
        </>
    );
};

export default Users;

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    return {
        props: {
            users: data,
        },
    };
}
