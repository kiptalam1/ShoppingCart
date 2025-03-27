import { RiSecurePaymentLine } from "react-icons/ri";
import { RiRefund2Line } from "react-icons/ri";
import { FaTrophy, FaShippingFast } from "react-icons/fa";
import styles from "../styles/Icon.module.css";

const Icon = () => {
	return (
		<div className={styles.iconsContainer}>
			<div>
				<FaTrophy /> Top-rated Shop{" "}
			</div>
			<div>
				<RiSecurePaymentLine /> Secure Payments
			</div>
			<div>
				<RiRefund2Line /> Money-back Guarantee
			</div>
			<div>
				<FaShippingFast /> Fast Shipping
			</div>
		</div>
	);
};

export default Icon;
