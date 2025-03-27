import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Button from "../components/Button";
export default function Home() {    
    return (
			<div className={styles.homeContainer}>
				<Header />
				<div className={styles.homeAction}>
					<h1>SHOP SMARTER . LIVE BETTER</h1>
					<p>
						Find everything you need at unbeatable prices. Quality products,
						fast shipping and amazing deals - all in one place.
					</p>
					<Button type='button' name='SHOP NOW' />
				</div>
			</div>
		);
}