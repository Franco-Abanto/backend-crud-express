# Backend CRUD con Express.js

Este proyecto es una API RESTful desarrollada con Node.js y Express.js que implementa operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar una base de datos MySQL. Además, utiliza JSON Web Tokens (JWT) para la autenticación y autorización de usuarios.

## Características

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express.js**: Framework web para Node.js que facilita la creación de aplicaciones web y APIs.
- **MySQL**: Sistema de gestión de bases de datos relacional.
- **JWT**: Estándar para la creación de tokens de acceso que permiten la autenticación segura entre el cliente y el servidor.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [MySQL](https://www.mysql.com/) (versión 5.7 o superior)

## Instalación

1. **Clona este repositorio:**

   ```bash
   git clone https://github.com/Franco-Abanto/backend-crud-express.git
   ```

2. **Navega al directorio del proyecto:**

   ```bash
   cd backend-crud-express
   ```

3. **Instala las dependencias:**

   ```bash
   npm install
   ```

4. **Configura la base de datos:**

   - Crea una base de datos en MySQL.
   - Renombra el archivo `.env.example` a `.env` y actualiza las variables de entorno con tus credenciales de MySQL y una clave secreta para JWT.

5. **Ejecuta las migraciones (si las hay):**

   ```bash
   npm run migrate
   ```

6. **Inicia el servidor:**

   ```bash
   npm start
   ```

   El servidor estará disponible en `http://localhost:3000`.

## Endpoints de la API

La API expone los siguientes endpoints:

- `POST /api/register`: Registra un nuevo usuario.
- `POST /api/login`: Autentica un usuario y devuelve un token JWT.
- `GET /api/items`: Obtiene una lista de ítems (requiere autenticación).
- `GET /api/items/:id`: Obtiene un ítem por su ID (requiere autenticación).
- `POST /api/items`: Crea un nuevo ítem (requiere autenticación).
- `PUT /api/items/:id`: Actualiza un ítem existente (requiere autenticación).
- `DELETE /api/items/:id`: Elimina un ítem (requiere autenticación).

## Autenticación

Para acceder a los endpoints protegidos, debes incluir un token JWT válido en los encabezados de tus solicitudes HTTP:

```
Authorization: Bearer <tu_token_jwt>
```

## Contribuciones

Si deseas contribuir a este proyecto:

1. Haz un fork del repositorio.
2. Crea una nueva rama con tu función o corrección: `git checkout -b mi-nueva-funcionalidad`.
3. Realiza tus cambios y haz commit: `git commit -m 'Agregar nueva funcionalidad'`.
4. Envía tus cambios al repositorio remoto: `git push origin mi-nueva-funcionalidad`.
5. Abre una solicitud de pull en GitHub.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
