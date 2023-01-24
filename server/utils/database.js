import { Sequelize } from "sequelize";

const sequelize = new Sequelize('login_db', 'root', 'Donotlogin_1271',{
    dialect:'mysql',
    host: 'localhost',
});

export default sequelize;