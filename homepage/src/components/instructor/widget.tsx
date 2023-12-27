import {
    Box,
    Center,
    Heading,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    VStack,
    keyframes,
    useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
    SampleKeys,
    displayResolution,
    languageState,
    sampleURL,
    showSample,
} from "../../global/project_common";
import { useEffect, useState } from "react";
import { sleep } from "../../util/utils";
import LANGUAGE from "../../global/language";

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

    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigation = useNavigate();
    const setShowSample = useSetRecoilState(showSample);
    const currentLanguage = useRecoilValue(languageState);

    const isMobile = useRecoilValue(displayResolution) === "mobile";

    function redirction() {
        if (page === "kakao") {
            window.open(
                "http://pf.kakao.com/_sXxoPG/chat",
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
        } else if (page === "business_information") {
            onOpen();
        } else {
            navigation(page);
        }
    }

    return (
        <>
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
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent mx={2}>
                    <ModalHeader>
                        {LANGUAGE[currentLanguage]["사업자정보"]}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={30}>
                        <VStack
                            fontWeight={"bold"}
                            alignItems={"flex-start"}
                            gap={3}
                        >
                            <Text>{LANGUAGE[currentLanguage]["사업자명"]}</Text>
                            <Text>{LANGUAGE[currentLanguage]["대표"]}</Text>
                            <Text>
                                {LANGUAGE[currentLanguage]["사업자번호"]}
                            </Text>
                            <Text>{LANGUAGE[currentLanguage]["이메일"]}</Text>
                            <Text>{LANGUAGE[currentLanguage]["주소"]}</Text>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
