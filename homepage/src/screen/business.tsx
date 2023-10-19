import Intro from "../components/business/intro";
import IntroBuffer from "../components/business/intro_buffer";
import TechStack from "../components/business/tech_stack";

export default function Business() {
    return (
        <>
            <IntroBuffer />
            <Intro />
            <TechStack />
        </>
    );
}
