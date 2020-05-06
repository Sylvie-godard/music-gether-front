import React from "react";
import '../style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SiteLayout from "../components/SiteLayout";

export default function MyApp({ Component, pageProps }) {
    return <SiteLayout>
        <Component {...pageProps} />
    </SiteLayout>
}
