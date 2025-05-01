import prisma from '../config/db.js'

export const getProductType = async (req,res) => {
    try {
        const productTypes = await prisma.productType.findMany()

        return res.status(200).json({
            error: false,
            message: 'Colecciones obtenidas correctamente',
            data: productTypes
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: "Error interno en el servidor, intentalo mas tarde"
        })
    }
}

export const createProductType = async(req,res) => {
    const {name} = req.body

    try {
        const productType = await prisma.productType.create({
            data: {
                name
            }
        })

        return res.status(201).json({
            error: false,
            message: 'tipo de producto agregado correctamente',
            data: productType
        })
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: "Error interno en el servidor, intentalo mas tarde"
        })
    }
}

export const deleteProductType = async (req, res) => {
    const {name} = req.body

    try {
        const findProductType = await prisma.productType.findFirst({
            where: { name }
        })

        if(!findProductType){
            return res.status(404).json({
                error: true,
                message: 'tipo de producto no encontrado'
            })
        }

        const id_productType = findProductType.id

        await prisma.collection.delete({
            where: {
                id: id_productType
            }
        });

        return res.status(200).json({
            error: false,
            message: 'tipo de producto eliminado correctamente',
            data: findProductType
        });
    } catch (error) {
        return res.status(500).json({
            error: error,
            message: "Error interno en el servidor, intentalo mas tarde"
        })
    }
}