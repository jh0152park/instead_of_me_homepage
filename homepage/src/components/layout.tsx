import { Outlet, useLocation, useParams } from "react-router-dom";
import Header from "./header";
import BackButton from "./back_button";

export default function Layout() {
    const { pathname } = useLocation();
    const homepage = [
        "/",
        "/instead_of_me_homepage",
        "/instead_of_me_homepage/",
    ];

    console.log(pathname);

    return (
        <>
            {homepage.includes(pathname) ? null : <Header />}
            <Outlet></Outlet>
            {homepage.includes(pathname) ? null : <BackButton />}
        </>
    );
}
