import Header from "../components/Header"
import styles from "../styles/Contacts.module.css";
export default function Contacts() {    
    return (
        <div className={styles.contactsContainer}>
            <Header />
            <h2>Contacts Page</h2>
            <p>Here you can see your contacts</p>
        </div> 
    );
}