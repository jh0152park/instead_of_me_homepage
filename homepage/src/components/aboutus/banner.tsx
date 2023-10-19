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
import styled from "styled-components";

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
    return (
        <Box w="100%" h="1200px" position="relative" bgColor="whitesmoke">
            <Image
                w="100%"
                h="100%"
                objectFit="cover"
                // src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1470"
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070"
            />
            <Center
                position="absolute"
                top="150px"
                // top={{
                //     sm: "150px",
                //     md: "400px",
                // }}
                left="0"
                right="0"
                mx="auto"
            >
                <VStack color="black">
                    <Heading
                        fontWeight="extrabold"
                        fontSize={{
                            sm: "40px",
                            md: "80px",
                        }}
                    >
                        외주, 그 이상의
                    </Heading>
                    <Heading
                        fontWeight="extrabold"
                        fontSize={{
                            sm: "40px",
                            md: "80px",
                        }}
                    >
                        가치를 만들고 있습니다
                    </Heading>

                    <BOX
                        variants={ArrowAnimation}
                        initial="start"
                        animate="end"
                    >
                        <Icon
                            w={{
                                sm: "20px",
                                md: "40px",
                            }}
                            h={{
                                sm: "20px",
                                md: "40px",
                            }}
                            as={MdKeyboardDoubleArrowDown}
                        />
                    </BOX>
                </VStack>
            </Center>
            <VStack
                position="absolute"
                left="200px"
                bottom="50px"
                alignItems="flex-start"
                color="whitesmoke"
            >
                <Heading fontWeight="extrabold" fontSize="60px">
                    도전을 열망하는 사람들이 모여,
                </Heading>
                <Heading fontWeight="extrabold" fontSize="60px">
                    새로운 도전자분들의 시작을 함께합니다.
                </Heading>
            </VStack>
        </Box>
    );
}
