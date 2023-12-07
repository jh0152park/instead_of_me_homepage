import { Box, Heading, VStack, Image } from "@chakra-ui/react";
import { languageState, phoneState } from "../../global/project_common";
import { useRecoilState, useRecoilValue } from "recoil";
import LANGUAGE from "../../global/language";
import { useEffect, useState } from "react";
import Phone from "./phone";

export default function Instruction() {
    const chractor =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/emoji/emoji.png?raw=true";
    const currentLanguage = useRecoilValue(languageState);
    const [clicked, setClicked] = useState<boolean>(false);
    const [PhoneState, setPhoneState] = useRecoilState(phoneState);

    console.log(PhoneState);

    function toggleClicked() {
        setPhoneState((prev) => !prev);
        setClicked((prev) => !prev);
    }

    useEffect(() => {
        setClicked(PhoneState);
    }, [PhoneState]);

    return (
        <>
            <VStack mr="50px">
                <Heading>{LANGUAGE[currentLanguage]["환영합니다"]}</Heading>
                <Heading>{LANGUAGE[currentLanguage]["말씀해주세요"]}</Heading>
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

            <Phone clicked={clicked} />
        </>
    );
}
