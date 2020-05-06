import React from "react";
import Link from "next/link";

const Home = () => (
    <div>
        <h1>Hello Home</h1>
        <Link href="/">
            <a>Go back to index</a>
        </Link>

    </div>
);

export default Home;