import { useCart } from "../context/CartContext.jsx";
import styles from "../styles/Cart.module.css";
import Header from "../components/Header.jsx";
import { FaMinusSquare, FaPlusSquare, FaTrash } from "react-icons/fa";
import Itemstyles from "../styles/ItemCard.module.css";

export default function Cart() {
	const {
		cart,
		total,
		removeFromCart,
		incrementQuantity,
		decrementQuantity,
		clearCart,
	} = useCart();

	return (
		<div className={styles.cartContainer}>
			<Header />
			<div className={styles.cartContent}>
				{cart.length === 0 ? (
					<h3>Your cart is empty</h3>
				) : (
					<>
						{cart.map((item) => (
							<div key={item.id} className={Itemstyles.itemCard}>
								<div className={Itemstyles.imageContainer}>
									<img
										src={item.image}
										alt={item.title || "Item"}
										className={Itemstyles.itemImage}
									/>
								</div>
								<div className={Itemstyles.textContainer}>
									<h3 className={Itemstyles.itemTitle}>
										{item.title?.length > 25
											? item.title.substring(0, 22) + "..."
											: item.title}
									</h3>
									<div className={Itemstyles.itemDetails}>
										<span className={Itemstyles.itemPrice}>
											$ {item.price?.toFixed(2)}
										</span>
										<span className={Itemstyles.itemIcon}>&#9900;</span>
										<span className={Itemstyles.itemRating}>
											{item.rating?.rate ?? "N/A"}
										</span>
									</div>
								</div>
								<div className={Itemstyles.itemIcons}>
									<FaMinusSquare
										className={Itemstyles.icon}
										onClick={() => decrementQuantity(item.id)}
									/>
									<span className={Itemstyles.quantity}>{item.quantity}</span>
									<FaPlusSquare
										className={Itemstyles.icon}
										onClick={() => incrementQuantity(item.id)}
									/>
									<FaTrash
										className={Itemstyles.icon}
										onClick={() => removeFromCart(item.id)}
									/>
								</div>
							</div>
						))}
					</>
				)}
			</div>
			<div className={styles.quantity}>
				<h3>Total: $ {total?.toFixed(2) ?? "0.00"}</h3>
				<button className={Itemstyles.clearCart} onClick={clearCart}>
					Clear Cart
				</button>
			</div>
		</div>
	);
}
