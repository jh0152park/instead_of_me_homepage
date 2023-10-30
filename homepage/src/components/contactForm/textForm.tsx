import { HStack, Select, Text, Textarea, VStack } from "@chakra-ui/react";

interface ITextForm {
    select?: boolean;
    title: string;
    engTitle: string;
    value?: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
}

export default function TextForm({
    select = false,
    title,
    engTitle,
    value,
    setValue,
}: ITextForm) {
    function handleChangeForm(
        e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>
    ) {
        setValue?.(e.target.value);
    }

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
                <Select
                    maxWidth={"60%"}
                    onChange={handleChangeForm}
                    value={value}
                >
                    <option value={"individual"}>네(Yes)</option>
                    <option value={"company"}>아니오(No)</option>
                </Select>
            ) : (
                <Textarea maxWidth={"60%"} onChange={handleChangeForm} />
            )}
        </HStack>
    );
}
