import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import styles from "./styles/App.module.css";
function App() {
	return (
		<div>
			<main className={styles.mainContent}>
				<Outlet />
			</main>
		</div>
	);
}

export default App;
