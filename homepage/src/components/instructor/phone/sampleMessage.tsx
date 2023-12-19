import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import Avatar from "../avatar";
import { SiMinutemailer } from "react-icons/si";
import { useRecoilValue } from "recoil";
import { languageState } from "../../../global/project_common";
import LANGUAGE from "../../../global/language";
import { COLOR_PALETTES } from "../../../Colors";
import { useNavigate } from "react-router-dom";

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
                        안녕하세요!
                    </Text>
                    <Text fontSize="15px" mb="5px">
                        우리 서비스에 관심 가져주셔서 진심으로 감사드립니다!! 🙌
                    </Text>
                    <Text fontSize="15px" mb="20px">
                        아래 보여드리는 샘플로 우리의 스타일을 느끼실 수
                        있습니다.
                    </Text>
                    <Text fontSize="15px" mb="20px">
                        샘플이 마음에 들지 않으시더라도 걱정마세요, 100%
                        원하시는대로 작업해드리고 있습니다 😆
                    </Text>
                    <Text fontSize="15px" mb="20px">
                        혹시 다른 요구사항이나 더 많은 정보가 필요하면 언제든
                        아래 메일보내기 버튼을 통해 물어봐주세요!
                    </Text>
                    <Text fontSize="15px" mb="20px">
                        저희들의 서비스로 만족과 기대를 충족시켜드리고 싶습니다
                        ☺️
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
