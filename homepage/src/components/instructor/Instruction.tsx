import { Box, Heading, VStack, Image } from "@chakra-ui/react";

export default function Instruction() {
    const chractor =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/emoji/emoji.png?raw=true";

    return (
        <>
            <VStack>
                <Heading>Thank you for being here🥰</Heading>
                <Heading>Let me show you something😉</Heading>
                <Heading>Click Me!</Heading>
            </VStack>

            <VStack>
                <Box
                    w="250px"
                    h="250px"
                    borderRadius="50%"
                    border="3px solid"
                    borderColor="teal.500"
                    _hover={{
                        cursor: "pointer",
                    }}
                >
                    <Image
                        w="100%"
                        h="100%"
                        src={chractor}
                        objectFit={"cover"}
                        borderRadius="full"
                    />
                </Box>
            </VStack>
        </>
    );
}
