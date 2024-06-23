# Instrucciones

### Comandos y dependencias instalados (npm install)

- npm init -y: Inicia un proyecto Node.js con un archivo package.json predeterminado.
- npm i express axios: Instala los paquetes express y axios en el proyecto Node.js. Express es un marco de trabajo para construir aplicaciones web, mientras que axios es una biblioteca para hacer solicitudes HTTP desde Node.js.
- npm i nodemon -D: Instala nodemon como una dependencia de desarrollo (-D), que reinicia automáticamente el servidor cuando detecta cambios en el código.
- npm i morgan: Instala el middleware morgan, que permite registrar las solicitudes HTTP para propósitos de desarrollo y depuración.
- npm install mongoose: Instala mongoose, una librería que simplifica la comunicación con bases de datos MongoDB desde Node.js usando modelos de datos.
- npm install mongodb: Instala el controlador oficial de MongoDB para Node.js, que proporciona una API para interactuar directamente con MongoDB.
- npm install cookie-parser: Instala cookie-parser, que ayuda a analizar las cookies que llegan en las solicitudes HTTP, útil para manejar la sesión de usuarios.

### ENCRIPTAR UNA CONTRASEÑA Y GENERAR UN TOKEN
- npm i bcryptjs: Instala el paquete bcryptjs, que es una biblioteca para cifrar contraseñas en Node.js de manera segura y eficiente.
- npm install bcrypt: Instala el paquete bcrypt, una alternativa a bcryptjs, también utilizada para el cifrado seguro de contraseñas en Node.js.
- npm i jsonwebtoken: Instala el paquete jsonwebtoken, que facilita la creación y verificación de tokens JWT (JSON Web Tokens) en aplicaciones Node.js.
- npm install dotenv --save: Instala el paquete dotenv y lo guarda como una dependencia en el archivo package.json. dotenv se utiliza para cargar variables de entorno desde un archivo .env en aplicaciones Node.js, lo cual es útil para configuraciones sensibles como claves de API o conexiones a bases de datos.


### MVC
1. Creo los schemas y modelos
2. Defino las rutas
3. Creo las funciones que estan en la carpeta controllers
4. Compruebo los endpoints en Postman

## ENDPOINTS
- Registro (POST): http://localhost:4001/api/register
- Login (POST): http://localhost:4001/api/login?
- Verificar token (GET): http://localhost:4001/api/verify
- Perfil de usuario (GET): http://localhost:4001/api/profile
- Ver proyectos (GET): http://localhost:4001/api/projects
- Obtener detalles del proyecto (GET): http://localhost:4001/api/projects/{id}
- Crear proyecto (POST): http://localhost:4001/api/projects
- Actualizar proyecto (PUT): http://localhost:4001/api/projects/{id}
- Borrar proyecto (DELETE): http://localhost:4001/api/projects/{id}
- Cierre de sesión (POST): http://localhost:4001/api/logout

### VALIDACIONES DE DATOS
https://www.npmjs.com/package/zod
- npm i zod:
   herramienta que ayuda a definir y validar los tipos de datos que la aplicación espera recibir. Se usa para asegurarnos de que los datos tienen el formato correcto antes de procesarlos.

### CORS
- npm i cors: permite que el servidor Express acepte solicitudes desde otros dominios, así se puede establecer una comunicación segura entre frontend y backend en aplicaciones web.
