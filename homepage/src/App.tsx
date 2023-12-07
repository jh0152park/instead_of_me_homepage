import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import NotFound from "./components/notfound";
import Home from "./screen/home";
import ContactForm from "./screen/contactForm";
import { useSetRecoilState } from "recoil";
import { displayResolution } from "./global/project_common";
import { useEffect } from "react";
import Instructor from "./screen/instructor";
import Business from "./screen/business";
import Process from "./screen/process";
import ContactUS from "./screen/contactus";

// ,
// 	"homepage": "https://jh0152park.github.io/instead_of_me_homepage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Instructor />,
            },
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "business",
                element: <Business />,
            },
            {
                path: "process",
                element: <Process />,
            },
            {
                path: "contact_us",
                element: <ContactUS />,
            },
            {
                path: "contact",
                element: <ContactForm />,
            },
        ],
    },
    // {
    // 	path: "/instead_of_me_homepage",
    // 	element: <Layout />,
    // 	errorElement: <NotFound />,
    // 	children: [
    // 		{
    // 			path: "",
    // 			element: <Home />,
    // 		},
    // 	],
    // },
    // {
    // 	path: "/contact",
    // 	element: <ContactForm />,
    // },
]);

function App() {
    const setDisplayResolution = useSetRecoilState(displayResolution);

    useEffect(() => {
        // console.log(window.innerWidth);
        // console.log(document.documentElement.clientWidth);
        if (document.documentElement.clientWidth < 500) {
            setDisplayResolution("mobile");
        } else {
            setDisplayResolution("web");
        }
    }, []);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
