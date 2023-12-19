import { IoIosClose } from "react-icons/io";
import { Center, HStack, Icon, Text } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { phoneState, showSample } from "../../../global/project_common";

export default function PhoneHeader() {
    const setPhoneState = useSetRecoilState(phoneState);
    const setShowSample = useSetRecoilState(showSample);

    function onCloseButtonClicked() {
        setPhoneState((prev) => !prev);
        setTimeout(() => {
            setShowSample(false);
        }, 200);
    }

    return (
        <HStack w="100%" justifyContent="space-between">
            <Text fontWeight="bold">Instead of me, 야 해줘</Text>
            <Center
                w="25px"
                h="25px"
                borderRadius="50%"
                _hover={{
                    cursor: "pointer",
                    bgColor: "#CBD5E0",
                }}
                transition="all 0.2s linear"
                onClick={onCloseButtonClicked}
            >
                <Icon as={IoIosClose} w="100%" h="100%" />
            </Center>
        </HStack>
    );
}
