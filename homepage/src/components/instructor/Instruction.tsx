import {
    Box,
    Heading,
    VStack,
    Image,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
} from "@chakra-ui/react";
import { languageState } from "../../global/project_common";
import { useRecoilValue } from "recoil";
import LANGUAGE from "../../global/language";

export default function Instruction() {
    const chractor =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/emoji/emoji.png?raw=true";
    const currentLanguage = useRecoilValue(languageState);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <VStack mr="50px">
                <Heading>{LANGUAGE[currentLanguage]["환영합니다"]}</Heading>
                <Heading>{LANGUAGE[currentLanguage]["말씀해주세요"]}</Heading>
            </VStack>

            <Box
                w="250px"
                h="250px"
                borderRadius="50%"
                border="3px solid"
                borderColor="teal.500"
                _hover={{
                    cursor: "pointer",
                }}
                onClick={onOpen}
            >
                <Image
                    w="100%"
                    h="100%"
                    src={chractor}
                    objectFit={"cover"}
                    borderRadius="full"
                />
            </Box>

            <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>원하시는 옵션을 선택해 주세요</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack alignItems="flex-start">
                            <Button variant="link">홈페이지 바로가기</Button>
                            <Button variant="link">기술스택 바로가기</Button>
                            <Button variant="link">제작과정 바로가기</Button>
                            <Button variant="link">견적문의 바로가기</Button>
                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
