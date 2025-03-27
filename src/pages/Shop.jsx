import styles from '../styles/Shop.module.css';
import Header from '../components/Header.jsx';
import SearchBar from '../components/SearchBar.jsx';
import ItemCard from '../components/ItemCard.jsx';
import ItemGrid from '../components/ItemGrid.jsx';
export default function Shop() {    
    return (
			<div className={styles.shopContainer}>
				<Header />
				<SearchBar />
				<ItemGrid />
			</div>
		);
}