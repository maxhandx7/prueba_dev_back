# Backend - Prueba tecnica para desarrollador iglooLab

Este es el backend de una aplicación de gestión de productos desarrollada con **Node.js**, **Express**, **TypeScript** y **Sequelize**. Proporciona una API RESTful para gestionar productos.

## Requisitos

-Node.js (v16 o superior)
-npm (v8 o superior)
-mysql

## Instalación

1. Abre la consola de comando

2. Crear una carpeta: **mkdir IglooLab**
3. accede a la carpeta: **cd IglooLab**
4. clona el repositorio:
**git clone https://github.com/maxhandx7/prueba_dev_back.git backend**
5. accede al repositorio:
**cd backend**
6. instala las dependencias:
**npm install**
7. configura las variables de entorno para la conexión (el archivo .env):

**DATABASE=nombre_de_la_base_de_datos
USERNAME=tu_usuario
PASSWORD=tu_contraseña
DIALECT=mysql
HOST=localhost
PORT=5000**

8. crea una base de datos en mysql con el nombre que desee y registrelo en el archivo .env

9. ejecuta el servidor
**npx ts-node src/index.ts**

Ahora pasa a clonar el frontend
