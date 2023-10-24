import { Center, Box, VStack, Heading, Image } from '@chakra-ui/react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';

const BOX = styled(motion.div)`
    width: 1000px;
    height: 200px;
    margin-bottom: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export default function Global() {
    const { t } = useTranslation();
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

    const image = 'https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/icons/earth2.png?raw=true';

    return (
        <Center w="100%" h="1000px" position="relative" color="black" bgColor="whitesmoke">
            <BOX
                style={{
                    scale: scale,
                }}
            >
                <Image w="250px" h="250px" objectFit="cover" src={image} />
                <Box position="absolute" bottom="-80px">
                    <VStack spacing="0">
                        <Heading fontSize="24px">Wherever</Heading>
                        <Heading fontSize="24px">{t('aboutus_global_1')}</Heading>
                        <Heading fontSize="24px">{t('aboutus_global_2')}</Heading>
                    </VStack>
                </Box>
            </BOX>
        </Center>
    );
}
