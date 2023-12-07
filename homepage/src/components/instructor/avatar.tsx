import { Box, Image } from "@chakra-ui/react";

interface IProps {
    size: number;
    border: boolean;
    borderColor?: string;
    hover: boolean;
}

export default function Avatar({ size, border, borderColor, hover }: IProps) {
    const chractor =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/emoji/emoji.png?raw=true";

    return (
        <Box
            w={`${size}px`}
            h={`${size}px`}
            borderRadius="50%"
            border={border ? "3px solid" : "non"}
            borderColor={border ? borderColor : "none"}
            _hover={{
                cursor: hover ? "pointer" : "default",
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
    );
}
