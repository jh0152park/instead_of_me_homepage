import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import AboutUs from "./aboutus";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home / Instead of me</title>
            </Helmet>
            <Box id="buffer" h="70px"></Box>
            <AboutUs />
        </>
    );
}
