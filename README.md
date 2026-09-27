# MotoPit Backend

API REST de **MotoPit**, servicio (ficticio) de mantenimiento preventivo de motos a domicilio en Bogotá. Permite que un usuario se registre, inicie sesión y gestione sus motos. Cada usuario solo puede ver y modificar sus propias motos.

> Proyecto académico, trabajo final del curso de Desarrollo Web de BIT. La landing del proyecto está en [sacuervo/MotoPit](https://github.com/sacuervo/MotoPit).

## Enlaces de Entrega
[Documento Final](https://drive.google.com/file/d/1KgCn-KrR7nERI1YHIMmX0MoEVtc9nXmy/view?usp=sharing)
[Video Entrega](https://youtu.be/uXgQIfBXcXY)

## Tecnologías

- Node.js y Express
- MongoDB Atlas con Mongoose
- bcryptjs para el hash de contraseñas
- jsonwebtoken (JWT) para la autenticación
- express-validator para validar las peticiones
- dotenv y nodemon

## Instalación

```bash
git clone https://github.com/sacuervo/motopit-backend.git
cd motopit-backend
npm install
```

Copia `.env.example` como `.env` y llena tus valores:

```env
PORT=5000
MONGO_URI=su_cadena_de_conexion
JWT_SECRET=su_clave_secreta
```

## Ejecución

```bash
npm run dev   # desarrollo, con nodemon
npm start     # producción
```

## Endpoints

| Método | Ruta                 | Protegida | Descripción                    |
| ------ | -------------------- | --------- | ------------------------------ |
| POST   | `/api/auth/register` | No        | Registrar usuario              |
| POST   | `/api/auth/login`    | No        | Iniciar sesión y obtener token |
| POST   | `/api/motos`         | Sí        | Crear moto                     |
| GET    | `/api/motos`         | Sí        | Listar mis motos               |
| GET    | `/api/motos/:id`     | Sí        | Ver una moto                   |
| PUT    | `/api/motos/:id`     | Sí        | Actualizar una moto            |
| DELETE | `/api/motos/:id`     | Sí        | Eliminar una moto              |

Las rutas protegidas necesitan la cabecera `Authorization: Bearer <token>`. El token dura 1 hora.

## Pruebas

La colección de Postman está en `postman/MotoPit.postman_collection.json`. Impórtala en Postman y define la variable `baseUrl` como `http://localhost:5000`.

## Estructura

```
├── config/          # Conexión a MongoDB
├── controllers/     # Lógica de cada endpoint
├── middlewares/     # JWT y resultado de validaciones
├── models/          # Esquemas de Mongoose
├── routes/          # Definición de rutas
├── validators/      # Reglas de express-validator
├── postman/         # Colección de pruebas
└── index.js         # Punto de entrada
```
