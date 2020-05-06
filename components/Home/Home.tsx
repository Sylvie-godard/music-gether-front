import React from "react";
import SlideShow from "./SlideShow";
import User from "../../pages/users";

const Home: React.FC<{}> = () => {
    return (
        <div>
            <SlideShow />
            <User />
        </div>
    );
};

export default Home;
