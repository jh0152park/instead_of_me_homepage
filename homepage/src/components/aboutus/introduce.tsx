import { Box, Center, Heading, Image } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { languageState } from "../../global/project_common";
import LANGUAGE from "../../global/language";

export default function Introduce() {
    const currentLanguage = useRecoilValue(languageState);
    const hand_image =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/icons/three_hands.png?raw=true";

    return (
        <Box
            w="100dvw"
            h={{
                base: "500px",
                md: "800px",
                lg: "1000px",
            }}
            position="relative"
            color="black"
            bgColor="whitesmoke"
        >
            <Box
                px={{
                    base: "20px",
                    md: "50px",
                    lg: "200px",
                }}
                pt={{
                    base: "20px",
                    md: "50px",
                    lg: "200px",
                }}
            >
                <Heading
                    fontSize={{
                        base: "12px",
                        md: "24px",
                        lg: "36px",
                    }}
                >
                    Instead of me,
                </Heading>
                <Heading
                    fontSize={{
                        base: "12px",
                        md: "24px",
                        lg: "36px",
                    }}
                    my="20px"
                >
                    {
                        LANGUAGE[currentLanguage][
                            "우리는 글로벌 마켓에서 Smart Device, IoT, 반도체등"
                        ]
                    }
                </Heading>
                <Heading
                    fontSize={{
                        base: "11.5px",
                        md: "24px",
                        lg: "36px",
                    }}
                >
                    {
                        LANGUAGE[currentLanguage][
                            "다양한 분야에서 1위를 달리는 삼성전자 출신 S/W Engineer 그룹입니다."
                        ]
                    }
                </Heading>
                <Box
                    w={{
                        base: "300px",
                        md: "450px",
                    }}
                    h="80px"
                    mt="20px"
                >
                    <Image
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        src="https://cdn.icon-icons.com/icons2/2389/PNG/512/samsung_logo_icon_144912.png"
                    />
                </Box>
            </Box>
            <Center
                w="100%"
                h={{
                    base: "350px",
                    md: "450px",
                    lg: "500px",
                }}
                mt="30px"
            >
                <Image
                    w={{
                        base: "350px",
                        md: "450px",
                        lg: "500px",
                    }}
                    h={{
                        base: "350px",
                        md: "450px",
                        lg: "500px",
                    }}
                    objectFit="fill"
                    src={hand_image}
                />
            </Center>
        </Box>
    );
}
