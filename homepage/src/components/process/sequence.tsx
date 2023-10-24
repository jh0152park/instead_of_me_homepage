import { Center, Grid, GridItem, Heading, Icon, VStack } from '@chakra-ui/react';
import { LuNewspaper, LuEraser } from 'react-icons/lu';
import { TbListSearch } from 'react-icons/tb';
import { BsFolderSymlink } from 'react-icons/bs';
import { FaTools } from 'react-icons/fa';
import { ImHappy } from 'react-icons/im';
import { useTranslation } from 'react-i18next';

export default function Sequence() {
    const { t } = useTranslation();

    return (
        <Center w="100%" h="1000px" color="black" bgColor="whitesmoke">
            <VStack>
                <Heading mb="150px">Process of production</Heading>
                <Grid w="1100px" h="500px" templateColumns="repeat(3, 1fr)" templateRows="repeat(2, 1fr)">
                    <GridItem border="1px solid rgba(0, 0, 0, 0.3)">
                        <Center>
                            <VStack>
                                <Center w="30px" h="30px" mt="10px" borderRadius="50%" border="none" bgColor="green.300" color="whitesmoke" fontWeight="bold">
                                    1
                                </Center>
                                <Icon my="30px" as={LuNewspaper} w="70px" h="70px" />
                                <Heading fontSize="20px" textAlign={'center'}>
                                    {t('process_sequence_1')}
                                </Heading>
                            </VStack>
                        </Center>
                    </GridItem>

                    <GridItem border="1px solid rgba(0, 0, 0, 0.3)">
                        <Center>
                            <VStack>
                                <Center w="30px" h="30px" mt="10px" borderRadius="50%" border="none" bgColor="green.300" color="whitesmoke" fontWeight="bold">
                                    2
                                </Center>
                                <Icon my="30px" as={TbListSearch} w="70px" h="70px" />
                                <Heading fontSize="20px" textAlign={'center'}>
                                    {t('process_sequence_2')}
                                </Heading>
                            </VStack>
                        </Center>
                    </GridItem>

                    <GridItem border="1px solid rgba(0, 0, 0, 0.3)">
                        <Center>
                            <VStack>
                                <Center w="30px" h="30px" mt="10px" borderRadius="50%" border="none" bgColor="green.300" color="whitesmoke" fontWeight="bold">
                                    3
                                </Center>
                                <Icon my="30px" as={BsFolderSymlink} w="70px" h="70px" />
                                <Heading fontSize="20px" textAlign={'center'}>
                                    {t('process_sequence_3')}
                                </Heading>
                            </VStack>
                        </Center>
                    </GridItem>

                    <GridItem border="1px solid rgba(0, 0, 0, 0.3)">
                        <Center>
                            <VStack>
                                <Center w="30px" h="30px" mt="10px" borderRadius="50%" border="none" bgColor="green.300" color="whitesmoke" fontWeight="bold">
                                    4
                                </Center>
                                <Icon my="30px" as={FaTools} w="70px" h="70px" />
                                <Heading fontSize="20px" textAlign={'center'}>
                                    {t('process_sequence_4')}
                                </Heading>
                            </VStack>
                        </Center>
                    </GridItem>

                    <GridItem border="1px solid rgba(0, 0, 0, 0.3)">
                        <Center>
                            <VStack>
                                <Center w="30px" h="30px" mt="10px" borderRadius="50%" border="none" bgColor="green.300" color="whitesmoke" fontWeight="bold">
                                    5
                                </Center>
                                <Icon my="30px" as={LuEraser} w="70px" h="70px" />
                                <Heading fontSize="20px" textAlign={'center'}>
                                    {t('process_sequence_5')}
                                </Heading>
                            </VStack>
                        </Center>
                    </GridItem>

                    <GridItem border="1px solid rgba(0, 0, 0, 0.3)">
                        <Center>
                            <VStack>
                                <Center w="30px" h="30px" mt="10px" borderRadius="50%" border="none" bgColor="green.300" color="whitesmoke" fontWeight="bold">
                                    6
                                </Center>
                                <Icon my="30px" as={ImHappy} w="70px" h="70px" />
                                <Heading fontSize="20px" textAlign={'center'}>
                                    {t('process_sequence_6')}
                                </Heading>
                            </VStack>
                        </Center>
                    </GridItem>
                </Grid>
            </VStack>
        </Center>
    );
}
