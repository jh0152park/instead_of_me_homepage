import { MenuItem, Text } from '@chakra-ui/react';

interface IlanuageItem {
    language: string;
    onClick: () => void;
}

export default function lanuageItem({ language, onClick }: IlanuageItem) {
    return (
        <MenuItem minH="48px" onClick={onClick}>
            <Text fontSize="20px" fontWeight="bold" color="black">
                {language}
            </Text>
        </MenuItem>
    );
}
