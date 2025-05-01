# Tienda de Camisas - Backend

Este es el backend para una tienda de camisas desarrollado con Node.js, Express y Prisma.

## 🚀 Características

- API RESTful para gestión de productos y usuarios
- Autenticación con JWT
- Base de datos con Prisma ORM
- Middlewares para validación y seguridad
- Validaciones de datos con express-validator
- Estructura modular y escalable
- Documentación de API con Swagger
- Seguridad mejorada con Helmet y CORS
- Rate limiting para protección contra ataques

## 📋 Prerequisitos

- Node.js (versión 14 o superior)
- npm o yarn
- Base de datos PostgreSQL

## 🔧 Instalación

1. Clonar el repositorio:
```bash
git clone [url-del-repositorio]
cd tienda_camisas-back
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# Configuración de la base de datos
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/tienda_camisas"

# Configuración de JWT
JWT_SECRET="tu-secreto-jwt-aqui"
JWT_EXPIRES_IN="7d"

# Configuración del servidor
PORT=3000
NODE_ENV=development

# Configuración de CORS
CORS_ORIGIN="http://localhost:3000"

# Configuración de Rate Limiting
RATE_LIMIT_WINDOW_MS=900000  # 15 minutos en milisegundos
RATE_LIMIT_MAX_REQUESTS=100  # Máximo de peticiones por ventana
```

4. Inicializar la base de datos:
```bash
npx prisma migrate dev
```

## 🚀 Ejecución

Para iniciar el servidor en modo desarrollo:
```bash
npm run dev
```

Para generar el cliente de Prisma:
```bash
npm run prisma:generate
```

Para abrir Prisma Studio (interfaz visual de la base de datos):
```bash
npm run prisma:studio
```

## 📚 Documentación de la API

La API está documentada usando Swagger/OpenAPI. Para acceder a la documentación:

1. Inicia el servidor:
```bash
npm run dev
```

2. Abre tu navegador y visita:
```
http://localhost:3000/api-docs
```

La documentación incluye:
- Descripción detallada de todos los endpoints
- Esquemas de datos
- Ejemplos de peticiones y respuestas
- Posibilidad de probar los endpoints directamente desde la interfaz

### Endpoints Documentados

#### Autenticación
- `POST /api/auth/register` - Registro de nuevos usuarios
  - Validaciones:
    - name (mínimo 4 caracteres)
    - email (formato válido)
    - password (mínimo 8 caracteres)
    - repeatPassword (igual que password)
  - Respuestas de error:
    ```json
    {
      "ok": false,
      "error": {
        "field": "nombre_del_campo",
        "message": "mensaje de error"
      }
    }
    ```

- `POST /api/auth/login` - Inicio de sesión
  - Validaciones:
    - email (formato válido)
    - password (no vacía)
  - Respuestas de error:
    ```json
    {
      "ok": false,
      "error": {
        "field": "nombre_del_campo",
        "message": "mensaje de error"
      }
    }
    ```

- `POST /api/auth/logout` - Cierre de sesión

## 📁 Estructura del Proyecto

```
src/
├── config/         # Configuraciones del proyecto
├── controllers/    # Controladores de la aplicación
├── docs/          # Documentación de la API
├── middlewares/    # Middlewares personalizados
├── routes/         # Definición de rutas
├── services/       # Lógica de negocio
└── index.js        # Punto de entrada de la aplicación
```

## 🛠️ Tecnologías Utilizadas

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- JWT para autenticación
- Bcrypt para encriptación
- Cookie-parser para manejo de cookies
- Swagger/OpenAPI para documentación
- Helmet para seguridad (aun pensando)
- CORS para manejo de orígenes cruzados (aun no)
- Express Rate Limit para protección contra ataques

## 🔒 Seguridad

El proyecto implementa varias medidas de seguridad:
- Autenticación con JWT
- Encriptación de contraseñas con bcrypt
- Headers de seguridad con Helmet
- Protección contra ataques con Rate Limiting
- Validación de datos de entrada
- Manejo seguro de cookies
- CORS configurado (aun no)

## 📝 Licencia

Este proyecto está bajo la Licencia ISC.