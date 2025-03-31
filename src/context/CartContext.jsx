import { useState, useContext, createContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(() => {
		// Load cart from localStorage when the app starts
		const savedCart = localStorage.getItem("cart");
		return savedCart ? JSON.parse(savedCart) : [];
	});

	// Calculate total price
	const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

	// Save cart to localStorage whenever it changes
	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

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
		setCart(
			(prevCart) =>
				prevCart
					.map((item) =>
						item.id === id
							? { ...item, quantity: Math.max(0, item.quantity - 1) }
							: item
					)
					.filter((item) => item.quantity > 0) // Remove if quantity is 0
		);
	};

	const removeFromCart = (id) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== id));
	};

	const clearCart = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				total,
				addToCart,
				incrementQuantity,
				decrementQuantity,
				removeFromCart,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
