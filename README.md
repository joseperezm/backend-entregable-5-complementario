## Cambios Realizados

### 1. Modelo de Persistencia de MongoDB y Mongoose

Se ha agregado el modelo de persistencia de MongoDB y Mongoose al proyecto para facilitar el almacenamiento de datos de manera más robusta.

### 2. Configuración de la Base de Datos

- Se ha creado una base de datos llamada "ecommerce" en Atlas.
- Se han establecido las colecciones "carts", "messages", y "products" con sus respectivos esquemas en MongoDB.

### 3. Reorganización de la Estructura de Carpetas

- Los Managers de FileSystem se han separado de los Managers de MongoDB y se han colocado en una carpeta llamada "dao".
- Se ha creado una carpeta "models" dentro de "dao" para albergar los esquemas de MongoDB.

### 4. Integración de Managers en Carpeta "Dao"

- Todos los Managers, tanto de FileSystem como de MongoDB, ahora residen en la carpeta llamada "Dao" para una gestión más centralizada.

### 5. Actualización de Servicios para Mongoose

- Se han reajustado los servicios para que funcionen con Mongoose en lugar de FileSystem, manteniendo la compatibilidad con ambas tecnologías.

### 6. Implementación de Vista de Chat en Handlebars

- Se ha implementado una nueva vista llamada "chat.handlebars" utilizando Handlebars.
- Los mensajes del chat se almacenan en la colección "messages" en MongoDB, siguiendo el formato {user: correoDelUsuario, message: mensajeDelUsuario}.

### 7. Garantía de Integridad del Proyecto

- Se ha corroborado la integridad del proyecto para asegurar que todas las funcionalidades anteriores sigan operativas.

### Importante

- FileSystem no ha sido eliminado del proyecto y sigue siendo compatible para garantizar la continuidad de las funcionalidades existentes.

### Estructura de Carpetas Actualizada

📦src
 ┣ 📂dao
 ┃ ┣ 📂db
 ┃ ┃ ┣ 📜cartManager.js
 ┃ ┃ ┗ 📜productManager.js
 ┃ ┣ 📂fs
 ┃ ┃ ┣ 📜cartManager-fs.js
 ┃ ┃ ┣ 📜carts.json
 ┃ ┃ ┣ 📜productManager-fs.js
 ┃ ┃ ┗ 📜products.json
 ┃ ┣ 📂models
 ┃ ┃ ┣ 📜carts-mongoose.js
 ┃ ┃ ┣ 📜messages-mongoose.js
 ┃ ┃ ┣ 📜migrar-productos.js
 ┃ ┃ ┗ 📜products-mongoose.js
 ┣ 📂public
 ┃ ┣ 📂css
 ┃ ┃ ┗ 📜style.css
 ┃ ┣ 📂js
 ┃ ┃ ┣ 📜chat.js
 ┃ ┃ ┗ 📜index.js
 ┣ 📂routes
 ┃ ┣ 📜.DS_Store
 ┃ ┣ 📜carts.router.js
 ┃ ┣ 📜products.router.js
 ┃ ┗ 📜views.router.js
 ┣ 📂views
 ┃ ┣ 📂layouts
 ┃ ┃ ┗ 📜main.handlebars
 ┃ ┣ 📜.DS_Store
 ┃ ┣ 📜chat.handlebars
 ┃ ┣ 📜index.handlebars
 ┃ ┗ 📜realtimeproducts.handlebars
 ┗ 📜app.js


## Testeo (Mismo de primera pre-entrega)

### Listar todos los productos
- Método: `GET`
- URL: `http://localhost:8080/api/products`
- Verifica que la solicitud devuelva una lista de todos los productos.

### Obtener un producto por ID
- Método: `GET`
- URL: `http://localhost:8080/api/products/:id` (Reemplaza `:id` con un ID existente)
- Verifica que la solicitud devuelva el producto con el ID especificado.

### Agregar un nuevo producto
- Método: `POST`
- URL: `http://localhost:8080/api/products`
- Cuerpo de la solicitud (en formato JSON) con todos los campos requeridos.
- Verifica que la solicitud devuelva un mensaje indicando que el producto se agregó correctamente.
- Consideraciones de seguridad: No permite crear productos repetidos por código.

### Actualizar un producto por ID
- Método: `PUT`
- URL: `http://localhost:8080/api/products/:id` (Reemplaza `:id` con un ID existente)
- Cuerpo de la solicitud (en formato JSON) con los campos que deseas actualizar.
- Verifica que la solicitud actualice el producto con el ID especificado.

### Eliminar un producto por ID
- Método: `DELETE`
- URL: `http://localhost:8080/api/products/:id` (Reemplaza `:id` con un ID existente)
- Verifica que la solicitud elimine el producto con el ID especificado.

### Crear un nuevo carrito
- Método: `POST`
- URL: `http://localhost:8080/api/carts`
- Verifica que la solicitud cree un nuevo carrito.

### Listar productos en un carrito por ID de carrito
- Método: `GET`
- URL: `http://localhost:8080/api/carts/:cid` (Reemplaza `:cid` con un ID de carrito existente)
- Verifica que la solicitud devuelva los productos en el carrito con el ID de carrito especificado.

### Agregar un producto a un carrito
- Método: `POST`
- URL: `http://localhost:8080/api/carts/:cid/product/:pid` (Reemplaza `:cid` con un ID de carrito y `:pid` con un ID de producto)
- Verifica que la solicitud agregue el producto al carrito especificado y maneje correctamente la lógica para la cantidad de productos.
- Consideraciones de seguridad: No permite agregar productos inexistentes al carrito.

### Eliminar un carrito por ID
- Método: `DELETE`
- URL: `http://localhost:8080/api/carts/:cid` (Reemplaza `:cid` con un ID de carrito existente)
- Verifica que la solicitud elimine el carrito con el ID especificado.

## Eliminar un producto de un carrito
- Método: `DELETE`
- URL: `http://localhost:8080/api/carts/:cid/product/:pid` (Reemplaza `:cid` con un ID de carrito y `:pid` con un ID de producto)
- Verifica que la solicitud elimine el producto del carrito especificado.
