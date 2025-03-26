import  NavBar  from "./NavBar";
import styles from "../styles/Header.module.css";
const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.title}>
				<h1>SHOP</h1>
			</div>
			<NavBar />
			<div className={styles.socials}>
				<i class='devicon-linkedin-plain'></i>

				<i class='devicon-github-original'></i>
			</div>
		</div>
	);
};

export default Header;
