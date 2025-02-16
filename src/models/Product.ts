import {DataTypes, Model} from 'sequelize';
import {sequelize} from '../config/database';


//Modelo
/*
Configuración del modelo de la base de datos
*/

class Product extends Model {
    public id!: number;
    public name!: string;
    public description!: string;
    public price!: number;
}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull:false,
    },
    price:{
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    }
}, {
    
sequelize,
tableName:   'products'

});

export default Product;