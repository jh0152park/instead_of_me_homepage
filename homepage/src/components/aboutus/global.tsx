import { Center, Box, VStack, Heading, Image } from "@chakra-ui/react";

export default function Global() {
    const image =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/icons/earth-location-icon.png?raw=true";

    return (
        <Box
            w="100%"
            h="1000px"
            position="relative"
            color="black"
            bgColor="whitesmoke"
        >
            <Box w="800px" h="700px">
                <Image w="100%" h="100%" objectFit="cover" src={image} />
            </Box>
        </Box>
    );
}
