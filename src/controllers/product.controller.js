import prisma from '../config/db.js'

export const getProducts = async (req,res) => {
    try {
        const products = await prisma.product.findMany()

        return res.status(200).json({
            error: false,
            message: 'Productos obtenidas correctamente',
            data: products
        });
    } catch (error) {
        return res.status(500).json({
            error: true, 
            message: "Error interno del servidor, intentalo mas tarde"
        })
    }
}

export const getProduct = async (req,res) => {
    try {
        const product = await prisma.product.findFirst({
            where: {
                title
            }
        })

        if (!product){
            return res.status(404).json({
                error: true,
                message: "Producto no encontrado o inexistente"
            })
        }
    } catch (error) {
        return res.status(500).json({
            error: true, 
            message: "Error interno del servidor, intentalo mas tarde"
        })
    }
}

export const createProduct = async (req,res) => {
    const {title, description, collection, type, price, frontPage} = req.body

    try {
        const findCollection = await prisma.collection.findFirst({
            where: {
                name: collection
            }
        })

        if (!findCollection){
            return res.status(404).json({
                error: true,
                message: "Coleccion no encontrada o inexistente"
            })
        }

        const findType = await prisma.productType.findFirst({
            where: {
                name: type
            }
        })

        if (!findType){
            return res.status(404).json({
                error: true,
                message: "tipo de producto no encontrado o inexistente"
            })
        }

        const product = await prisma.product.create({
            data: {
                title,
                description,
                collectionId: findCollection.id,
                typeId: findType.id,
                price: parseFloat(price),
                frontPage
            }
        })

        return res.status(201).json({
            error: false,
            message: "Producto creado correctamente",
            data: product
        })
    } catch (error) {
        
    }
}