import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('inventario','root','toor',{
    host: 'localhost',
    dialect: 'mysql'
});
export default sequelize;