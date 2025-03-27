import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import styles from "../styles/ItemGrid.module.css"; // Assuming you have a CSS module for styling
import shoeImage from "../assets/shoe.jpg";

const ItemGrid = () => {
	const [items, setItems] = useState([
		{ id: 1, name: "adidas", url: shoeImage },
		{ id: 2, name: "nike", url: shoeImage },
		{ id: 3, name: "puma", url: shoeImage },
		{ id: 4, name: "canvas", url: shoeImage },
		{ id: 5, name: "rats", url: shoeImage },
		{ id: 6, name: "niki", url: shoeImage },

		// Add more items as needed
	]);

	return (
		<div className={styles.itemGrid}>
			{items.map((item) => (
				<ItemCard key={item.id} name={item.name} url={item.url} />
			))}
		</div>
	);
};

export default ItemGrid;
