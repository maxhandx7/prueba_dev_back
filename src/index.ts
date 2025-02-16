import * as dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes';
import { sequelize } from './config/database';

//Index
/*
aqui se lanza el servidor junto con la migración
*/

const app = express();


dotenv.config({ override: true });

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/api', productRoutes);

// iniciar el servidor
sequelize.sync({ force: true }).then(() => {
    console.log('Tablas sincronizadas');
    app.listen(PORT, () => {
        console.log(`Ejecutandose en puerto ${PORT}`);
    });
}).catch((err) => {
    console.error('Error al sincronizar las tablas:', err);
});