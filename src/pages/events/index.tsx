import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

interface IEvent {
    id: number;
    title: string;
    summary: string;
    description: string;
    category: string;
    date: string;
}

interface IEvents {
    initialEvents: Array<IEvent>;
}

const Events: React.FunctionComponent<IEvents> = ({ initialEvents }) => {
    const [events, setEvetns] = React.useState<Array<IEvent>>(initialEvents);
    const router = useRouter();

    const fetchData = async () => {
        const response = await fetch(
            `http://localhost:4000/events?category=sports`
        );
        const data = await response.json();
        setEvetns(data);
        router.push(`/events?category=sports`, undefined, { shallow: true });
    };

    return (
        <div className="">
            <button onClick={fetchData}>Sport Events</button>
            {events?.map((item) => (
                <div key={item.id}>
                    <Link href={`/news/${item.id}`}>{item.title}</Link>
                    <p>{item.summary}</p>
                    <p>{item.category}</p>
                </div>
            ))}
        </div>
    );
};

export default Events;

export const getServerSideProps = async ({
    query,
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<IEvents>> => {
    const { category } = query;
    const queryStr = category ? "category=sports" : "";

    const response = await fetch(`http://localhost:4000/events?${queryStr}`);
    const data = await response.json();

    return {
        props: {
            initialEvents: data,
        },
    };
};
