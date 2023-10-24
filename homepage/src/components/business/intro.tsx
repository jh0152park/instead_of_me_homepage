import { Box, Heading, Image, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function Intro() {
    const { t } = useTranslation();
    const image =
        "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <Box
            w="100%"
            h="1000px"
            position="relative"
            color="black"
            bgColor="whitesmoke"
        >
            <Image w="100%" h="100%" objectFit="cover" src={image} />

            <VStack
                alignItems={"flex-end"}
                right="100px"
                top="300px"
                position="absolute"
                color="whitesmoke"
            >
                <Heading>Instead of me </Heading>
                <Heading>{t("business_intro_1")}</Heading>
                <Heading>{t("business_intro_2")}</Heading>
                <Heading mt="30px">{t("business_intro_3")}</Heading>
                <Heading>{t("business_intro_4")}</Heading>
            </VStack>
        </Box>
    );
}
