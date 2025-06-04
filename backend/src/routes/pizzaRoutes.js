import { Router } from 'express'
import * as pizzaController from '../controllers/pizzaController.js'

const router = Router()

router.get('/', pizzaController.list)
router.get('/:id', pizzaController.getById)
router.post('/', pizzaController.create)
router.put('/:id', pizzaController.update)
router.delete('/:id', pizzaController.remove)

export default router
