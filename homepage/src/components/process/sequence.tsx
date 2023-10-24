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
import { languageState } from "../../recoil/atom";
import { useRecoilValue } from "recoil";
import language from "../../language";

export default function Sequence() {
    const currentLanguage = useRecoilValue(languageState);

    return (
        <Center w="100%" h="1000px" color="black" bgColor="whitesmoke">
            <VStack>
                <Heading mb="150px">Process of production</Heading>
                <Grid
                    w="1100px"
                    h="500px"
                    templateColumns="repeat(3, 1fr)"
                    templateRows="repeat(2, 1fr)"
                >
                    <GridItem border="1px solid rgba(0, 0, 0, 0.3)">
                        <Center>
                            <VStack>
                                <Center
                                    w="30px"
                                    h="30px"
                                    mt="10px"
                                    borderRadius="50%"
                                    border="none"
                                    bgColor="green.300"
                                    color="whitesmoke"
                                    fontWeight="bold"
                                >
                                    1
                                </Center>
                                <Icon
                                    my="30px"
                                    as={LuNewspaper}
                                    w="70px"
                                    h="70px"
                                />
                                <Heading fontSize="20px" textAlign={"center"}>
                                    {
                                        language[currentLanguage][
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
                                    w="30px"
                                    h="30px"
                                    mt="10px"
                                    borderRadius="50%"
                                    border="none"
                                    bgColor="green.300"
                                    color="whitesmoke"
                                    fontWeight="bold"
                                >
                                    2
                                </Center>
                                <Icon
                                    my="30px"
                                    as={TbListSearch}
                                    w="70px"
                                    h="70px"
                                />
                                <Heading fontSize="20px" textAlign={"center"}>
                                    {
                                        language[currentLanguage][
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
                                    w="30px"
                                    h="30px"
                                    mt="10px"
                                    borderRadius="50%"
                                    border="none"
                                    bgColor="green.300"
                                    color="whitesmoke"
                                    fontWeight="bold"
                                >
                                    3
                                </Center>
                                <Icon
                                    my="30px"
                                    as={BsFolderSymlink}
                                    w="70px"
                                    h="70px"
                                />
                                <Heading fontSize="20px" textAlign={"center"}>
                                    {
                                        language[currentLanguage][
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
                                    w="30px"
                                    h="30px"
                                    mt="10px"
                                    borderRadius="50%"
                                    border="none"
                                    bgColor="green.300"
                                    color="whitesmoke"
                                    fontWeight="bold"
                                >
                                    4
                                </Center>
                                <Icon
                                    my="30px"
                                    as={FaTools}
                                    w="70px"
                                    h="70px"
                                />
                                <Heading fontSize="20px" textAlign={"center"}>
                                    {language[currentLanguage]["제작"]}
                                </Heading>
                            </VStack>
                        </Center>
                    </GridItem>

                    <GridItem border="1px solid rgba(0, 0, 0, 0.3)">
                        <Center>
                            <VStack>
                                <Center
                                    w="30px"
                                    h="30px"
                                    mt="10px"
                                    borderRadius="50%"
                                    border="none"
                                    bgColor="green.300"
                                    color="whitesmoke"
                                    fontWeight="bold"
                                >
                                    5
                                </Center>
                                <Icon
                                    my="30px"
                                    as={LuEraser}
                                    w="70px"
                                    h="70px"
                                />
                                <Heading fontSize="20px" textAlign={"center"}>
                                    {language[currentLanguage]["수정 및 확정"]}
                                </Heading>
                            </VStack>
                        </Center>
                    </GridItem>

                    <GridItem border="1px solid rgba(0, 0, 0, 0.3)">
                        <Center>
                            <VStack>
                                <Center
                                    w="30px"
                                    h="30px"
                                    mt="10px"
                                    borderRadius="50%"
                                    border="none"
                                    bgColor="green.300"
                                    color="whitesmoke"
                                    fontWeight="bold"
                                >
                                    6
                                </Center>
                                <Icon
                                    my="30px"
                                    as={ImHappy}
                                    w="70px"
                                    h="70px"
                                />
                                <Heading fontSize="20px" textAlign={"center"}>
                                    {language[currentLanguage]["제작완료"]}
                                </Heading>
                            </VStack>
                        </Center>
                    </GridItem>
                </Grid>
            </VStack>
        </Center>
    );
}
