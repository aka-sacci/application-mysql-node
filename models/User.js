const db = require("./db")

const User = db.sequelize.define('users', {
    nome: {
        type: db.Sequelize.STRING
    },
    idade: {
        type: db.Sequelize.INTEGER
    },
    email: {
        type: db.Sequelize.STRING
    }

}) //imagem do banco armazenado no mysql

//User.sync({force: true})
module.exports = User