import * as React from "react";

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

interface IUserProps {
    user: IUser;
}

const User: React.FunctionComponent<IUserProps> = ({ user }) => {
    return (
        <>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.website}</p>
        </>
    );
};

export default User;
