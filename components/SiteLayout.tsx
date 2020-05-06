import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";

const SiteLayout: React.FC<{}> = ({children}) => {
    return (
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>
    );
}

export default SiteLayout;
