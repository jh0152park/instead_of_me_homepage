import { MenuItem, Text } from '@chakra-ui/react';

interface IlanguageItem {
    language: string;
    onClick: () => void;
}

export default function languageItem({ language, onClick }: IlanguageItem) {
    return (
        <MenuItem minH="48px" onClick={onClick}>
            <Text fontSize="20px" fontWeight="bold" color="black">
                {language}
            </Text>
        </MenuItem>
    );
}
