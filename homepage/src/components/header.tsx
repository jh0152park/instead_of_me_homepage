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
import {
    languageCode,
    languageSelected,
    languageState,
} from "../global/project_common";
import { useLocation, useNavigate } from "react-router-dom";
import { COLOR_PALETTES } from "../Colors";

export default function Header() {
    const logo =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/logo/blackLogo/textLogo2.png?raw=true";

    const { pathname } = useLocation();
    const navigation = useNavigate();
    const { scrollY } = useScroll();
    const [opacity, setOpacity] = useState<boolean>(false);
    const [currentY, setCurrentY] = useState<number>(0);

    const setCurrentLanguage = useSetRecoilState(languageState);
    const setLanguageSelected = useSetRecoilState(languageSelected);

    function changeLanguage(language: languageCode) {
        setCurrentLanguage(language);
    }

    function onLogoClick() {
        setLanguageSelected(true);
        navigation("/");
        // if (pathname === "/home") {
        //     go_to_id("top");
        //     if (currentY === 0) refresh();
        // } else {
        //     navigation("/home");
        //     go_to_id("top");
        // }
    }

    function onCategoryClick(position: string, route: string) {
        if (pathname === "/home") {
            go_to_id(position);
        } else {
            navigation(`/${route}`);
        }
    }

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) setOpacity(true);
        else setOpacity(false);
        setCurrentY(latest);
    });

    return (
        <HStack
            w="100vw"
            h="70px"
            zIndex="99"
            // bgColor={opacity ? "rgba(95, 189, 255, 0.9)" : "rgb(95, 189, 255)"}
            bgColor={"whitesmoke"}
            border="1px solid rgba(0, 0, 0, 0.2)"
            borderLeftColor="none"
            borderRightColor="none"
            borderTopColor="none"
            position="fixed"
            top="0"
            px={{
                base: "10px",
                md: "30px",
                xl: "100px",
            }}
            justifyContent={"space-between"}
            transition="0.5s linear"
        >
            <Box
                minW={{
                    base: "100px",
                    md: "120px",
                    lg: "150px",
                }}
                maxW={{
                    base: "100px",
                    md: "120px",
                    lg: "150px",
                }}
                _hover={{ cursor: "pointer" }}
                onClick={onLogoClick}
            >
                <Image src={logo} objectFit="cover" />
            </Box>
            <HStack
                fontSize={{
                    base: "14px",
                    lg: "20px",
                }}
                fontWeight="bold"
                // color="rgba(255, 255, 255, 0.9)"
                color="black"
                spacing="5"
            >
                <HStack
                    spacing={"5"}
                    display={{
                        base: "none",
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
                            onCategoryClick("top", "home");
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
                            onCategoryClick("business", "business");
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
                            onCategoryClick("process", "process");
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
                            onCategoryClick("contact", "contact_us");
                        }}
                    >
                        Contact us
                    </Text>
                </HStack>
                <Menu isLazy>
                    <MenuButton
                        _hover={{
                            color: "rgba(0, 0, 0, 0.6)",
                            cursor: "pointer",
                            transition: "all 0.2s linear",
                        }}
                    >
                        <Text fontWeight="bold">Language</Text>
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
