const express = require('express')
const Contenedor = require('./index')
require('dotenv').config()

const app = express()

app.get('/productos',async (_req,res) => {
    file = new Contenedor()
    const data = await file.getAll('./data/productos.json')
    res.status(200).send({
        productos:data
    })
    
})

app.get('/productoRandom',async (_req,res) => {
    file = new Contenedor()
    const data = await file.productoRandom('./data/productos.json')
    res.status(200).send({
        producto:data
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server ap and running on port ${PORT}`)
})