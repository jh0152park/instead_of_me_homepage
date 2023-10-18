import { Box, HStack, Text, Image } from "@chakra-ui/react";

export default function Header() {
    const logo =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/logo/whiteLogo/textLogo3.png?raw=true";

    return (
        <HStack
            w="100%"
            h="70px"
            bgColor="green.500"
            px="250px"
            justifyContent="space-between"
            position="fixed"
            top="0"
        >
            <Box w="150px">
                <Image src={logo} objectFit="cover" />
            </Box>
            <HStack
                fontSize="20px"
                fontWeight="bold"
                color="rgba(255, 255, 255, 0.9)"
                spacing="5"
            >
                <Text
                    _hover={{
                        color: "rgba(0, 0, 0, 0.6)",
                        cursor: "pointer",
                        transition: "all 0.2s linear",
                    }}
                >
                    About us
                </Text>
                <Text
                    _hover={{
                        color: "rgba(0, 0, 0, 0.6)",
                        cursor: "pointer",
                        transition: "all 0.2s linear",
                    }}
                >
                    Business
                </Text>
                <Text
                    _hover={{
                        color: "rgba(0, 0, 0, 0.6)",
                        cursor: "pointer",
                        transition: "all 0.2s linear",
                    }}
                >
                    Process of production
                </Text>
                <Text
                    _hover={{
                        color: "rgba(0, 0, 0, 0.6)",
                        cursor: "pointer",
                        transition: "all 0.2s linear",
                    }}
                >
                    Contact us
                </Text>
            </HStack>
        </HStack>
    );
}
