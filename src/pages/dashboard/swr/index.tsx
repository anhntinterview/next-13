import * as React from "react";
import useSWR from "swr";
import { IDashboard } from "..";

interface ISWRProps {}

const fetchData = async () => {
    const response = await fetch("http://localhost:4000/dashboard");
    const data = await response.json();
    return data;
}

const SWR: React.FunctionComponent<ISWRProps> = (props) => {
    const { error, data } = useSWR<IDashboard, Error>("dashboard/swr", fetchData);

    if (error) return <h2>Error has occured</h2>;
    if (!data) return <h2>Loading ...</h2>;

    return (
        <div className="">
            <p>Posts: {data?.posts}</p>
            <p>Likes: {data?.likes}</p>
            <p>Follower: {data?.followers}</p>
            <p>Following: {data?.following}</p>
        </div>
    );
};

export default SWR;
