import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import NotFound from "./components/notfound";
import Home from "./screen/home";
import ContactForm from "./screen/contactForm";
import { useSetRecoilState } from "recoil";
import { displayResolution } from "./global/project_common";
import { useEffect } from "react";

const router = createBrowserRouter([
	{
		path:
			"/" ||
			"https://jh0152park.github.io/instead_of_me_homepage/" ||
			"https://jh0152park.github.io/",
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{
				path: "",
				element: <Home />,
			},
		],
	},
	{
		path: "/contact",
		element: <ContactForm />,
	},
]);

function App() {
	const setDisplayResolution = useSetRecoilState(displayResolution);

	useEffect(() => {
		if (window.innerWidth < 500) {
			setDisplayResolution("mobile");
		} else {
			setDisplayResolution("web");
		}
	}, [window.innerWidth]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
