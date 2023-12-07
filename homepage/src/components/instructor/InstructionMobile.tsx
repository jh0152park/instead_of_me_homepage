import { Box, Heading, VStack, Image, Center } from "@chakra-ui/react";
import { languageState } from "../../global/project_common";
import { useRecoilValue } from "recoil";
import LANGUAGE from "../../global/language";
import { useState } from "react";
import Phone from "./phone";
import PhoneMobile from "./phoneMobile";

export default function InstructionMobile() {
    const chractor =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/emoji/emoji.png?raw=true";
    const currentLanguage = useRecoilValue(languageState);
    const [clicked, setClicked] = useState<boolean>(false);

    function toggleClicked() {
        setClicked((prev) => !prev);
    }

    return (
        <Center>
            <VStack>
                <VStack>
                    <Heading fontSize="20px">
                        {LANGUAGE[currentLanguage]["환영합니다"]}
                    </Heading>
                    <Heading fontSize="20px">
                        {LANGUAGE[currentLanguage]["말씀해주세요"]}
                    </Heading>
                </VStack>

                <Box
                    w="250px"
                    h="250px"
                    borderRadius="50%"
                    border="3px solid"
                    borderColor="teal.500"
                    _hover={{
                        cursor: "pointer",
                        transform: "translateY(-10px)",
                    }}
                    transition="all 0.2s linear"
                    onClick={toggleClicked}
                >
                    <Image
                        w="100%"
                        h="100%"
                        src={chractor}
                        objectFit={"cover"}
                        borderRadius="full"
                    />
                </Box>

                <PhoneMobile clicked={clicked} />
            </VStack>
        </Center>
    );
}
