import { Box, Heading, Image, VStack } from "@chakra-ui/react";
import { languageState } from "../../global/project_common";
import { useRecoilValue } from "recoil";
import LANGUAGE from "../../global/language";

export default function Intro() {
    const currentLanguage = useRecoilValue(languageState);
    const image =
        "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

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
            <Image w="100%" h="100%" objectFit="fill" src={image} />

            <VStack
                alignItems={"flex-end"}
                right={{
                    base: "10px",
                    md: "30px",
                    lg: "100px",
                }}
                top={{
                    base: "50px",
                    md: "150px",
                    lg: "300px",
                }}
                position="absolute"
                color="whitesmoke"
            >
                <Heading
                    fontSize={{
                        base: "16px",
                        md: "24px",
                        lg: "36px",
                    }}
                >
                    Instead of me{" "}
                </Heading>
                <Heading
                    fontSize={{
                        base: "16px",
                        md: "24px",
                        lg: "36px",
                    }}
                >
                    {LANGUAGE[currentLanguage]["우리는 선택과 집중을 합니다."]}
                </Heading>
                <Heading
                    fontSize={{
                        base: "16px",
                        md: "24px",
                        lg: "36px",
                    }}
                >
                    {
                        LANGUAGE[currentLanguage][
                            "양보단 질을, 높은 완성도의 가치를 믿습니다."
                        ]
                    }
                </Heading>
                <Heading
                    fontSize={{
                        base: "16px",
                        md: "24px",
                        lg: "36px",
                    }}
                    mt="30px"
                >
                    {LANGUAGE[currentLanguage]["과도한 업무량으로 인하여"]}
                </Heading>
                <Heading
                    fontSize={{
                        base: "16px",
                        md: "24px",
                        lg: "36px",
                    }}
                >
                    {
                        LANGUAGE[currentLanguage][
                            "작업의 완성도를 떨어뜨리지 않겠다고 약속 드립니다."
                        ]
                    }
                </Heading>
            </VStack>
        </Box>
    );
}
