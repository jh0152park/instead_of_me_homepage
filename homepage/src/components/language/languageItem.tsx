import { MenuItem, Text } from "@chakra-ui/react";

interface ILanguageItem {
    language: string;
    onClick: () => void;
}

export default function languageItem({ language, onClick }: ILanguageItem) {
    return (
        <MenuItem minH="48px" onClick={onClick}>
            <Text fontWeight="bold" color="black">
                {language}
            </Text>
        </MenuItem>
    );
}
