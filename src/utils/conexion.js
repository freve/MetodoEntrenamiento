import sequelize from 'sequelize';

const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/metodos')


export default sequelize;