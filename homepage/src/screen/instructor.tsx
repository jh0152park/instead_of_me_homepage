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
import { displayResolution, languageSelected } from "../global/project_common";
import Instruction from "../components/instructor/Instruction";
import SelectLanguageMobile from "../components/instructor/selectLanguageMobile";

export default function Instructor() {
    const currentMode = useRecoilValue(displayResolution);
    const isLanguageSelected = useRecoilValue(languageSelected);

    console.log(currentMode);

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
                {currentMode === "web" ? (
                    !isLanguageSelected ? (
                        <SelectLanguage />
                    ) : (
                        <Instruction />
                    )
                ) : !isLanguageSelected ? (
                    <SelectLanguageMobile />
                ) : (
                    <Instruction />
                )}
            </Center>
        </>
    );
}
