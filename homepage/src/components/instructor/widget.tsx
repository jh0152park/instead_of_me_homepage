import { Center, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Widget({
    size,
    title,
    page,
}: {
    size: number;
    title: string;
    page: string;
}) {
    const navigation = useNavigate();

    function redirction() {
        if (page === "kakao") {
            window.open(
                "http://pf.kakao.com/_aSGjG",
                "Instead of me",
                "popup=yes"
            );
        } else {
            navigation(page);
        }
    }

    return (
        <Center
            w={`${size}px`}
            h="35px"
            borderRadius="20px"
            bgColor="white"
            border="1px solid rgba(0, 0, 0, 0.3)"
            _hover={{
                cursor: "pointer",
                bgColor: "black",
                color: "white",
            }}
            transition="all 0.1s linear"
            color="black"
            onClick={redirction}
        >
            <Text fontSize="15px" fontWeight="bold">
                {title}
            </Text>
        </Center>
    );
}
