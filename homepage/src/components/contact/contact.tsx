import {
    Box,
    Center,
    HStack,
    Heading,
    Icon,
    Text,
    VStack,
    useToast,
    Image,
} from "@chakra-ui/react";
import { displayResolution, languageState } from "../../global/project_common";
import { useRecoilValue } from "recoil";
import LANGUAGE from "../../global/language";
import { MdContentCopy } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { go_to_top } from "../../util/utils";

export default function Contact() {
    const qrImage =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/yuhyeon/images/QR/qrcode.png?raw=true";
    const currentLanguage = useRecoilValue(languageState);
    const currentMode = useRecoilValue(displayResolution);
    const toast = useToast();
    const navigate = useNavigate();

    function onClickKakaoPlusChannel() {
        window.open("http://pf.kakao.com/_aSGjG", "Instead of me", "popup=yes");
    }

    async function onClickCopy() {
        try {
            await window.navigator.clipboard.writeText(
                "insteadofme.yuhyeon@gmail.com"
            );
            toast({
                status: "success",
                title: LANGUAGE[currentLanguage]["복사가 완료되었습니다."],
            });
        } catch (error: any) {
            toast({
                status: "error",
                title: LANGUAGE[currentLanguage]["복사에 실패하였습니다."],
                description:
                    LANGUAGE[currentLanguage]["문제가 발생하였습니다."],
            });
        }
    }

    function onClickContact() {
        go_to_top(0);
        navigate("/contact");
    }

    return (
        <Center
            w="100dvw"
            h={
                currentMode === "web"
                    ? {
                          base: "500px",
                          md: "800px",
                          lg: "1000px",
                      }
                    : "100vh"
            }
            color="black"
            bgColor="whitesmoke"
            // pt={currentMode === "web" ? "none" : "10px"}
        >
            <VStack
                mt={
                    currentMode === "web"
                        ? {
                              base: "100px",
                              md: "-100px",
                              lg: "-200px",
                          }
                        : "0px"
                }
            >
                <Heading
                    fontSize={{
                        base: "30px",
                        md: "50px",
                        lg: "80px",
                    }}
                    fontWeight="extrabold"
                    color="green.400"
                >
                    Contact US
                </Heading>

                <Text
                    mt={{
                        base: "50px",
                        md: "80px",
                        lg: "100px",
                    }}
                    fontWeight="bold"
                    fontSize={{
                        base: "10px",
                        md: "16px",
                        lg: "20px",
                    }}
                    textAlign="center"
                >
                    {
                        LANGUAGE[currentLanguage][
                            "협업문의는 아래 비즈니스이메일 또는 카카오톡 플러스친구 채널을 통해 연락주세요."
                        ]
                    }
                </Text>

                <VStack
                    mt={{
                        base: "30px",
                        md: "40px",
                        lg: "50px",
                    }}
                >
                    <HStack>
                        <Text
                            fontSize={{
                                base: "10px",
                                md: "18px",
                            }}
                            fontWeight="bold"
                            color="green.400"
                        >
                            Business Email:
                        </Text>
                        <Text
                            fontSize={{
                                base: "10px",
                                md: "18px",
                            }}
                        >
                            insteadofme.yuhyeon@gmail.com
                        </Text>
                        <Icon
                            fontSize={{
                                base: "10px",
                                md: "18px",
                            }}
                            onClick={onClickCopy}
                            as={MdContentCopy}
                            color={"green.400"}
                            _hover={{
                                cursor: "pointer",
                            }}
                        />
                    </HStack>
                    <HStack>
                        <Text
                            fontSize={{
                                base: "10px",
                                md: "18px",
                            }}
                            fontWeight="bold"
                            color="green.400"
                        >
                            {
                                LANGUAGE[currentLanguage][
                                    "카카오톡 플러스친구 채널:"
                                ]
                            }
                        </Text>
                        <Text
                            fontSize={{
                                base: "10px",
                                md: "18px",
                            }}
                            onClick={onClickKakaoPlusChannel}
                            cursor={"pointer"}
                            _hover={{
                                textDecoration: "underline",
                            }}
                        >
                            @insteadofme(야, 해줘)
                        </Text>
                    </HStack>
                    <Box
                        mt={3}
                        border="2px"
                        padding={3}
                        borderColor="yellow.300"
                    >
                        <Image src={qrImage} objectFit="cover" />
                    </Box>

                    <Box
                        px={{
                            base: "20px",
                            md: "25px",
                            lg: "30px",
                        }}
                        py={{
                            base: "5px",
                            md: "7px",
                            lg: "10px",
                        }}
                        backgroundColor={"green.400"}
                        mt={15}
                        mb={20}
                        borderRadius={"20px"}
                        cursor={"pointer"}
                        onClick={onClickContact}
                    >
                        <Text
                            color={"whitesmoke"}
                            fontSize={{
                                base: "10px",
                                md: "18px",
                            }}
                            fontWeight={"bold"}
                            textAlign={"center"}
                        >
                            {LANGUAGE[currentLanguage].문의하기}
                        </Text>
                    </Box>
                </VStack>
            </VStack>
        </Center>
    );
}
