const express = require('express')
const Contenedor = require('./index')
require('dotenv').config()

const app = express()

app.get('/productos',(_req,res) => {
    file = new Contenedor()
    const data = file.getAll('./data/productos.json')
    res.send({
        productos:data
    })
    
})

app.get('/productoRandom',(_req,res) => {
    file = new Contenedor()
    const data = file.productoRandom('./data/productos.json')
    res.send({
        producto:data
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server ap and running on port ${PORT}`)
})