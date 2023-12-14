import {
    Box,
    Button,
    Center,
    Checkbox,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Select,
    Text,
    Textarea,
    VStack,
    useToast,
} from "@chakra-ui/react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { displayResolution, languageState } from "../global/project_common";
import { Helmet } from "react-helmet";
import {
    contactFormLanguage,
    contactFormExtraLanguage,
} from "../components/contactForm/language";
import { COLOR_PALETTES } from "../Colors";

export default function ContactForm() {
    const logo =
        "https://raw.githubusercontent.com/jh0152park/instead_of_me_homepage/main/images/logo/blackLogo/boxLogo3.ico?raw=true";

    const toast = useToast();
    const navigate = useNavigate();
    const { register, handleSubmit, watch, reset } = useForm();

    const [sendAllow, setSendAllow] = useState(false);
    const [sending, setSending] = useState(false);
    const currentMode = useRecoilValue(displayResolution);
    const currentLanguage = useRecoilValue(languageState);

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
                    contactFormExtraLanguage[currentLanguage]
                        .개인정보제공동의해야합니다,
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
                    contactFormExtraLanguage[currentLanguage]
                        .검토후최대한빠르게,
            });
        } catch (error) {
            console.log(error);
            toast({
                status: "error",
                title: "Failed",
                description:
                    contactFormExtraLanguage[currentLanguage]
                        .잠시후다시부탁드립니다,
            });
        } finally {
            setSending(false);
            reset();
            navigate("/");
        }
    }

    return (
        <>
            <Helmet>
                <title>Contact us</title>
            </Helmet>
            <Center w="100vw" mt="100px">
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
                        <Heading>
                            {contactFormLanguage[currentLanguage].문의하기}
                        </Heading>
                    </VStack>

                    <Container>
                        <FormControl mt="100px">
                            <FormLabel
                                fontWeight="bold"
                                fontSize="20px"
                                mb="20px"
                            >
                                {
                                    contactFormLanguage[currentLanguage]
                                        .개인이십니까
                                }
                            </FormLabel>
                            <Select
                                placeholder={
                                    contactFormExtraLanguage[currentLanguage]
                                        .선택해주세요
                                }
                                {...register("is_personal", { required: true })}
                            >
                                <option value="yes">
                                    {
                                        contactFormLanguage[currentLanguage]
                                            .개인입니다
                                    }
                                </option>
                                <option value="no">
                                    {
                                        contactFormLanguage[currentLanguage]
                                            .개인이아닙니다
                                    }
                                </option>
                            </Select>
                        </FormControl>

                        <FormControl mt="100px">
                            <FormLabel
                                fontWeight="bold"
                                fontSize="20px"
                                mb="20px"
                            >
                                {
                                    contactFormLanguage[currentLanguage]
                                        .귀하또는회사의이름을입력해주세요
                                }
                            </FormLabel>
                            <Textarea
                                placeholder={
                                    contactFormExtraLanguage[currentLanguage]
                                        .이곳에작성해주세요
                                }
                                {...register("name", { required: true })}
                            />
                        </FormControl>

                        <FormControl mt="100px">
                            <FormLabel
                                fontWeight="bold"
                                fontSize="20px"
                                mb="20px"
                            >
                                {
                                    contactFormLanguage[currentLanguage]
                                        .연락가능한연락처를입력해주세요
                                }
                            </FormLabel>
                            <Textarea
                                placeholder={
                                    contactFormExtraLanguage[currentLanguage]
                                        .이곳에작성해주세요
                                }
                                {...register("contact", { required: true })}
                            />
                        </FormControl>

                        <FormControl mt="100px">
                            <FormLabel
                                fontWeight="bold"
                                fontSize="20px"
                                mb="20px"
                            >
                                {
                                    contactFormLanguage[currentLanguage]
                                        .답장받을이메일을입력해주세요
                                }
                            </FormLabel>
                            <Textarea
                                placeholder={
                                    contactFormExtraLanguage[currentLanguage]
                                        .이곳에작성해주세요
                                }
                                {...register("email", { required: true })}
                            />
                        </FormControl>

                        <FormControl mt="100px">
                            <FormLabel
                                fontWeight="bold"
                                fontSize="20px"
                                mb="20px"
                            >
                                {
                                    contactFormLanguage[currentLanguage]
                                        .문의하고싶은내용을가능한자세히입력해주세요
                                }
                            </FormLabel>
                            <Textarea
                                placeholder={
                                    contactFormExtraLanguage[currentLanguage]
                                        .이곳에작성해주세요
                                }
                                {...register("detail", { required: true })}
                            />
                        </FormControl>
                    </Container>

                    <Box my="50px" pl={currentMode ? "5px" : "none"}>
                        <VStack>
                            <Checkbox
                                defaultChecked={false}
                                colorScheme="blue"
                                borderColor="blue.300"
                                onChange={toggleAllow}
                            >
                                {
                                    contactFormExtraLanguage[currentLanguage]
                                        .개인정보제공동의
                                }
                            </Checkbox>
                            <Popover>
                                <PopoverTrigger>
                                    <Button
                                        colorScheme="blue"
                                        variant="link"
                                        fontSize="15px"
                                    >
                                        {
                                            contactFormExtraLanguage[
                                                currentLanguage
                                            ].자세히보기
                                        }
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverHeader>
                                        <Text>
                                            {
                                                contactFormExtraLanguage[
                                                    currentLanguage
                                                ].개인정보를수집합니다
                                            }
                                        </Text>
                                    </PopoverHeader>
                                    <PopoverBody>
                                        <Text>
                                            {
                                                contactFormExtraLanguage[
                                                    currentLanguage
                                                ].목적
                                            }
                                        </Text>
                                        <Box my="15px"></Box>
                                        <Text>
                                            {
                                                contactFormExtraLanguage[
                                                    currentLanguage
                                                ].항목
                                            }
                                        </Text>
                                        <Box my="15px"></Box>
                                        <Text>
                                            {
                                                contactFormExtraLanguage[
                                                    currentLanguage
                                                ].제한이있을수있습니다
                                            }
                                        </Text>
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                        </VStack>
                    </Box>

                    <Button
                        my="100px"
                        // bgColor="green.300"
                        bgColor={COLOR_PALETTES.skyblue}
                        w="120px"
                        h="45px"
                        borderRadius="10px"
                        _hover={{
                            cursor: "pointer",
                            bgColor: COLOR_PALETTES.blue,
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
                                {
                                    contactFormExtraLanguage[currentLanguage]
                                        .제출하기
                                }
                            </Text>
                        </VStack>
                    </Button>
                </VStack>
            </Center>
        </>
    );
}
