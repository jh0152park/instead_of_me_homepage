import { Box, Center, Heading, Icon, Image, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import styled from 'styled-components';

const BOX = styled(motion.div)`
    width: 40px;
    height: 40px;
    margin-top: 30px;
`;

const ArrowAnimation = {
    start: {
        y: -30,
        opacity: 1,
    },
    end: {
        y: 30,
        opacity: 0,
        transition: {
            type: 'spring',
            duration: 3,
            // ease: "linear",
            repeat: Infinity,
            // repeatDelay: 1,
        },
    },
};

export default function Banner() {
    const { t } = useTranslation();

    return (
        <Box w="100%" h="1200px" position="relative" bgColor="whitesmoke">
            <Image
                w="100%"
                h="100%"
                objectFit="cover"
                // src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1470"
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070"
            />
            <Center
                position="absolute"
                top="150px"
                // top={{
                //     sm: "150px",
                //     md: "400px",
                // }}
                left="0"
                right="0"
                mx="auto"
            >
                <VStack color="black">
                    <Heading
                        fontWeight="extrabold"
                        fontSize={{
                            sm: '40px',
                            md: '80px',
                        }}
                    >
                        {t('aboutus_banner_1')}
                    </Heading>
                    <Heading
                        fontWeight="extrabold"
                        fontSize={{
                            sm: '40px',
                            md: '80px',
                        }}
                    >
                        {t('aboutus_banner_2')}
                    </Heading>

                    <BOX variants={ArrowAnimation} initial="start" animate="end">
                        <Icon
                            w={{
                                sm: '20px',
                                md: '40px',
                            }}
                            h={{
                                sm: '20px',
                                md: '40px',
                            }}
                            as={MdKeyboardDoubleArrowDown}
                        />
                    </BOX>
                </VStack>
            </Center>
            <VStack position="absolute" left="200px" bottom="50px" alignItems="flex-start" color="whitesmoke">
                <Heading fontWeight="extrabold" fontSize="50px">
                    {t('aboutus_banner_3')}
                </Heading>
                <Heading fontWeight="extrabold" fontSize="50px">
                    {t('aboutus_banner_4')}
                </Heading>
            </VStack>
        </Box>
    );
}
