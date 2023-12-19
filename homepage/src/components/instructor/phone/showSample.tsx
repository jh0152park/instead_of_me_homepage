import { Center, Spinner, VStack, keyframes } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PhoneHeader from "./phoneHeader";
import SampleMessage from "./sampleMessage";
import { useRecoilValue } from "recoil";
import { languageState } from "../../../global/project_common";
import LANGUAGE from "../../../global/language";
import { IWidget } from "../phone";
import Widget from "../widget";
import { sleep } from "../../../util/utils";
import { set } from "react-hook-form";

export default function ShowSample() {
    const [spinner, setSpinner] = useState(true);
    const currentLanguage = useRecoilValue(languageState);

    //cafe flower glamping hospital logistics tex
    const samples: IWidget[] = [
        {
            page: "sample_cafe",
            size: 250,
            title: "카페 ☕️",
        },
        {
            page: "sample_flower",
            size: 250,
            title: "플라워샵 💐",
        },
        {
            page: "sample_glamping",
            size: 250,
            title: "캠핑, 글램핑 🏕️",
        },
        {
            page: "sample_hospital",
            size: 250,
            title: "치과 🦷",
        },
        {
            page: "sample_logistics",
            size: 250,
            title: "물류, 운송 🚚",
        },
        {
            page: "sample_tax",
            size: 250,
            title: "세무사, 회계사 🖋️",
        },
        {
            page: "kakao",
            size: 250,
            title: "카카오톡 문의 바로가기 😎",
        },
        {
            page: "back",
            size: 250,
            title: "뒤로가기 🔙",
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
