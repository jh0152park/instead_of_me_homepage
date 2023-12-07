import {
    Box,
    Center,
    Heading,
    Image,
    Text,
    VStack,
    keyframes,
} from "@chakra-ui/react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import SelectLanguage from "../components/instructor/selectLanguage";
import { useRecoilValue } from "recoil";
import { languageSelected } from "../global/project_common";

export default function Instructor() {
    const isLanguageSelected = useRecoilValue(languageSelected);

    return (
        <>
            <Helmet>
                <title>Welcome to Instead of me !</title>
            </Helmet>

            <Center
                w="100%"
                h="100vh"
                background="linear-gradient(180deg, rgb(56, 161, 105), #c7c9c8)"
            >
                <SelectLanguage />
            </Center>
        </>
    );
}
