import { Center, Box, VStack, Heading, Image } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { languageState } from "../../global/project_common";
import LANGUAGE from "../../global/language";

export default function Partner() {
    const currentLanguage = useRecoilValue(languageState);
    const image =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/icons/partner.png?raw=true";

    return (
        <Center
            w="100%"
            h="1000px"
            position="relative"
            color="black"
            bgColor="whitesmoke"
        >
            <VStack>
                <Heading>Instead of me,</Heading>
                <Heading>
                    {
                        LANGUAGE[currentLanguage][
                            "우리는 경험과 소통을 중심으로 단순 외주를 뛰어넘어"
                        ]
                    }
                </Heading>
                <Heading>
                    {
                        LANGUAGE[currentLanguage][
                            "새로운 도전을 함께 시작하는 비즈니스 파트너가 되는것이 목표입니다."
                        ]
                    }
                </Heading>
                <Box w="600px" h="400px">
                    <Image w="100%" h="100%" objectFit="cover" src={image} />
                </Box>
            </VStack>
        </Center>
    );
}
