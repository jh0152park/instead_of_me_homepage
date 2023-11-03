import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import AboutUs from "./aboutus";
import Business from "./business";
import Process from "./process";
import ContactUS from "./contactus";

// test: Im 신뢰에요~
export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home / Instead of me</title>
            </Helmet>
            <Box id="buffer" w="100dvw" h="70px"></Box>

            <AboutUs />
            <Business />
            <Process />
            <ContactUS />
        </>
    );
}
