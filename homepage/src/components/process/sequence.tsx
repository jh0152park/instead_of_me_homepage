import {
    Center,
    Grid,
    GridItem,
    Heading,
    Icon,
    VStack,
} from "@chakra-ui/react";
import { LuNewspaper, LuEraser } from "react-icons/lu";
import { TbListSearch } from "react-icons/tb";
import { BsFolderSymlink } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { ImHappy } from "react-icons/im";
import { languageState } from "../../global/project_common";
import { useRecoilValue } from "recoil";
import LANGUAGE from "../../global/language";

export default function Sequence() {
    const currentLanguage = useRecoilValue(languageState);

    return (
        <Center
            w="100dvw"
            h={{
                base: "500px",
                md: "800px",
                lg: "1000px",
            }}
            color="black"
            bgColor="whitesmoke"
        >
            <VStack>
                <Heading
                    mb={{
                        base: "50px",
                        md: "100px",
                        lg: "150px",
                    }}
                >
                    Process of production
                </Heading>
                <Grid
                    w={{
                        base: "300px",
                        md: "700px",
                        lg: "1100px",
                    }}
                    h={{
                        base: "250px",
                        md: "400px",
                        lg: "500px",
                    }}
                    templateColumns="repeat(3, 1fr)"
                    templateRows="repeat(2, 1fr)"
                >
                    <GridItem border="1px solid rgba(0, 0, 0, 0.3)">
                        <Center>
                            <VStack>
                                <Center
                                    w={{ base: "15px", md: "20px", lg: "30px" }}
                                    h={{ base: "15px", md: "20px", lg: "30px" }}
                                    mt="10px"
                                    borderRadius="50%"
                                    border="none"
                                    bgColor="green.300"
                                    color="whitesmoke"
                                    fontWeight="bold"
                                    fontSize={{
                                        base: "8px",
                                        md: "12px",
                                        lg: "18px",
                                    }}
                                >
                                    1
                                </Center>
                                <Icon
                                    my={{
                                        base: "20px",
                                        md: "25px",
                                        lg: "30px",
                                    }}
                                    as={LuNewspaper}
                                    w={{ base: "30px", md: "50px", lg: "70px" }}
                                    h={{ base: "30px", md: "50px", lg: "70px" }}
                                />
                                <Heading
                                    fontSize={{
                                        base: "10px",
                                        md: "14px",
                                        lg: "20px",
                                    }}
                                    textAlign={"center"}
                                >
                                    {
                                        LANGUAGE[currentLanguage][
                                            "제작문의 및 견적상담"
                                        ]
                                    }
                                </Heading>
                            </VStack>
                        </Center>
                    </GridItem>

                    <GridItem border="1px solid rgba(0, 0, 0, 0.3)">
                        <Center>
                            <VStack>
                                <Center
                                    w={{ base: "15px", md: "20px", lg: "30px" }}
                                    h={{ base: "15px", md: "20px", lg: "30px" }}
                                    mt="10px"
                                    borderRadius="50%"
                                    border="none"
                                    bgColor="green.300"
                                    color="whitesmoke"
                                    fontWeight="bold"
                                    fontSize={{
                                        base: "8px",
                                        md: "12px",
                                        lg: "18px",
                                    }}
                                >
                                    2
                                </Center>
                                <Icon
                                    my={{
                                        base: "20px",
                                        md: "25px",
                                        lg: "30px",
                                    }}
                                    as={TbListSearch}
                                    w={{ base: "30px", md: "50px", lg: "70px" }}
                                    h={{ base: "30px", md: "50px", lg: "70px" }}
                                />
                                <Heading
                                    fontSize={{
                                        base: "10px",
                                        md: "14px",
                                        lg: "20px",
                                    }}
                                    textAlign={"center"}
                                >
                                    {
                                        LANGUAGE[currentLanguage][
                                            "견적검토 및 계약진행"
                                        ]
                                    }
                                </Heading>
                            </VStack>
                        </Center>
                    </GridItem>

                    <GridItem border="1px solid rgba(0, 0, 0, 0.3)">
                        <Center>
                            <VStack>
                                <Center
                                    w={{ base: "15px", md: "20px", lg: "30px" }}
                                    h={{ base: "15px", md: "20px", lg: "30px" }}
                                    mt="10px"
                                    borderRadius="50%"
                                    border="none"
                                    bgColor="green.300"
                                    color="whitesmoke"
                                    fontWeight="bold"
                                    fontSize={{
                                        base: "8px",
                                        md: "12px",
                                        lg: "18px",
                                    }}
                                >
                                    3
                                </Center>
                                <Icon
                                    my={{
                                        base: "20px",
                                        md: "25px",
                                        lg: "30px",
                                    }}
                                    as={BsFolderSymlink}
                                    w={{ base: "30px", md: "50px", lg: "70px" }}
                                    h={{ base: "30px", md: "50px", lg: "70px" }}
                                />
                                <Heading
                                    fontSize={{
                                        base: "10px",
                                        md: "14px",
                                        lg: "20px",
                                    }}
                                    textAlign={"center"}
                                >
                                    {
                                        LANGUAGE[currentLanguage][
                                            "의뢰인 자료 전달"
                                        ]
                                    }
                                </Heading>
                            </VStack>
                        </Center>
                    </GridItem>

                    <GridItem border="1px solid rgba(0, 0, 0, 0.3)">
                        <Center>
                            <VStack>
                                <Center
                                    w={{ base: "15px", md: "20px", lg: "30px" }}
                                    h={{ base: "15px", md: "20px", lg: "30px" }}
                                    mt="10px"
                                    borderRadius="50%"
                                    border="none"
                                    bgColor="green.300"
                                    color="whitesmoke"
                                    fontWeight="bold"
                                    fontSize={{
                                        base: "8px",
                                        md: "12px",
                                        lg: "18px",
                                    }}
                                >
                                    4
                                </Center>
                                <Icon
                                    my={{
                                        base: "20px",
                                        md: "25px",
                                        lg: "30px",
                                    }}
                                    as={FaTools}
                                    w={{ base: "30px", md: "50px", lg: "70px" }}
                                    h={{ base: "30px", md: "50px", lg: "70px" }}
                                />
                                <Heading
                                    fontSize={{
                                        base: "10px",
                                        md: "14px",
                                        lg: "20px",
                                    }}
                                    textAlign={"center"}
                                >
                                    {LANGUAGE[currentLanguage]["제작"]}
                                </Heading>
                            </VStack>
                        </Center>
                    </GridItem>

                    <GridItem border="1px solid rgba(0, 0, 0, 0.3)">
                        <Center>
                            <VStack>
                                <Center
                                    w={{ base: "15px", md: "20px", lg: "30px" }}
                                    h={{ base: "15px", md: "20px", lg: "30px" }}
                                    mt="10px"
                                    borderRadius="50%"
                                    border="none"
                                    bgColor="green.300"
                                    color="whitesmoke"
                                    fontWeight="bold"
                                    fontSize={{
                                        base: "8px",
                                        md: "12px",
                                        lg: "18px",
                                    }}
                                >
                                    5
                                </Center>
                                <Icon
                                    my={{
                                        base: "20px",
                                        md: "25px",
                                        lg: "30px",
                                    }}
                                    as={LuEraser}
                                    w={{ base: "30px", md: "50px", lg: "70px" }}
                                    h={{ base: "30px", md: "50px", lg: "70px" }}
                                />
                                <Heading
                                    fontSize={{
                                        base: "10px",
                                        md: "14px",
                                        lg: "20px",
                                    }}
                                    textAlign={"center"}
                                >
                                    {LANGUAGE[currentLanguage]["수정 및 확정"]}
                                </Heading>
                            </VStack>
                        </Center>
                    </GridItem>

                    <GridItem border="1px solid rgba(0, 0, 0, 0.3)">
                        <Center>
                            <VStack>
                                <Center
                                    w={{ base: "15px", md: "20px", lg: "30px" }}
                                    h={{ base: "15px", md: "20px", lg: "30px" }}
                                    mt="10px"
                                    borderRadius="50%"
                                    border="none"
                                    bgColor="green.300"
                                    color="whitesmoke"
                                    fontWeight="bold"
                                    fontSize={{
                                        base: "8px",
                                        md: "12px",
                                        lg: "18px",
                                    }}
                                >
                                    6
                                </Center>
                                <Icon
                                    my={{
                                        base: "20px",
                                        md: "25px",
                                        lg: "30px",
                                    }}
                                    as={ImHappy}
                                    w={{ base: "30px", md: "50px", lg: "70px" }}
                                    h={{ base: "30px", md: "50px", lg: "70px" }}
                                />
                                <Heading
                                    fontSize={{
                                        base: "10px",
                                        md: "14px",
                                        lg: "20px",
                                    }}
                                    textAlign={"center"}
                                >
                                    {LANGUAGE[currentLanguage]["제작완료"]}
                                </Heading>
                            </VStack>
                        </Center>
                    </GridItem>
                </Grid>
            </VStack>
        </Center>
    );
}
