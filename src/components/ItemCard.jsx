import { useCart } from "../context/CartContext";
import styles from "../styles/ItemCard.module.css";
import { FaMinusSquare, FaPlusSquare, FaCartArrowDown } from "react-icons/fa";

const ItemCard = ({ item }) => {
	const { cart, addToCart, incrementQuantity, decrementQuantity } = useCart();

	// Find item in cart to get its quantity
	const cartItem = cart.find((cartItem) => cartItem.id === item.id);
	const quantity = cartItem ? cartItem.quantity : 0;

	return (
		<div className={styles.itemCard}>
			<div className={styles.imageContainer}>
				<img src={item.image} alt='Item' className={styles.itemImage} />
			</div>
			<div className={styles.textContainer}>
				<h3 className={styles.itemTitle}>
					{item.title.length > 25
						? item.title.substring(0, 22) + "..."
						: item.title}
				</h3>
				<div className={styles.itemDetails}>
					<span className={styles.itemPrice}>$ {item.price}</span>
					<span className={styles.itemIcon}>&#9900;</span>
					<span className={styles.itemRating}>{item.rating.rate}</span>
				</div>
			</div>
			<div className={styles.itemIcons}>
				<FaMinusSquare
					className={styles.icon}
					onClick={() => decrementQuantity(item.id)}
				/>
				<span className={styles.quantity}>{quantity}</span>
				<FaPlusSquare
					className={styles.icon}
					onClick={() => incrementQuantity(item.id)}
				/>
				<FaCartArrowDown
					className={styles.icon}
					onClick={() => addToCart(item)}
				/>
			</div>
		</div>
	);
};
export default ItemCard;
