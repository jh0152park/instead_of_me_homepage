import Widget from "./widget";
import { useRecoilValue } from "recoil";
import LANGUAGE from "../../global/language";
import {
    Box,
    Center,
    Spinner,
    Text,
    VStack,
    keyframes,
} from "@chakra-ui/react";
import {
    displayResolution,
    languageState,
    showSample,
} from "../../global/project_common";

import PhoneHeader from "./phone/phoneHeader";
import GreetMessage from "./phone/greetMessage";
import ShowSample from "./phone/showSample";

const appear = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px);
    } to {
        opacity: 1;;
        transform: translateY(0px);
    }
`;

export interface IWidget {
    page: string;
    size: number;
    title: string;
}

export default function Phone({ clicked }: { clicked: boolean }) {
    const appearAnimation = `${appear} 0.2s linear`;
    const isShowSample = useRecoilValue(showSample);
    const currentLanguage = useRecoilValue(languageState);

    const isMobile = useRecoilValue(displayResolution) === "mobile";
    const SCREEN_WIDTH = window.document.documentElement.clientWidth;
    const SCREEN_HEIGHT = window.document.documentElement.clientHeight;

    const widgetSize = isMobile ? 230 : 250;

    const widgets: IWidget[] = [
        {
            page: "home",
            size: widgetSize,
            title: LANGUAGE[currentLanguage]["홈페이지둘러보기"],
        },
        {
            page: "business",
            size: widgetSize,
            title: LANGUAGE[currentLanguage]["기술스택궁금해요"],
        },
        {
            page: "contact_us",
            size: widgetSize,
            title: LANGUAGE[currentLanguage]["문의하고싶어요"],
        },
        {
            page: "homprocesse",
            size: widgetSize,
            title: LANGUAGE[currentLanguage]["제작과정궁금해요"],
        },
        {
            page: "kakao",
            size: widgetSize,
            title: LANGUAGE[currentLanguage]["카카오톡문의"],
        },
        {
            page: "sample",
            size: widgetSize,
            title: LANGUAGE[currentLanguage]["샘플은없나요"],
        },
    ];

    return (
        <VStack
            p="20px"
            w={isMobile ? `${SCREEN_WIDTH * 0.9}px` : "400px"}
            h={isMobile ? `${SCREEN_HEIGHT * 0.9}px` : "700px"}
            bgColor="whitesmoke"
            borderRadius="20px"
            position="absolute"
            right={isMobile ? "none" : "50px"}
            top={isMobile ? `${SCREEN_HEIGHT * 0.05}px` : "none"}
            margin="auto"
            opacity={clicked ? "1" : "0"}
            display={clicked ? "flex" : "none"}
            animation={appearAnimation}
        >
            <PhoneHeader />
            <VStack w="100%" h="100%" overflowY="scroll" pt="40px">
                {!isShowSample ? (
                    <>
                        <GreetMessage />
                        <VStack my="10px" alignItems="flex-start" ml="65px">
                            {widgets.map((widget, index) => (
                                <Widget
                                    key={index}
                                    index={index}
                                    page={widget.page}
                                    size={widget.size}
                                    title={widget.title}
                                />
                            ))}
                        </VStack>{" "}
                    </>
                ) : (
                    <Center w="100%" h="100%">
                        <ShowSample />
                    </Center>
                )}
            </VStack>
        </VStack>
    );
}
