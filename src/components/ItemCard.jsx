import styles from "../styles/ItemCard.module.css"; // Assuming you have a CSS module for styling
import { FaMinusSquare, FaPlusSquare, FaCartArrowDown } from "react-icons/fa";

const ItemCard = ({ name, url }) => {
	return (
		<div className={styles.itemCard}>
			<div className={styles.imageContainer}>
                <img src={url} alt="Item" className={styles.itemImage} />
            </div>
			<div className={styles.textContainer}>
                <h3 className={styles.itemTitle}>{name}</h3>
            </div>
			<div className={styles.itemIcons}>
                <FaMinusSquare className={styles.icon} />
                <span className={styles.quantity}>1</span>
                <FaPlusSquare className={styles.icon} />
                <FaCartArrowDown className={styles.icon} />
            </div>
		</div>
	);
};

export default ItemCard;
