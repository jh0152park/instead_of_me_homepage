import { Box, Center, HStack, Heading, Image, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function Service() {
    const { t } = useTranslation();

    const android = 'https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/android_icon.png?raw=true';
    const ios = 'https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/ios_icon.png?raw=true';
    const ts = 'https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/typescript_icon.png?raw=true';
    const react = 'https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/react_icon.png?raw=true';
    const python = 'https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/python_icon.png?raw=true';
    const selenium = 'https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/selenium_icon.png?raw=true';

    return (
        <Center w="100%" h="1000px" color="black" bgColor="whitesmoke">
            <VStack>
                <Heading fontSize="50px" mb="200px">
                    Our Services
                </Heading>
                <HStack gap="150px">
                    <VStack id="app">
                        <HStack>
                            <Image w="150px" h="150px" objectFit="cover" src={android} />
                            <Image w="150px" h="150px" objectFit="cover" src={ios} />
                        </HStack>
                        <Center mt="50px">
                            <VStack>
                                <Heading>Cross Platform Applications</Heading>
                                <Box w="450px" fontWeight="bold">
                                    {t('business_service_1')}
                                </Box>
                            </VStack>
                        </Center>
                    </VStack>

                    <VStack id="web">
                        <HStack>
                            <Image w="150px" h="150px" objectFit="cover" src={ts} />
                            <Image w="150px" h="150px" objectFit="cover" src={react} />
                        </HStack>
                        <Center mt="50px">
                            <VStack>
                                <Heading>Web Site</Heading>
                                <Box w="450px" fontWeight="bold">
                                    {t('business_service_2')}
                                </Box>
                            </VStack>
                        </Center>
                    </VStack>

                    <VStack id="rpa">
                        <HStack>
                            <Image w="150px" h="150px" objectFit="cover" src={python} />
                            <Image w="150px" h="150px" objectFit="cover" src={selenium} />
                        </HStack>
                        <Center mt="50px">
                            <VStack>
                                <Heading>RPA</Heading>
                                <Box w="450px" fontWeight="bold">
                                    {t('business_service_3')}
                                </Box>
                            </VStack>
                        </Center>
                    </VStack>
                </HStack>
            </VStack>
        </Center>
    );
}
