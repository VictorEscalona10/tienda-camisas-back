// packages
import express from 'express'
import cookieParser from 'cookie-parser'
import swaggerUi from 'swagger-ui-express';
import cors from 'cors'

import authRouter from './routes/auth.routes.js'
import collectionRouter from './routes/collection.routes.js'
import adminRouter from './routes/authAdmin.routes.js'
import productTypeRouter from './routes/productType.routes.js'

import config from './config/config.js';
import swaggerSpec from './docs/swagger.js';
import limiter from './middlewares/rateLimit.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(cookieParser(config.COOKIE_SECRET))
app.use(limiter) // limitar peticiones de terceros


// routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/auth', authRouter)
app.use('/api/auth/admin', adminRouter)
app.use('/api/collections', collectionRouter)
app.use('/api/productType', productTypeRouter)


// Middleware 404: Rutas no encontradas
app.use((req, res, next) => {
    res.status(404).json({
        error: '404 Not Found',
        message: 'La ruta que estás buscando no existe.',
    });
});

app.use(errorHandler)

// server
app.listen(config.PORT, () =>{
    console.log(`Server on port ${config.PORT}`)
})