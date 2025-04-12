// src/theme.js
import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
    };

    const theme = extendTheme({
    config,
    styles: {
        global: (props) => ({
        body: {
            bg: props.colorMode === "dark" ? "#0d0d0d" : "white",
            color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
        },
        }),
    },
});

export default theme;
