import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "../src/routes/routes.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import "./index.css";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<CartProvider>
			<RouterProvider router={router} />
		</CartProvider>
	</StrictMode>
);
