import { HStack, Select, Text, Textarea, VStack } from "@chakra-ui/react";

interface ITextForm {
    select?: boolean;
    title: string;
    engTitle: string;
    name: string;
}

export default function TextForm({
    select = false,
    title,
    engTitle,
    name,
}: ITextForm) {
    return (
        <HStack
            alignSelf={"center"}
            minWidth={"70%"}
            justifyContent={"space-between"}
        >
            <VStack alignItems={"flex-start"}>
                <Text
                    color={"black"}
                    fontWeight={"semibold"}
                    minW={"250px"}
                    fontSize={"18px"}
                >
                    {title}
                </Text>
                <Text
                    color={"black"}
                    fontWeight={"semibold"}
                    minW={"250px"}
                    fontSize={"18px"}
                >
                    {engTitle}
                </Text>
            </VStack>

            {select ? (
                <Select maxWidth={"60%"} name={name}>
                    <option value={"개인(individual)"}>네(Yes)</option>
                    <option value={"회사(company)"}>아니오(No)</option>
                </Select>
            ) : (
                <Textarea maxWidth={"60%"} name={name} />
            )}
        </HStack>
    );
}
