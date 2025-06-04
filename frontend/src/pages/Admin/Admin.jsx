import { useEffect, useState } from 'react'
import { createPizza, deletePizza, getPizzas, updatePizza } from '../../api/client'
import styles from './Admin.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function Admin() {
    const [form, setForm] = useState({ name: '', description: '', price: '' })
    const [pizzas, setPizzas] = useState([])
    const [editId, setEditId] = useState(null)

    useEffect(() => {
        getPizzas().then(setPizzas)
    }, [])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (editId) {
            await updatePizza(editId, {
                name: form.name,
                description: form.description,
                price: parseFloat(form.price)
            })
            setEditId(null)
        } else {
            await createPizza({
                name: form.name,
                description: form.description,
                price: parseFloat(form.price)
            })
        }
        setForm({ name: '', description: '', price: '' })
        const refreshed = await getPizzas()
        setPizzas(refreshed)
    }

    const handleEdit = (pizza) => {
        setForm({
            name: pizza.name,
            description: pizza.description,
            price: pizza.price
        })
        setEditId(pizza.id)
    }

    const handleDelete = async (id) => {
        await deletePizza(id)
        const refreshed = await getPizzas()
        setPizzas(refreshed)
    }

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.container}>
                <h1 className={styles.title}>Admin easypizza</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nom de la pizza"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={form.description}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Prix"
                        value={form.price}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">{editId ? 'Modifier' : 'Ajouter'} la pizza</button>
                </form>

                <div className={styles.list}>
                    {pizzas.map((pizza) => (
                        <div key={pizza.id} className={styles.card}>
                            <h2>{pizza.name}</h2>
                            <p>{pizza.description}</p>
                            <span>{pizza.price.toFixed(2)} €</span>
                            <div className={styles.actions}>
                                <button onClick={() => handleEdit(pizza)}>Modifier</button>
                                <button onClick={() => handleDelete(pizza.id)}>Supprimer</button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}
