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
            <VStack>
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
                >
                    {
                        LANGUAGE[currentLanguage][
                            "우리는 경험과 소통을 중심으로 단순 외주를 뛰어넘어"
                        ]
                    }
                </Heading>
                <Heading
                    fontSize={{
                        base: "12px",
                        md: "24px",
                        lg: "36px",
                    }}
                >
                    {
                        LANGUAGE[currentLanguage][
                            "새로운 도전을 함께 시작하는 비즈니스 파트너가 되는것이 목표입니다."
                        ]
                    }
                </Heading>
                <Box
                    w={{
                        base: "300px",
                        md: "500px",
                        lg: "600px",
                    }}
                    h={{
                        base: "200px",
                        md: "300px",
                        lg: "400px",
                    }}
                >
                    <Image w="100%" h="100%" objectFit="cover" src={image} />
                </Box>
            </VStack>
        </Center>
    );
}
