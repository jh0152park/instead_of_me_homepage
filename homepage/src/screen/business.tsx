import { useRecoilValue } from "recoil";
import Intro from "../components/business/intro";
import IntroBuffer from "../components/business/intro_buffer";
import Service from "../components/business/service";
import TechStack from "../components/business/tech_stack";
import { displayResolution } from "../global/project_common";
import ServiceMobile from "../components/business/service_mobile";

export default function Business() {
    const currentMode = useRecoilValue(displayResolution);

    return (
        <>
            <div id="business">
                <div
                    style={{ height: 70, backgroundColor: "whitesmoke" }}
                ></div>
                <Intro />
                <TechStack />
                {currentMode === "web" ? <Service /> : <ServiceMobile />}
            </div>
        </>
    );
}
