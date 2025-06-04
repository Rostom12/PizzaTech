import request from 'supertest'
import { test, before, after } from 'node:test'
import assert from 'node:assert/strict'
import app from '../src/app.js'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

before(async () => {
    await prisma.pizza.deleteMany()
})

after(async () => {
    await prisma.$disconnect()
})

test('GET /api/pizzas retourne [] vide au départ', async () => {
    const res = await request(app).get('/api/pizzas')
    assert.equal(res.statusCode, 200)
    assert.deepEqual(res.body, [])
})

test('POST /api/pizzas crée une pizza', async () => {
    const res = await request(app)
        .post('/api/pizzas')
        .send({
            name: 'Test Pizza',
            description: 'Une pizza de test',
            price: 10.99
        })

    assert.equal(res.statusCode, 201)
    assert.ok(res.body.id)
})
