import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import pizzaRoutes from './routes/pizzaRoutes.js'
import { errorHandler } from './middleware/errorHandler.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/pizzas', pizzaRoutes)
app.use(errorHandler)
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenue sur l’API easypizza' })
})

export default app
