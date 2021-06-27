import * as React from "react";
import {AppProps} from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}