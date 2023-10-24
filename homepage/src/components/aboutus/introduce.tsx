import { Box, Center, Heading, Image } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function Introduce() {
    const { t } = useTranslation();
    const hand_image = 'https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/icons/three_hands.png?raw=true';

    return (
        <Box w="100%" h="1000px" position="relative" color="black" bgColor="whitesmoke">
            <Box pl="200px" pt="200px">
                <Heading fontSize={'28px'}>Instead of me,</Heading>
                <Heading my="20px" fontSize={'28px'}>
                    {t('aboutus_introduce_1')}
                </Heading>
                <Heading fontSize={'28px'}>{t('aboutus_introduce_2')}</Heading>
                <Box w="450px" h="80px" mt="20px">
                    <Image w="100%" h="100%" objectFit="cover" src="https://cdn.icon-icons.com/icons2/2389/PNG/512/samsung_logo_icon_144912.png" />
                </Box>
            </Box>
            <Center w="100%" h="500px" mt="30px">
                <Image w="500px" h="500px" objectFit="cover" src={hand_image} />
            </Center>
        </Box>
    );
}
