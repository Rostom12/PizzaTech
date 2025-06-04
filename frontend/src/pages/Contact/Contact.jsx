import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './Contact.module.scss'

export default function Contact () {
    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.container}>
                <h1 className={styles.title}>Nous contacter</h1>

                <p>
                    Pour toute question, réservation ou demande particulière, vous pouvez
                    nous joindre&nbsp;:
                </p>

                <ul className={styles.list}>
                    <li>
                        <strong>Email&nbsp;:</strong>{' '}
                        <a href="mailto:contact@easypizza.fr">contact@easypizza.fr</a>
                    </li>
                    <li>
                        <strong>Téléphone&nbsp;:</strong> 01&nbsp;23&nbsp;45&nbsp;67&nbsp;89
                    </li>
                    <li>
                        <strong>Adresse&nbsp;:</strong> 31&nbsp;rue Paul&nbsp;Meurice,
                        75020&nbsp;Paris
                    </li>
                </ul>
            </main>

            <Footer />
        </div>
    )
}
