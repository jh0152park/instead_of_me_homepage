import {
    Box,
    HStack,
    Text,
    Image,
    Menu,
    MenuButton,
    MenuList,
} from "@chakra-ui/react";
import { go_to_id, refresh } from "../util/utils";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import LanguageItem from "./language/languageItem";
import { useSetRecoilState } from "recoil";
import { languageCode, languageState } from "../recoil/atom";

export default function Header() {
    const logo =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/logo/whiteLogo/textLogo3.png?raw=true";

    const { scrollY } = useScroll();
    const [opacity, setOpacity] = useState<boolean>(false);
    const [currentY, setCurrentY] = useState<number>(0);

    const setCurrentLanguage = useSetRecoilState(languageState);

    function changeLanguage(language: languageCode) {
        setCurrentLanguage(language);
    }

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) setOpacity(true);
        else setOpacity(false);
        setCurrentY(latest);
    });

    return (
        <HStack
            w="100%"
            h="70px"
            zIndex="99"
            bgColor={opacity ? "rgba(56, 161, 105, 0.9)" : "rgb(56, 161, 105)"}
            position="fixed"
            top="0"
            px="100px"
            justifyContent={{
                sm: "center",
                md: "space-between",
            }}
            transition="0.5s linear"
        >
            <Box
                minW="150px"
                maxW="150px"
                mt="15px"
                _hover={{ cursor: "pointer" }}
                onClick={() => {
                    go_to_id("top");
                    if (currentY === 0) refresh();
                }}
            >
                <Image src={logo} objectFit="cover" />
            </Box>
            <HStack
                fontSize="20px"
                fontWeight="bold"
                color="rgba(255, 255, 255, 0.9)"
                spacing="5"
                display={{
                    sm: "none",
                    md: "inherit",
                }}
            >
                <Text
                    _hover={{
                        color: "rgba(0, 0, 0, 0.6)",
                        cursor: "pointer",
                        transition: "all 0.2s linear",
                    }}
                    onClick={() => {
                        go_to_id("top");
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
                    onClick={() => {
                        go_to_id("business");
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
                    onClick={() => {
                        go_to_id("process");
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
                    onClick={() => {
                        go_to_id("contact");
                    }}
                >
                    Contact us
                </Text>

                <Menu isLazy>
                    <MenuButton
                        _hover={{
                            color: "rgba(0, 0, 0, 0.6)",
                            cursor: "pointer",
                            transition: "all 0.2s linear",
                        }}
                    >
                        <Text fontSize="20px" fontWeight="bold">
                            Language
                        </Text>
                    </MenuButton>
                    <MenuList backgroundColor={"white"}>
                        <LanguageItem
                            language="English"
                            onClick={() => changeLanguage(languageCode.ENG)}
                        />
                        <LanguageItem
                            language="한국어"
                            onClick={() => changeLanguage(languageCode.KOR)}
                        />
                    </MenuList>
                </Menu>
            </HStack>
        </HStack>
    );
}
