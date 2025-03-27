import styles from "../styles/ItemCard.module.css"; // Assuming you have a CSS module for styling
import { FaMinusSquare, FaPlusSquare, FaCartArrowDown } from "react-icons/fa";

const ItemCard = () => {
	return (
		<div className={styles.itemCard}>
			<div className={styles.imageContainer}>
                <img src="path/to/image.jpg" alt="Item" className={styles.itemImage} />
            </div>
			<div className={styles.textContainer}>
                <h3 className={styles.itemTitle}>Item Title</h3>
            </div>
			<div className={styles.itemIcons}>
                <FaMinusSquare className={styles.icon} />
                <span className={styles.quantity}>1</span>
                <FaPlusSquare className={styles.icon} />
                <button className={styles.addCartBtn} type="button"><FaCartArrowDown className={styles.icon} /></button>
            </div>
		</div>
	);
};

export default ItemCard;
