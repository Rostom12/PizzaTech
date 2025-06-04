import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.scss'

export default function Header() {
    const location = useLocation()

    return (
        <header className={styles.header}>
            <div className={styles.logo}>🍕 easypizza</div>
            <nav className={styles.nav}>
                <Link to="/" className={location.pathname === '/' ? styles.active : ''}>Accueil</Link>
                <Link to="/menu" className={location.pathname === '/Menu' ? styles.active : ''}>Menu</Link>
                <Link to="/admin" className={location.pathname === '/admin' ? styles.active : ''}>Admin</Link>
            </nav>
        </header>
    )
}