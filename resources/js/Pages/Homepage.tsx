import React from "react";
import { Link, Head } from "@inertiajs/react";

interface IHomepage {
    title: string;
    company: string;
}

const Homepage: React.FC<IHomepage> = (props) => {
    console.log(props);

    return (
        <>
            <Head title={props.company} />
            <div>{props.title}</div>;
        </>
    );
};

export default Homepage;
