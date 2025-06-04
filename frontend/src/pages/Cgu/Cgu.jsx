import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './Cgu.module.scss'

export default function Cgu () {
    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.container}>
                <h1 className={styles.title}>Conditions Générales d’Utilisation</h1>

                <h2>1&nbsp;– Objet</h2>
                <p>
                    Les présentes CGU ont pour objet de définir les conditions d’accès et
                    d’utilisation du site easypizza.
                </p>

                <h2>2&nbsp;– Acceptation des CGU</h2>
                <p>
                    Toute consultation du site implique l’acceptation sans réserve des CGU
                    en vigueur.
                </p>

                <h2>3&nbsp;– Accès au service</h2>
                <p>
                    easypizza s’efforce de maintenir le site accessible 24 h/24 mais
                    pourrait interrompre l’accès pour maintenance ou mise à jour.
                </p>

                <h2>4&nbsp;– Propriété intellectuelle</h2>
                <p>
                    L’ensemble des textes, images et logos sont protégés. Toute
                    reproduction est interdite sans l’autorisation écrite de easypizza.
                </p>

                <h2>5&nbsp;– Données personnelles</h2>
                <p>
                    Les données collectées via le formulaire de contact sont destinées
                    uniquement au traitement de votre demande et ne sont jamais
                    cédées à des tiers.
                </p>
            </main>

            <Footer />
        </div>
    )
}
