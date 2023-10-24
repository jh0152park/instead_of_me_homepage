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
            w="100%"
            h="1000px"
            position="relative"
            color="black"
            bgColor="whitesmoke"
        >
            <Image w="100%" h="100%" objectFit="cover" src={image} />

            <VStack
                alignItems={"flex-end"}
                right="100px"
                top="300px"
                position="absolute"
                color="whitesmoke"
            >
                <Heading>Instead of me </Heading>
                <Heading>
                    {LANGUAGE[currentLanguage]["우리는 선택과 집중을 합니다."]}
                </Heading>
                <Heading>
                    {
                        LANGUAGE[currentLanguage][
                            "양보단 질을, 높은 완성도의 가치를 믿습니다."
                        ]
                    }
                </Heading>
                <Heading mt="30px">
                    {
                        LANGUAGE[currentLanguage][
                            "CAPA를 초과하는 Workload로 인해"
                        ]
                    }
                </Heading>
                <Heading>
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
