import { Box, Center, Heading, Image } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { languageState } from "../../recoil/atom";
import language from "../../language";

export default function Introduce() {
    const currentLanguage = useRecoilValue(languageState);
    const hand_image =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/icons/three_hands.png?raw=true";

    return (
        <Box
            w="100%"
            h="1000px"
            position="relative"
            color="black"
            bgColor="whitesmoke"
        >
            <Box pl="200px" pt="200px">
                <Heading>Instead of me,</Heading>
                <Heading my="20px">
                    {
                        language[currentLanguage][
                            "우리는 글로벌 마켓에서 Smart Device, IoT, 반도체등"
                        ]
                    }
                </Heading>
                <Heading>
                    {
                        language[currentLanguage][
                            "다양한 분야에서 1위를 달리는 삼성전자 출신 S/W Engineer 그룹입니다."
                        ]
                    }
                </Heading>
                <Box w="450px" h="80px" mt="20px">
                    <Image
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        src="https://cdn.icon-icons.com/icons2/2389/PNG/512/samsung_logo_icon_144912.png"
                    />
                </Box>
            </Box>
            <Center w="100%" h="500px" mt="30px">
                <Image w="500px" h="500px" objectFit="cover" src={hand_image} />
            </Center>
        </Box>
    );
}
