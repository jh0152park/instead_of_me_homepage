import { Center, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { languageState } from "../../global/project_common";
import { useRecoilValue } from "recoil";
import LANGUAGE from "../../global/language";

export default function Contact() {
    const currentLanguage = useRecoilValue(languageState);

    function onClickKakaoPlusChannel() {
        window.open("http://pf.kakao.com/_aSGjG", "Instead of me", "popup=yes");
    }

    return (
        <Center w="100%" h="1000px" color="black" bgColor="whitesmoke">
            <VStack mt="-200px">
                <Heading
                    fontSize="80px"
                    fontWeight="extrabold"
                    color="green.400"
                >
                    Contact US
                </Heading>

                <Text mt="100px" fontWeight="bold" fontSize="20px">
                    {
                        LANGUAGE[currentLanguage][
                            "협업문의는 아래 비즈니스이메일 또는 카카오톡 플러스친구 채널을 통해 연락주세요."
                        ]
                    }
                </Text>

                <VStack mt="50px">
                    <HStack>
                        <Text fontWeight="bold" color="green.400">
                            Business Email:
                        </Text>
                        <Text>insteadofme.yuhyeon@gmail.com</Text>
                    </HStack>
                    <HStack>
                        <Text fontWeight="bold" color="green.400">
                            {
                                LANGUAGE[currentLanguage][
                                    "카카오톡 플러스친구 채널:"
                                ]
                            }
                        </Text>
                        <Text
                            onClick={onClickKakaoPlusChannel}
                            cursor={"pointer"}
                        >
                            insteadofme(야,해줘)
                        </Text>
                    </HStack>
                </VStack>
            </VStack>
        </Center>
    );
}
