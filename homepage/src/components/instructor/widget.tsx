import { Center, Text, keyframes } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
    SampleKeys,
    displayResolution,
    sampleURL,
    showSample,
} from "../../global/project_common";
import { useEffect, useState } from "react";
import { sleep } from "../../util/utils";

const appear = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px);
    } to {
        opacity: 1;;
        transform: translateY(0px);
    }
`;

export default function Widget({
    size,
    title,
    page,
    index,
}: {
    size: number;
    title: string;
    page: string;
    index: number;
}) {
    const appearAnimation = `${appear} ${(index + 1) * 0.2}s linear`;

    const navigation = useNavigate();
    const setShowSample = useSetRecoilState(showSample);

    const isMobile = useRecoilValue(displayResolution) === "mobile";

    function redirction() {
        if (page === "kakao") {
            window.open(
                "http://pf.kakao.com/_aSGjG",
                "Instead of me",
                "popup=yes"
            );
        } else if (page === "back") {
            setShowSample(false);
        } else if (page === "sample") {
            setShowSample(true);
        } else if (page.startsWith("sample_")) {
            const sample = page.split("_")[1];
            if (SampleKeys.includes(sample)) {
                window.open(sampleURL[sample]);
            }
        } else {
            navigation(page);
        }
    }

    return (
        <Center
            w={`${size}px`}
            h="35px"
            borderRadius="20px"
            bgColor="white"
            border="1px solid rgba(0, 0, 0, 0.3)"
            _hover={{
                cursor: "pointer",
                bgColor: "black",
                color: "white",
            }}
            transition="all 0.1s linear"
            color="black"
            onClick={redirction}
            animation={!isMobile ? appearAnimation : "none"}
        >
            <Text fontSize="15px" fontWeight="bold">
                {title}
            </Text>
        </Center>
    );
}
