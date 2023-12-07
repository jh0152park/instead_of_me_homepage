import {
    Box,
    Center,
    Heading,
    Icon,
    Image,
    Text,
    VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { languageState } from "../../global/project_common";
import LANGUAGE from "../../global/language";

const BOX = styled(motion.div)`
    width: 40px;
    height: 40px;
    margin-top: 30px;
`;

const ArrowAnimation = {
    start: {
        y: -30,
        opacity: 1,
    },
    end: {
        y: 30,
        opacity: 0,
        transition: {
            type: "spring",
            duration: 3,
            // ease: "linear",
            repeat: Infinity,
            // repeatDelay: 1,
        },
    },
};

export default function Banner() {
    const currentLanguage = useRecoilValue(languageState);

    return (
        <Box
            w="100dvw"
            h={{
                base: "500px",
                md: "800px",
                lg: "1000px",
            }}
            position="relative"
            bgColor="whitesmoke"
        >
            <Image
                w="100%"
                h="100%"
                objectFit="fill"
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070"
            />
            <Center
                position="absolute"
                top={{
                    base: "70px",
                    md: "100px",
                    lg: "150px",
                }}
                left="0"
                right="0"
                mx="auto"
            >
                <VStack color="black">
                    <Text
                        textAlign="center"
                        fontWeight="extrabold"
                        fontSize={{
                            base: "30px",
                            md: "60px",
                            lg: "80px",
                        }}
                    >
                        {LANGUAGE[currentLanguage]["외주, 그 이상의"]}
                    </Text>
                    <Text
                        textAlign="center"
                        fontWeight="extrabold"
                        fontSize={{
                            base: "30px",
                            md: "60px",
                            lg: "80px",
                        }}
                    >
                        {LANGUAGE[currentLanguage]["가치를 만들고 있습니다."]}
                    </Text>

                    {/* <BOX
                        variants={ArrowAnimation}
                        initial="start"
                        animate="end"
                    >
                        <Icon
                            w={{
                                base: "30px",
                                md: "40px",
                            }}
                            h={{
                                base: "30px",
                                md: "40px",
                            }}
                            as={MdKeyboardDoubleArrowDown}
                        />
                    </BOX> */}
                </VStack>
            </Center>
            <VStack
                position="absolute"
                left={{
                    base: "4dvw",
                    md: "7dvw",
                    lg: "10dvw",
                }}
                bottom="50px"
                alignItems="flex-start"
                color="whitesmoke"
            >
                <Text
                    textAlign="left"
                    fontWeight="extrabold"
                    fontSize={{
                        base: "20px",
                        md: "36px",
                        lg: "60px",
                    }}
                >
                    {
                        LANGUAGE[currentLanguage][
                            "도전을 열망하는 사람들이 모여,"
                        ]
                    }
                </Text>
                <Text
                    textAlign="left"
                    fontWeight="extrabold"
                    fontSize={{
                        base: "20px",
                        md: "36px",
                        lg: "60px",
                    }}
                >
                    {
                        LANGUAGE[currentLanguage][
                            "새로운 도전자분들의 시작을 함께합니다."
                        ]
                    }
                </Text>
            </VStack>
        </Box>
    );
}
