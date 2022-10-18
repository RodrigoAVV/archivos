const fs = require('fs')
class Contenedor{
    save = async (ruta,product) => {
        try {
            console.log('Iniciando la escritura')
            let data = await fs.promises.readFile(ruta,'utf-8')
            data = JSON.parse(data)
            const id = data[data.length -1].id + 1
            let flag = false
            data.forEach(function (element) {
                if(element.id == id){
                    flag = true
                }
            })
            if(flag === false){
                product.id = id
                data.push(product)
                await fs.promises.writeFile(ruta,JSON.stringify(data,null,4),'utf-8')
            }else{
                console.log('error')
            }
            console.log('Finalizó la escritura')
        } catch (error) {
            console.log('Ocurrio un error',error)
            throw new Error(error.message)
        }
    } 

    getById = async (id) => {
        try {
            let data = await fs.promises.readFile('./data/productos.json','utf-8')
            data = JSON.parse(data)
            let producto = null
            data.forEach(function(item) {
                if (item.id == id) {
                    producto = item
                }
            })
            console.log(producto)
        } catch (error) {
            
        }
    }

    getAll = async (ruta) => {
        try {
            console.log('Iniciando lectura...')
            let data = await fs.promises.readFile(ruta,'utf-8')
            data = JSON.parse(data)
            return data
        } catch (error) {
            console.log('Ocurrio un error',error)
            throw new Error(error.message)
        }
    }

    productoRandom = async (ruta) => {
        try {
            let data = await fs.promises.readFile(ruta,'utf-8')
            data = JSON.parse(data)
            const cant = data.length
            const indice = Math.floor(Math.random() * cant)
            return data[indice]
        } catch (error) {
            console.log('Ocurrio un error',error)
            throw new Error(error.message)
        }
    }
    deleteById = async (id) => {
        try {
            let data = await fs.promises.readFile('./data/productos.json','utf-8')
            let contador = -1;
            data = JSON.parse(data)
            for(let i = 0 ; i < data.length ; i++){
                if(data[i].id == id){
                    contador = i
                    break
                }
            }
            data.splice(contador,1)
            await fs.promises.writeFile('./data/productos.json',JSON.stringify(data,null,4),'utf-8')
        } catch (error) {
            console.log('Ocurrio un error',error)
            throw new Error(error.message)
        }
    }

    deleteAll = async () => {
        try {
            let data = await fs.promises.readFile('./data/productos.json','utf-8')
            let contador = -1;
            data = JSON.parse(data)
            let cant = data.length
            data.splice(0,cant)
            console.log(data)
            await fs.promises.writeFile('./data/productos.json',JSON.stringify(data,null,4),'utf-8')
        } catch (error) {
            console.log('Ocurrio un error',error)
            throw new Error(error.message)
        }
    }

}
module.exports = Contenedor
/*
(async function(){
    file = new Contenedor()
    try {
        const product = {
            id :3,
            titulo: 'pollo asado',
            precio: 7800,
            imagen: 'url4'
        }
        await file.save('./data/productos.json',product)
        await file.getAll('./data/productos.json')
        //await file.getById(1)
        //await file.deleteById(2)
        //await file.getAll('./data/productos.json')
        //await file.deleteAll()
    } catch (error) {
        console.log('error',error)
    }
})()
*/


