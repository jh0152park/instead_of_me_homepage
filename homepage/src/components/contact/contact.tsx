import { Center, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const { t } = useTranslation();
    return (
        <Center w="100%" h="1000px" color="black" bgColor="whitesmoke">
            <VStack mt="-200px">
                <Heading fontSize="80px" fontWeight="extrabold" color="green.400">
                    Contact US
                </Heading>

                <Text mt="100px" fontWeight="bold" fontSize="20px">
                    {t('contact_1')}
                </Text>

                <VStack mt="50px">
                    <HStack>
                        <Text fontWeight="bold" color="green.400">
                            Business Email:
                        </Text>
                        <Text>insteadofme.yuhyeon@gmail.com</Text>
                    </HStack>
                    <HStack>
                        <Text fontWeight="bold" color="green.400">
                            {t('contact_2')}
                        </Text>
                        <Text>insteadofme(야,해줘)</Text>
                    </HStack>
                </VStack>
            </VStack>
        </Center>
    );
}
