import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './Legal.module.scss'

export default function Legal () {
    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.container}>
                <h1 className={styles.title}>Mentions légales</h1>

                <section>
                    <h2>Éditeur du site</h2>
                    <p>
                        easypizza – 31&nbsp;rue Paul&nbsp;Meurice, 75020&nbsp;Paris
                        <br/>
                        SIRET&nbsp;: 123&nbsp;456&nbsp;789&nbsp;00042
                        <br/>
                        Directeur de la publication&nbsp;: Rostom
                    </p>
                </section>

                <section>
                    <h2>Contact</h2>
                    <p>
                        E-mail&nbsp;: <a href="mailto:contact@easypizza.fr">contact@easypizza.fr</a>
                        <br/>
                        Téléphone&nbsp;: 01&nbsp;23&nbsp;45&nbsp;67&nbsp;89
                    </p>
                </section>

                <section>
                    <h2>Propriété intellectuelle</h2>
                    <p>
                        L’ensemble des éléments du site (textes, images, logos, charte graphique)
                        est protégé par le droit d’auteur et reste la propriété exclusive de
                        easypizza sauf mention contraire.
                    </p>
                </section>

                <section>
                    <h2>Responsabilité</h2>
                    <p>
                        easypizza met tout en œuvre pour fournir des informations exactes,
                        cependant l’éditeur ne saurait être tenu responsable des erreurs ou
                        omissions et d’un usage inapproprié du contenu.
                    </p>
                </section>
            </main>

            <Footer />
        </div>
    )
}
