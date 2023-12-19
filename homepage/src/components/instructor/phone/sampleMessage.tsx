import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import Avatar from "../avatar";
import { SiMinutemailer } from "react-icons/si";
import { useRecoilValue } from "recoil";
import { languageState } from "../../../global/project_common";
import LANGUAGE from "../../../global/language";
import { COLOR_PALETTES } from "../../../Colors";
import { useNavigate } from "react-router-dom";
import { messages } from "./samepleMessageData";

export default function SampleMessage() {
    const navigate = useNavigate();
    const currentLanguage = useRecoilValue(languageState);

    function onAskButtonClicked() {
        navigate("/contact");
    }

    return (
        <HStack spacing={0} alignItems="flex-end">
            <Avatar size={50} border={false} hover={false} />
            <VStack alignItems={"flex-start"} ml="20px">
                <Text fontSize="12px">Instead of me, 야 해줘</Text>
                <Box
                    w="280px"
                    h="300px"
                    borderRadius="20px"
                    bgColor="gray.200"
                    p="15px"
                    overflowY="scroll"
                >
                    <Text fontSize="15px" mb="20px">
                        {messages[currentLanguage]["안녕하세요"]}
                    </Text>
                    <Text fontSize="15px" mb="5px">
                        {messages[currentLanguage]["우리서비스"]}
                    </Text>
                    <Text fontSize="15px" mb="20px">
                        {messages[currentLanguage]["보여드리는"]}
                    </Text>
                    <Text fontSize="15px" mb="20px">
                        {messages[currentLanguage]["걱정마세요"]}
                    </Text>
                    <Text fontSize="15px" mb="20px">
                        {messages[currentLanguage]["물어보세요"]}
                    </Text>
                    <Text fontSize="15px" mb="20px">
                        {messages[currentLanguage]["서비스로만족"]}
                    </Text>

                    <VStack>
                        <Center
                            w="250px"
                            h="40px"
                            // bgColor="green.300"
                            bgColor={COLOR_PALETTES.blue}
                            borderRadius="20px"
                            _hover={{
                                cursor: "pointer",
                                bgColor: COLOR_PALETTES.skyblue,
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
                            <SiMinutemailer color="whitesmoke" size={"20px"} />
                        </Center>
                        <Text fontSize="12px" color="black">
                            🕐 {LANGUAGE[currentLanguage]["24시간연중무휴"]}
                        </Text>
                    </VStack>
                </Box>
            </VStack>
        </HStack>
    );
}
