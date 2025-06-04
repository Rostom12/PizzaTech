import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const list = async (req, res, next) => {
    try {
        const pizzas = await prisma.pizza.findMany({
            orderBy: { createdAt: 'desc' },
        })
        res.json(pizzas)
    } catch (e) {
        next(e)
    }
}

export const getById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        const pizza = await prisma.pizza.findUnique({ where: { id } })
        if (!pizza) {
            const err = new Error('Pizza non trouvée')
            err.status = 404
            throw err
        }
        res.json(pizza)
    } catch (e) {
        next(e)
    }
}

export const create = async (req, res, next) => {
    try {
        const { name, description, price } = req.body
        const newPizza = await prisma.pizza.create({
            data: {
                name,
                description,
                price: parseFloat(price),
            },
        })
        res.status(201).json(newPizza)
    } catch (e) {
        next(e)
    }
}

export const update = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        const { name, description, price } = req.body
        const updatedPizza = await prisma.pizza.update({
            where: { id },
            data: {
                name,
                description,
                price: parseFloat(price),
            },
        })
        res.json(updatedPizza)
    } catch (e) {
        next(e)
    }
}

export const remove = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        await prisma.pizza.delete({ where: { id } })
        res.status(204).end()
    } catch (e) {
        next(e)
    }
}
