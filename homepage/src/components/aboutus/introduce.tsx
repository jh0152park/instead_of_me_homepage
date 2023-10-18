import { Box, Heading, Image } from "@chakra-ui/react";

export default function Introduce() {
    return (
        <Box
            w="100%"
            h="1000px"
            pl="200px"
            pt="200px"
            position="relative"
            color="black"
            bgColor="whitesmoke"
        >
            <Heading>Instead of me,</Heading>
            <Heading my="20px">
                우리는 글로벌 마켓에서 Smart Device, IoT, 반도체등
            </Heading>
            <Heading>
                다양한 분야에서 1위를 달리는 삼성전자 출신 S/W Engieer
                그룹입니다.
            </Heading>
            <Box w="450px" h="80px" mt="20px">
                <Image
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    src="https://cdn.icon-icons.com/icons2/2389/PNG/512/samsung_logo_icon_144912.png"
                />
            </Box>
        </Box>
    );
}
