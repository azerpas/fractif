import React, { useState } from "react";
import Router from 'next/router'
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import LoadingPage from "./loading";

export default function App({ Component, pageProps }: AppProps) {

    // LOADING \\
    const [loading, setLoading] = useState(false);
    Router.events.on('routeChangeStart', () => {
        console.log('loading...');
        setLoading(true);
    });
    Router.events.on('routeChangeComplete', () => {
        console.log('loading ended');
        setLoading(false);
    });

    return (
        <>
            {
                loading
                ?
                <LoadingPage />
                :
                <ChakraProvider resetCSS theme={theme}>
                    <Component {...pageProps} />
                </ChakraProvider>
            }
        </>
    )
}