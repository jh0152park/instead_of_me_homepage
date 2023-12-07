import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import { SiMinutemailer } from "react-icons/si";
import Avatar from "./avatar";
import { useNavigate } from "react-router-dom";
import Widget from "./widget";

export default function Phone({ clicked }: { clicked: boolean }) {
    const navigate = useNavigate();

    function onAskButtonClicked() {
        navigate("/contact");
    }

    return (
        <Box
            w="400px"
            h="700px"
            bgColor="whitesmoke"
            borderRadius="20px"
            position="absolute"
            right="50px"
            margin="auto"
            opacity={clicked ? "1" : "0"}
            transform={clicked ? `translateY(10px)` : ""}
            transition={"all 0.2s linear"}
            p="20px"
        >
            <Text fontWeight="bold" mb="70px">
                Instead of me, 야 해줘
            </Text>

            <HStack spacing={0} alignItems="flex-end">
                <Avatar size={50} border={false} hover={false} />
                <VStack alignItems={"flex-start"} ml="20px">
                    <Text fontSize="12px">Instead of me, 야 해줘</Text>
                    <Box
                        w="280px"
                        h="300px"
                        borderRadius="20px"
                        bgColor="gray.200"
                        p="15px"
                    >
                        <Text fontSize="15px" mb="20px">
                            관심 가져주셔서 감사합니다😆
                        </Text>
                        <Text fontSize="15px" mb="5px">
                            필요하신 모든걸 만들어 드리는 Instead of me입니다😎
                        </Text>
                        <Text fontSize="15px" mb="20px">
                            저희는 여러분들과 함께 더욱 더 큰 성장을 원하고
                            있습니다!
                        </Text>
                        <Text fontSize="15px" mb="60px">
                            협업 관련 문의는 쉽고 빠르게 메일을통해 진행해
                            보세요 🥰
                        </Text>

                        <VStack>
                            <Center
                                w="250px"
                                h="40px"
                                bgColor="green.300"
                                borderRadius="20px"
                                _hover={{
                                    cursor: "pointer",
                                    bgColor: "green.400",
                                }}
                                transition="all 0.2s linear"
                                onClick={onAskButtonClicked}
                            >
                                <Text
                                    fontSize="15px"
                                    fontWeight="bold"
                                    color="whitesmoke"
                                    mr="5px"
                                >
                                    문의하기
                                </Text>
                                <SiMinutemailer
                                    color="whitesmoke"
                                    size={"20px"}
                                />
                            </Center>
                            <Text fontSize="12px" color="black">
                                🕐 24시간 항상 운영해요
                            </Text>
                        </VStack>
                    </Box>
                </VStack>
            </HStack>

            <VStack mt="10px" alignItems="flex-start" ml="65px">
                <Widget
                    page={"home"}
                    size={250}
                    title={"홈페이지 둘러보기 👀"}
                />
                <Widget
                    page={"business"}
                    size={200}
                    title={"기술 스택이 궁금해요 🔧"}
                />
                <Widget
                    page={"contact_us"}
                    size={180}
                    title={"문의하고 싶어요 🙋‍♂️"}
                />
                <Widget
                    page={"process"}
                    size={230}
                    title={"제작 과정이 궁금해요 🤔"}
                />
                <Widget
                    page={"kakao"}
                    size={240}
                    title={"카카오톡 문의 바로가기 😎"}
                />
            </VStack>
        </Box>
    );
}
