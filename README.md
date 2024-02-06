README - Cambios en el Proyecto Ecommerce

Este README documenta los cambios realizados en el proyecto de ecommerce según las instrucciones proporcionadas.

Cambios Realizados

1. Modelo de Persistencia de MongoDB y Mongoose
Se ha agregado el modelo de persistencia de MongoDB y Mongoose al proyecto para facilitar el almacenamiento de datos de manera más robusta.

2. Configuración de la Base de Datos
Se ha creado una base de datos llamada "ecommerce" en Atlas.
Se han establecido las colecciones "carts", "messages", y "products" con sus respectivos esquemas en MongoDB.
3. Reorganización de la Estructura de Carpetas
Los Managers de FileSystem se han separado de los Managers de MongoDB y se han colocado en una carpeta llamada "dao".
Se ha creado una carpeta "models" dentro de "dao" para albergar los esquemas de MongoDB.
4. Integración de Managers en Carpeta "Dao"
Todos los Managers, tanto de FileSystem como de MongoDB, ahora residen en la carpeta llamada "Dao" para una gestión más centralizada.
5. Actualización de Servicios para Mongoose
Se han reajustado los servicios para que funcionen con Mongoose en lugar de FileSystem, manteniendo la compatibilidad con ambas tecnologías.
6. Implementación de Vista de Chat en Handlebars
Se ha implementado una nueva vista llamada "chat.handlebars" utilizando Handlebars.
Los mensajes del chat se almacenan en la colección "messages" en MongoDB, siguiendo el formato {user: correoDelUsuario, message: mensajeDelUsuario}.
7. Garantía de Integridad del Proyecto
Se ha corroborado la integridad del proyecto para asegurar que todas las funcionalidades anteriores sigan operativas.
Importante
FileSystem no ha sido eliminado del proyecto y sigue siendo compatible para garantizar la continuidad de las funcionalidades existentes.
Estructura de Carpetas Actualizada
