const Sequelize = require('sequelize')
//conexão com o MYSQL
const sequelize = new Sequelize('bd_node', 'root', 'yourPassword', {
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}