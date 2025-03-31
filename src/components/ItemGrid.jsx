import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import styles from "../styles/ItemGrid.module.css";

const ItemGrid = () => {
	const [items, setItems] = useState(() => {
		const storedProducts = localStorage.getItem("products");
		return storedProducts ? JSON.parse(storedProducts) : [];
	});
	const [loading, setLoading] = useState(items.length === 0); // Only show loading if no items exist
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch("https://fakestoreapi.com/products/");
				if (!response.ok) {
					throw new Error(`Network response was not ok: ${response.status}`);
				}
				const data = await response.json();
				setItems(data);
				localStorage.setItem("products", JSON.stringify(data)); // Save to localStorage
			} catch (err) {
				console.error("Error fetching products:", err);
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		// Fetch only if localStorage is empty
		if (items.length === 0) {
			fetchProducts();
		}
	}, []); // Empty dependency array ensures it runs only once

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div className={styles.itemGrid}>
			{items.map((item) => (
				<ItemCard key={item.id} item={item} />
			))}
		</div>
	);
};

export default ItemGrid;
