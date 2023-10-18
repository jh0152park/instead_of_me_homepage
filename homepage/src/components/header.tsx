import { Box, HStack, Text } from "@chakra-ui/react";

export default function Header() {
    return (
        <HStack
            w="100%"
            h="70px"
            bgColor="green.300"
            px="250px"
            justifyContent="space-between"
            position="fixed"
            top="0"
        >
            <Box id="logo"></Box>
            <HStack
                fontSize="20px"
                fontWeight="bold"
                color="rgba(255, 255, 255, 0.7)"
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
