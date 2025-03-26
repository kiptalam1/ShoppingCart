import App from "../App";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Contacts from "../pages/Contacts";
import NotFound from "../pages/NotFound";

export const routes = [
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "shop", element: <Shop /> },
			{ path: "cart", element: <Cart /> },
			{ path: "contacts", element: <Contacts /> },
			{ path: "*", element: <NotFound /> },
		],
	},
];
