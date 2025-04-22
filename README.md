# Tienda de Camisas - Backend

Este es el backend para una tienda de camisas desarrollado con Node.js, Express y Prisma.

## 🚀 Características

- API RESTful para gestión de productos y usuarios
- Autenticación con JWT
- Base de datos con Prisma ORM
- Middlewares para validación y seguridad
- Estructura modular y escalable
- Documentación de API con Swagger

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
```
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/tienda_camisas"
JWT_SECRET="tu-secreto-jwt"
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
- `POST /api/auth/login` - Inicio de sesión
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

## 📝 Licencia

Este proyecto está bajo la Licencia ISC. 