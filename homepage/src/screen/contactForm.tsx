import {
    Box,
    Button,
    Center,
    Checkbox,
    Container,
    FormControl,
    FormLabel,
    HStack,
    Heading,
    Image,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Radio,
    Select,
    Text,
    Textarea,
    VStack,
    useToast,
} from "@chakra-ui/react";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { displayResolution } from "../global/project_common";
import { Helmet } from "react-helmet";

export default function ContactForm() {
    const logo =
        "https://raw.githubusercontent.com/jh0152park/instead_of_me_homepage/main/images/logo/blackLogo/boxLogo3.ico?raw=true";

    const toast = useToast();
    const navigate = useNavigate();
    const { register, handleSubmit, watch, reset } = useForm();

    const [sendAllow, setSendAllow] = useState(false);
    const [sending, setSending] = useState(false);
    const currentMode = useRecoilValue(displayResolution);

    function toggleAllow() {
        setSendAllow((prev) => !prev);
    }

    function onClickLogo() {
        navigate("/");
    }

    async function onSubmit(data: any) {
        if (!sendAllow) {
            toast({
                status: "warning",
                title: "Can't send email",
                description:
                    "개인정보 제공동의를 해야합니다. Please agree to provide personal information.",
            });
            return;
        }

        const is_personal = data.is_personal;
        const name = data.name;
        const contact = data.contact;
        const email = data.email;
        const detail = data.detail;

        const forms = {
            is_personal,
            name,
            contact,
            email,
            detail,
        };
        try {
            setSending(true);

            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
                process.env.REACT_APP_EMAILJS_TEMPLATES_ID as string,
                forms,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            toast({
                status: "success",
                title: "Done",
                isClosable: true,
                description:
                    "검토 후 최대한 빠르게 답변 드리겠습니다. We'll reply as soon as possible with reviews.",
            });
        } catch (error) {
            console.log(error);
            toast({
                status: "error",
                title: "Failed",
                description:
                    "잠시 후 다시 부탁드립니다. Something went wrong, please try again.",
            });
        } finally {
            setSending(false);
            reset();
            navigate("/");
        }
    }

    // console.log(watch());

    return (
        <>
            <Helmet>
                <title>Contact us</title>
            </Helmet>
            <Center w="100vw">
                <VStack w="100%" as={"form"} onSubmit={handleSubmit(onSubmit)}>
                    <VStack minWidth="100%" spacing={0}>
                        <Image
                            w="200px"
                            my="50px"
                            src={logo}
                            objectFit="cover"
                            cursor={"pointer"}
                            onClick={onClickLogo}
                        />

                        <Heading>문의하기</Heading>
                        <Heading>Contact</Heading>
                    </VStack>

                    <Container>
                        <FormControl mt="100px">
                            <FormLabel fontWeight="bold" fontSize="20px">
                                개인 이십니까?
                            </FormLabel>
                            <FormLabel
                                fontWeight="bold"
                                fontSize="20px"
                                mb="20px"
                            >
                                Are you personal?
                            </FormLabel>
                            <Select
                                placeholder="선택해주세요. Select one"
                                {...register("is_personal", { required: true })}
                            >
                                <option value="yes">네, Yes</option>
                                <option value="no">아니오, No</option>
                            </Select>
                        </FormControl>

                        <FormControl mt="100px">
                            <FormLabel fontWeight="bold" fontSize="20px">
                                귀하 또는 회사의 이름을 입력해 주세요.
                            </FormLabel>
                            <FormLabel
                                fontWeight="bold"
                                fontSize="20px"
                                mb="20px"
                            >
                                Please enter the name of your or company.
                            </FormLabel>
                            <Textarea
                                placeholder="Pleaes enter here"
                                {...register("name", { required: true })}
                            />
                        </FormControl>

                        <FormControl mt="100px">
                            <FormLabel fontWeight="bold" fontSize="20px">
                                연락 가능한 연락처를 입력해 주세요.
                            </FormLabel>
                            <FormLabel
                                fontWeight="bold"
                                fontSize="20px"
                                mb="20px"
                            >
                                Please enter contact imformation where you can
                                be contacted.
                            </FormLabel>
                            <Textarea
                                placeholder="Pleaes enter here"
                                {...register("contact", { required: true })}
                            />
                        </FormControl>

                        <FormControl mt="100px">
                            <FormLabel fontWeight="bold" fontSize="20px">
                                답장 받을 이메일을 입력해 주세요.
                            </FormLabel>
                            <FormLabel
                                fontWeight="bold"
                                fontSize="20px"
                                mb="20px"
                            >
                                Please enter your email address to receive a
                                reply.
                            </FormLabel>
                            <Textarea
                                placeholder="Pleaes enter here"
                                {...register("email", { required: true })}
                            />
                        </FormControl>

                        <FormControl mt="100px">
                            <FormLabel fontWeight="bold" fontSize="20px">
                                문의하고싶은 내용을 가능한 자세히 입력해주세요.
                            </FormLabel>
                            <FormLabel
                                fontWeight="bold"
                                fontSize="20px"
                                mb="20px"
                            >
                                Please enter the information you wish to inquire
                                about as detail as possible.
                            </FormLabel>
                            <Textarea
                                placeholder="Pleaes enter here"
                                {...register("detail", { required: true })}
                            />
                        </FormControl>
                    </Container>

                    <Box my="50px" pl={currentMode ? "5px" : "none"}>
                        <VStack>
                            <Checkbox
                                defaultChecked={false}
                                colorScheme="green"
                                borderColor="green"
                                onChange={toggleAllow}
                            >
                                개인정보 제공동의 Consent to provision of
                                personal information
                            </Checkbox>

                            <Popover>
                                <PopoverTrigger>
                                    <Button
                                        colorScheme="green"
                                        variant="link"
                                        fontSize="15px"
                                    >
                                        자세히보기, See detail
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverHeader>
                                        <Text>
                                            Instead of me는 고객 문의사항 접수
                                            및 답변을 위해 아래와 같이
                                            개인정보를 수집, 이용합니다.
                                        </Text>
                                        <Text>
                                            Instead of me collects personal
                                            information as follows to receive
                                            and respond to customer inquiries.
                                        </Text>
                                    </PopoverHeader>
                                    <PopoverBody>
                                        <Text>
                                            목적: 고객 문의사항 접수 및 답변
                                        </Text>
                                        <Text>
                                            Purpose: Receiving and responding to
                                            customer inquiries
                                        </Text>
                                        <Box my="15px"></Box>
                                        <Text>
                                            항목: 회사명, 성함, 연락처, 이메일
                                        </Text>
                                        <Text>
                                            Items: Company name, name, contact
                                            information, email
                                        </Text>
                                        <Box my="15px"></Box>
                                        <Text>
                                            서비스 이용에 필요한 최소한의 수집
                                            및 이용에 동의하지 않을 수 있으나,
                                            동의를 거부할 경우 서비스 이용에
                                            제한이 있을 수 있습니다.
                                        </Text>
                                        <Text>
                                            Minimum collection and You may not
                                            agree to the use, but If you refuse,
                                            your use of the service may be
                                            restricted. there is.
                                        </Text>
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                        </VStack>
                    </Box>

                    <Button
                        my="100px"
                        bgColor="green.300"
                        w="150px"
                        h="65px"
                        borderRadius="20px"
                        _hover={{
                            cursor: "pointer",
                            bgColor: "green.400",
                            transition: "all 0.2s linear",
                        }}
                        type="submit"
                        isLoading={sending}
                    >
                        <VStack spacing={0}>
                            <Text
                                fontWeight="bold"
                                fontSize="18px"
                                color="white"
                            >
                                제출하기
                            </Text>
                            <Text
                                fontWeight="bold"
                                fontSize="18px"
                                color="white"
                            >
                                Submit
                            </Text>
                        </VStack>
                    </Button>
                </VStack>
            </Center>
        </>
    );
}
