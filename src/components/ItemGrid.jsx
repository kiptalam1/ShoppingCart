import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import styles from "../styles/ItemGrid.module.css"; // Assuming you have a CSS module for styling
// import shoeImage from "../assets/shoe.jpg";

const ItemGrid = () => {
	const [items, setItems] = useState(
        localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []
    );
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch("https://fakestoreapi.com/products/");
				if (!response.ok) {
					throw new Error("Network response was not ok" + response.status);
				}
				const data = await response.json();
				console.log(data);
				setItems(data);
			} catch (error) {
				console.error("Error fetching products:", error);
			} finally {
				setLoading(false);
				setError(error);
			}
		};
		fetchProducts();
	}, [error]);

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(items));
    }, [items]);

	if (loading) {
		return <div>Loading...</div>; // Display a loading message
	}

	if (error) {
		return <div>Error: {error}</div>; // Display the error message
	}

	return (
		<div className={styles.itemGrid}>
			{items.map((item) => (
				<ItemCard key={item.id} name={item.title.length > 25 ? item.title.substring(0, 22) + "..." : item.title} url={item.image} />
			))}
		</div>
	);
};

export default ItemGrid;
