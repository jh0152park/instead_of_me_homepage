import { Box, Center, HStack, Heading, Image, VStack } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import {
    languageCode,
    languageSelected,
    languageState,
} from "../../global/project_common";

export default function SelectLanguage() {
    const chractor =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/emoji/emoji.png?raw=true";

    const setCurrentLanguage = useSetRecoilState(languageState);
    const setLanguageSelected = useSetRecoilState(languageSelected);

    function changeLanguage(language: languageCode) {
        setCurrentLanguage(language);
    }

    function onLanguageSelected(language: string) {
        if (language === "kor") {
            setLanguageSelected(true);
            changeLanguage(languageCode.KOR);
        } else {
            setLanguageSelected(true);
            changeLanguage(languageCode.ENG);
        }
    }

    return (
        <Center w="100%" h="100vh">
            <HStack>
                <Box
                    w="250px"
                    h="250px"
                    borderRadius="50%"
                    border="3px solid"
                    borderColor="teal.500"
                    mr="50px"
                    _hover={{
                        cursor: "pointer",
                    }}
                >
                    <Image
                        w="100%"
                        h="100%"
                        src={chractor}
                        objectFit={"cover"}
                        borderRadius="full"
                    />
                </Box>

                <VStack alignItems="center">
                    <VStack w="100%">
                        <Heading>사용하실 언어를 선택해 주세요 😊</Heading>
                        <Heading>Please select one what you want 😊</Heading>
                    </VStack>

                    <HStack mt="50px">
                        <Center
                            w="200px"
                            h="60px"
                            bgColor="green.400"
                            borderRadius="20px"
                            _hover={{ cursor: "pointer", bgColor: "green.500" }}
                            transition="all 0.2s linear"
                            onClick={() => onLanguageSelected("kor")}
                        >
                            <Heading fontSize="25px" color="whitesmoke">
                                한국어
                            </Heading>
                        </Center>

                        <Center
                            w="200px"
                            h="60px"
                            bgColor="green.400"
                            borderRadius="20px"
                            _hover={{ cursor: "pointer", bgColor: "green.500" }}
                            transition="all 0.2s linear"
                            onClick={() => onLanguageSelected("eng")}
                        >
                            <Heading fontSize="25px" color="whitesmoke">
                                English
                            </Heading>
                        </Center>
                    </HStack>
                </VStack>
            </HStack>
        </Center>
    );
}
