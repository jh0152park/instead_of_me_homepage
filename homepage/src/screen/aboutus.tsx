import Banner from "../components/aboutus/banner";
import Global from "../components/aboutus/global";
import Introduce from "../components/aboutus/introduce";
import Partner from "../components/aboutus/partner";
import IntroBuffer from "../components/business/intro_buffer";

export default function AboutUs() {
    return (
        <div id="top">
            <Banner />
            <Introduce />
            <Partner />
            <Global />
            <IntroBuffer />
        </div>
    );
}
