import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
import { Dialect } from 'sequelize/types';

//conexion a la base de datos mysql
/* se utiliza los datos por defecto o traidos desde el archivo env */
dotenv.config({ override: true });
export const sequelize = new Sequelize({
    database: process.env.DATABASE || 'product_prueba',
    username: process.env.USERNAME || 'root',
    password: process.env.PASSWORD || '',
    dialect: (process.env.DIALECT as Dialect) || 'mysql',
    
    host: process.env.HOST || 'localhost',
    port: parseInt(process.env.PORTMYSQL || '3306', 10),
});