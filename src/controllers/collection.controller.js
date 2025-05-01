import prisma from "../config/db.js";

export const getCollections = async(req, res) => {
    try {
        const collections = await prisma.collection.findMany();

        return res.status(200).json({
            error: false,
            message: 'Colecciones obtenidas correctamente',
            data: collections
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: "Error interno en el servidor, intentalo mas tarde"
        })
    }
}

export const createCollection =  async (req, res) => {
    const {name} = req.body

    try {
        const collection = await prisma.collection.create({
            data: {
                name
            }
        })

        return res.status(201).json({
            error: false,
            message: 'Coleccion creada correctamente',
            data: collection
        })
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: "Error interno en el servidor, intentalo mas tarde"
        })
    }
}

export const deleteCollection = async (req, res) => {
    const {name} = req.body

    try {
        const findCollection = await prisma.collection.findFirst({
            where: { name }
        })

        if(!findCollection){
            return res.status(404).json({
                error: true,
                message: 'Colección no encontrada'
            })
        }

        const id_collection = findCollection.id

        await prisma.collection.delete({
            where: {
                id: id_collection
            }
        });

        return res.status(200).json({
            error: false,
            message: 'Colección eliminada correctamente',
            data: findCollection
        });
    } catch (error) {
        return res.status(500).json({
            error: error,
            message: "Error interno en el servidor, intentalo mas tarde"
        })
    }
}