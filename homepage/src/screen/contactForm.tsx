// 개인 or 회사
// 성함 혹은 회사명
// 연락가능한 연락처
// 답장받을이메일
// 문의내용
// 버튼

import { Box, Center, Image, Text, VStack } from "@chakra-ui/react";
import TextForm from "../components/contactForm/textForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
    const logo =
        "https://raw.githubusercontent.com/jh0152park/instead_of_me_homepage/main/images/logo/blackLogo/boxLogo3.ico?raw=true";

    const [isPersonal, setIsPersonal] = useState("");
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [detail, setDetail] = useState("");

    const navigate = useNavigate();

    function onClickLogo() {
        navigate("/");
    }

    return (
        <Center width={"100%"} height={"1000px"} p={"20px"}>
            <VStack alignItems={"flex-start"} spacing={5} minWidth={"100%"}>
                <Box
                    minW="150px"
                    maxW="150px"
                    _hover={{ cursor: "pointer" }}
                    alignSelf={"center"}
                    onClick={onClickLogo}
                >
                    <Image src={logo} objectFit="cover" />
                </Box>

                <VStack m={"20px"} alignSelf={"center"}>
                    <Text color={"black"} fontWeight={"bold"} fontSize={"30px"}>
                        문의하기
                    </Text>

                    <Text color={"black"} fontWeight={"bold"} fontSize={"30px"}>
                        Contact
                    </Text>
                </VStack>

                <TextForm
                    select
                    title="개인이신가요?"
                    engTitle="Are you personal?"
                    value={isPersonal}
                    setValue={setIsPersonal}
                />

                <TextForm
                    title="귀하 또는 회사의 이름을 입력해주세요."
                    engTitle="Please enter the name of your or company."
                    value={name}
                    setValue={setName}
                />

                <TextForm
                    title="연락 가능한 연락처를 입력해주세요."
                    engTitle="Please enter contact information where you can be contacted."
                    value={contact}
                    setValue={setContact}
                />

                <TextForm
                    title="답장 받을 이메일을 입력해주세요."
                    engTitle="Please enter your email address to receive a reply."
                    value={email}
                    setValue={setEmail}
                />

                <TextForm
                    title="문의하고싶은 내용을 입력해주세요."
                    engTitle="Please enter the information you wish to inquire about."
                    value={detail}
                    setValue={setDetail}
                />

                <Box
                    px={"30px"}
                    py={"10px"}
                    backgroundColor={"green.400"}
                    mt={15}
                    borderRadius={"20px"}
                    cursor={"pointer"}
                    onClick={() => {}}
                    alignSelf={"center"}
                >
                    <Text
                        color={"whitesmoke"}
                        fontSize={16}
                        fontWeight={"bold"}
                        textAlign={"center"}
                    >
                        제출하기
                    </Text>
                    <Text
                        color={"whitesmoke"}
                        fontSize={16}
                        fontWeight={"bold"}
                        textAlign={"center"}
                    >
                        Submit
                    </Text>
                </Box>
            </VStack>
        </Center>
    );
}
