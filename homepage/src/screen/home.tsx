import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import AboutUs from "./aboutus";
import Business from "./business";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home / Instead of me</title>
            </Helmet>
            <Box id="buffer" w="100%" h="70px"></Box>

            <AboutUs />
            <Business />
        </>
    );
}
