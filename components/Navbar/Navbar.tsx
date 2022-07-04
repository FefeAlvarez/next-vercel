import { ActiveLink } from "./ActiveLink/ActiveLink";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={styles.menuContainer}>
            <ActiveLink text="Home" href="/" />
            <ActiveLink text="About" href="/about" />
            <ActiveLink text="Contact" href="/contact" />
        </nav>
    );
};
