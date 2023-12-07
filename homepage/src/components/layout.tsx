import { Outlet, useLocation, useParams } from "react-router-dom";
import Header from "./header";

export default function Layout() {
    const { pathname } = useLocation();

    return (
        <>
            {pathname === "/" || "/instead_of_me_homepage" ? null : <Header />}
            <Outlet></Outlet>
        </>
    );
}
