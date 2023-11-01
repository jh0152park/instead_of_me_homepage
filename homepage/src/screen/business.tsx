import Intro from "../components/business/intro";
import IntroBuffer from "../components/business/intro_buffer";
import Service from "../components/business/service";
import TechStack from "../components/business/tech_stack";

export default function Business() {
    return (
        <>
            <IntroBuffer />
            <div id="business">
                <div
                    style={{ height: 70, backgroundColor: "whitesmoke" }}
                ></div>
                <Intro />
                <TechStack />
                <Service />
            </div>
        </>
    );
}
