import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
const NavBar = () => {
	return (
		<nav className={styles.navbar}>
			<NavLink
				className={({ isActive }) =>
					isActive ? styles.activeLink : styles.navLink
				}
				to='/'
			>
				Home
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					isActive ? styles.activeLink : styles.navLink
				}
				to='/shop'
			>
				Shop
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					isActive ? styles.activeLink : styles.navLink
				}
				to='/cart'
			>
				Cart
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					isActive ? styles.activeLink : styles.navLink
				}
				to='/contacts'
			>
				Contact Us
			</NavLink>
		</nav>
	);
};

export default NavBar;
