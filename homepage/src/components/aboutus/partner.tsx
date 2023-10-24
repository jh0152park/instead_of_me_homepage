import { Center, Box, VStack, Heading, Image } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function Partner() {
    const { t } = useTranslation();
    const image = 'https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/icons/partner.png?raw=true';

    return (
        <Center w="100%" h="1000px" position="relative" color="black" bgColor="whitesmoke">
            <VStack>
                <Heading>Instead of me,</Heading>
                <Heading>{t('aboutus_partner_1')}</Heading>
                <Heading>{t('aboutus_partner_2')}</Heading>
                <Box w="600px" h="400px">
                    <Image w="100%" h="100%" objectFit="cover" src={image} />
                </Box>
            </VStack>
        </Center>
    );
}
