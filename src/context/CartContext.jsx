import { useState, useContext, createContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	// Calculate total price
	const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

	const addToCart = (item) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
			if (existingItem) {
				return prevCart.map((cartItem) =>
					cartItem.id === item.id
						? { ...cartItem, quantity: cartItem.quantity + 1 }
						: cartItem
				);
			} else {
				return [...prevCart, { ...item, quantity: 1 }];
			}
		});
	};

	const incrementQuantity = (id) => {
		setCart((prevCart) =>
			prevCart.map((item) =>
				item.id === id ? { ...item, quantity: item.quantity + 1 } : item
			)
		);
	};

	const decrementQuantity = (id) => {
		setCart((prevCart) =>
			prevCart.map((item) =>
				item.id === id
					? { ...item, quantity: Math.max(1, item.quantity - 1) }
					: item
			)
		);
	};

	return (
		<CartContext.Provider
			value={{ cart, total, addToCart, incrementQuantity, decrementQuantity }}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
