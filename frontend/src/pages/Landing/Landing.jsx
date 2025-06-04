import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './Landing.module.scss'

export default function Landing() {
    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.container}>
                <section className={styles.hero}>
                    <h1><span>easypizza vous souhaite le bienvenu</span> </h1>
                    <p>Meilleur pizzeria </p>
                    <Link className={styles.cta} to="/menu">Voir le menu</Link>
                </section>
            </main>
            <Footer />
        </div>
    )
}