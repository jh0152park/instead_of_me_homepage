import { Box, HStack, Text, Image } from "@chakra-ui/react";
import { GoToTop } from "../util/utils";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const logo =
    "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/logo/whiteLogo/textLogo3.png?raw=true";

  const { scrollY } = useScroll();
  const [opacity, setOpacity] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) setOpacity(true);
    else setOpacity(false);
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
          GoToTop(0);
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
            GoToTop(0);
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
