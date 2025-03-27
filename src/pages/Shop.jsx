import styles from '../styles/Shop.module.css';
import Header from '../components/Header.jsx';
import SearchBar from '../components/SearchBar.jsx';
import ItemCard from '../components/ItemCard.jsx';
import shoeImage from "../assets/shoe.jpg";

export default function Shop() {    
    return (
        <div className={styles.shopContainer}>
            <Header />
            <SearchBar />
            <ItemCard name ="adidas" url={shoeImage}/>
        </div>
    );
}