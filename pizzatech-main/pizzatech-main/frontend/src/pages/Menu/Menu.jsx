import { useEffect, useState } from 'react'
import { getPizzas } from '../../api/client'
import styles from './Menu.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function Menu() {
    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        getPizzas().then(setPizzas)
    }, [])

    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.container}>
                <h1 className={styles.title}>Menu easypizza</h1>
                {pizzas.length === 0 ? (
                    <p className={styles.empty}>Aucune pizza disponible.</p>
                ) : (
                    <div className={styles.list}>
                        {pizzas.map((pizza) => (
                            <div key={pizza.id} className={styles.card}>
                                <h2>{pizza.name}</h2>
                                <p>{pizza.description}</p>
                                <span>{pizza.price.toFixed(2)} €</span>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            <Footer />
        </div>
    )
}
