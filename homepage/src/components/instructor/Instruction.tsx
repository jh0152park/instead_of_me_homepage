import { Box, Heading, VStack, Image } from "@chakra-ui/react";
import { languageState } from "../../global/project_common";
import { useRecoilValue } from "recoil";
import LANGUAGE from "../../global/language";

export default function Instruction() {
    const chractor =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/emoji/emoji.png?raw=true";
    const currentLanguage = useRecoilValue(languageState);

    return (
        <>
            <VStack mr="50px">
                <Heading>{LANGUAGE[currentLanguage]["환영합니다"]}</Heading>
                <Heading>{LANGUAGE[currentLanguage]["말씀해주세요"]}</Heading>
            </VStack>

            <VStack>
                <Box
                    w="250px"
                    h="250px"
                    borderRadius="50%"
                    border="3px solid"
                    borderColor="teal.500"
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
            </VStack>
        </>
    );
}
