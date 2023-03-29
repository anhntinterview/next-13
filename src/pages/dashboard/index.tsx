import * as React from "react";

export interface IDashboard {
    posts: number;
    likes: number;
    followers: number;
    following: number;
}

const Dashboard: React.FunctionComponent = () => {
    const [data, setData] = React.useState<IDashboard>();
    const [loading, setLoading] = React.useState<boolean>(true);

    async function fetchData() {
        const response = await fetch("http://localhost:4000/dashboard");
        const data = await response.json();

        setData(data);
        setLoading(false);
    }

    React.useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <h1>Loading ...</h1>;
    }

    return (
        <div className="">
            <p>Posts: {data?.posts}</p>
            <p>Likes: {data?.likes}</p>
            <p>Follower: {data?.followers}</p>
            <p>Following: {data?.following}</p>
        </div>
    );
};

export default Dashboard;
