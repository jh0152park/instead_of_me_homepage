import {
    Box,
    Center,
    HStack,
    Icon,
    Text,
    VStack,
    keyframes,
} from "@chakra-ui/react";
import { SiMinutemailer } from "react-icons/si";
import Avatar from "./avatar";
import { useNavigate } from "react-router-dom";
import Widget from "./widget";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
    displayResolution,
    languageState,
    phoneState,
} from "../../global/project_common";
import LANGUAGE from "../../global/language";
import { IoIosClose } from "react-icons/io";

const appear = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px);
    } to {
        opacity: 1;;
        transform: translateY(0px);
    }
`;

export default function PhoneMobile({ clicked }: { clicked: boolean }) {
    const navigate = useNavigate();
    const currentLanguage = useRecoilValue(languageState);
    const setPhoneState = useSetRecoilState(phoneState);

    const appearAnimation = `${appear} 0.2s linear`;

    function onAskButtonClicked() {
        navigate("/contact");
    }

    function onCloseButtonClicked() {
        setPhoneState((prev) => !prev);
    }

    return (
        <Box
            p="20px"
            w="350px"
            h="700px"
            bgColor="whitesmoke"
            borderRadius="20px"
            position="absolute"
            top="50px"
            margin="auto"
            opacity={clicked ? "1" : "0"}
            display={clicked ? "block" : "none"}
            animation={appearAnimation}
            // transform={clicked ? `translateY(10px)` : ""}
            // transition={"all 0.2s linear"}
        >
            <HStack w="100%" mb="70px" justifyContent="space-between">
                <Text fontWeight="bold">Instead of me, 야 해줘</Text>
                <Center
                    w="25px"
                    h="25px"
                    borderRadius="50%"
                    _hover={{
                        cursor: "pointer",
                        bgColor: "#CBD5E0",
                    }}
                    transition="all 0.2s linear"
                    onClick={onCloseButtonClicked}
                >
                    <Icon as={IoIosClose} w="100%" h="100%" />
                </Center>
            </HStack>

            <HStack spacing={0} alignItems="flex-end">
                <Avatar size={50} border={false} hover={false} />
                <VStack alignItems={"flex-start"} ml="20px">
                    <Text fontSize="12px">Instead of me, 야 해줘</Text>
                    <Box
                        w="240px"
                        h="300px"
                        borderRadius="20px"
                        bgColor="gray.200"
                        p="15px"
                    >
                        <Text fontSize="15px" mb="20px">
                            {
                                LANGUAGE[currentLanguage][
                                    "관심 주셔서 감사합니다"
                                ]
                            }
                        </Text>
                        <Text fontSize="15px" mb="5px">
                            {
                                LANGUAGE[currentLanguage][
                                    "필요하신 모든걸 만들어 드립니다"
                                ]
                            }
                        </Text>
                        <Text fontSize="15px" mb="20px">
                            {LANGUAGE[currentLanguage]["더 큰 성장을 원합니다"]}
                        </Text>
                        <Text fontSize="15px" mb="20px">
                            {LANGUAGE[currentLanguage]["메일로 물어보세요"]}
                        </Text>

                        <VStack>
                            <Center
                                w="200px"
                                h="40px"
                                bgColor="green.300"
                                borderRadius="20px"
                                _hover={{
                                    cursor: "pointer",
                                    bgColor: "green.400",
                                }}
                                transition="all 0.2s linear"
                                onClick={onAskButtonClicked}
                            >
                                <Text
                                    fontSize="15px"
                                    fontWeight="bold"
                                    color="whitesmoke"
                                    mr="5px"
                                >
                                    {LANGUAGE[currentLanguage]["이메일보내기"]}
                                </Text>
                                <SiMinutemailer
                                    color="whitesmoke"
                                    size={"20px"}
                                />
                            </Center>
                            <Text fontSize="12px" color="black">
                                🕐 {LANGUAGE[currentLanguage]["24시간연중무휴"]}
                            </Text>
                        </VStack>
                    </Box>
                </VStack>
            </HStack>

            <VStack mt="10px" alignItems="flex-start" ml="65px">
                <Widget
                    page={"home"}
                    size={210}
                    title={LANGUAGE[currentLanguage]["홈페이지둘러보기"]}
                />
                <Widget
                    page={"business"}
                    size={200}
                    title={LANGUAGE[currentLanguage]["기술스택궁금해요"]}
                />
                <Widget
                    page={"contact_us"}
                    size={180}
                    title={LANGUAGE[currentLanguage]["문의하고싶어요"]}
                />
                <Widget
                    page={"process"}
                    size={240}
                    title={LANGUAGE[currentLanguage]["제작과정궁금해요"]}
                />
                <Widget
                    page={"kakao"}
                    size={240}
                    title={LANGUAGE[currentLanguage]["카카오톡문의"]}
                />
            </VStack>
        </Box>
    );
}
