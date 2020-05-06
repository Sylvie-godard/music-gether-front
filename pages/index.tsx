import React from "react";
import Head from "next/head";
import SlideShow from "../components/Home/SlideShow";
import User from "./users";

const App: React.FC<{}> = () => (
    <div>
        <Head>
            <title>Music'Gether</title>
        </Head>
        <SlideShow />
        <User />
    </div>
);

export default App;
