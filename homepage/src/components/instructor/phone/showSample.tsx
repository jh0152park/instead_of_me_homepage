import { Center, Spinner, VStack, keyframes } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PhoneHeader from "./phoneHeader";
import SampleMessage from "./sampleMessage";
import { useRecoilValue } from "recoil";
import {
    displayResolution,
    languageState,
} from "../../../global/project_common";
import LANGUAGE from "../../../global/language";
import { IWidget } from "../phone";
import Widget from "../widget";
import { sleep } from "../../../util/utils";
import { set } from "react-hook-form";
import { messages } from "./samepleMessageData";

export default function ShowSample() {
    const [spinner, setSpinner] = useState(true);
    const currentLanguage = useRecoilValue(languageState);

    const isMobile = useRecoilValue(displayResolution) === "mobile";
    const SCREEN_WIDTH = window.document.documentElement.clientWidth;
    const SCREEN_HEIGHT = window.document.documentElement.clientHeight;
    const widgetSize = isMobile ? 230 : 250;

    const samples: IWidget[] = [
        {
            page: "sample_cafe",
            size: widgetSize,
            title: messages[currentLanguage].카페,
        },
        {
            page: "sample_flower",
            size: widgetSize,
            title: messages[currentLanguage].꽃,
        },
        {
            page: "sample_glamping",
            size: widgetSize,
            title: messages[currentLanguage].글램핑,
        },
        {
            page: "sample_hospital",
            size: widgetSize,
            title: messages[currentLanguage].병원,
        },
        {
            page: "sample_logistics",
            size: widgetSize,
            title: messages[currentLanguage].물류,
        },
        {
            page: "sample_tax",
            size: widgetSize,
            title: messages[currentLanguage].세금,
        },
        {
            page: "kakao",
            size: widgetSize,
            title: LANGUAGE[currentLanguage]["카카오톡문의"],
        },
        {
            page: "back",
            size: widgetSize,
            title: messages[currentLanguage].뒤로가기,
        },
    ];

    useEffect(() => {
        setTimeout(() => {
            setSpinner((prev) => !prev);
        }, 1000);
    }, []);

    return (
        <>
            {spinner ? (
                <Center w="100%" h="100%">
                    <Spinner />
                </Center>
            ) : (
                <>
                    <VStack pt="120px">
                        <SampleMessage />
                        <VStack my="10px" alignItems="flex-start" ml="65px">
                            {samples.map((sample, index) => (
                                <Widget
                                    key={index}
                                    index={index}
                                    page={sample.page}
                                    size={sample.size}
                                    title={sample.title}
                                />
                            ))}
                        </VStack>
                    </VStack>
                </>
            )}
        </>
    );
}
