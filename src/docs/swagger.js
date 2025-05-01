import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Tienda de Camisas',
            version: '1.0.0',
            description: 'API para la gestión de usuarios y pedidos',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor de desarrollo',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        }
    },
    apis: ['./src/docs/api.swagger.js'], // Solo usamos el archivo combinado
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;