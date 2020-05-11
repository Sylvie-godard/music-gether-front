import React from "react";
import '../style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SiteLayout from "../components/SiteLayout";
import {AppProvider} from "../components/Context";

export default function MyApp({Component, pageProps}) {
    return <AppProvider>
        <SiteLayout>
            <Component {...pageProps} />
        </SiteLayout>
    </AppProvider>
}
