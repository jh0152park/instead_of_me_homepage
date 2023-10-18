import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home / Instead of me</title>
            </Helmet>
            <Box h="120vh"></Box>
        </>
    );
}
