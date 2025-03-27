import { useState } from "react";
import Button from "./Button";
import styles from "../styles/SearchBar.module.css"; // Assuming you have a CSS module for styling

const SearchBar = () => {
	const [value, setValue] = useState("");
	return (
		<div className={styles.searchBar}>
			<input
				type='text'
				placeholder='Search...'
				className={styles.searchInput}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button className={styles.searchBtn} type='submit'>Search</button>
		</div>
	);
};

export default SearchBar;
