import { Box, Center } from "@chakra-ui/react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { displayResolution } from "../global/project_common";

export default function BackButton() {
    const navigate = useNavigate();
    const isMobile = useRecoilValue(displayResolution) === "mobile";

    return (
        <Center
            w="40px"
            h="40px"
            borderRadius="50%"
            bgColor="rgba(255, 255, 255, 0.5)"
            position="fixed"
            bottom={isMobile ? 5 : 10}
            right={isMobile ? 5 : 10}
            zIndex="99"
            border="1px solid rgba(0, 0, 0, 0.3)"
            _hover={{
                cursor: "pointer",
                bgColor: "whitesmoke",
            }}
            transition="all 0.2s linear"
            onClick={() => {
                navigate("/");
            }}
        >
            <IoArrowBack size={25} />
        </Center>
    );
}
