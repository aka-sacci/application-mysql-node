const Sequelize = require('sequelize') //estância do sequeliza
const sequelize = new Sequelize('bd_test', 'root', 'mortadela1', {
    host: "localhost",
    dialect: 'mysql'
}) //parametros de 

sequelize.authenticate().then(() => {
    console.log("A conexão foi um sucesso!");
}).catch((error) => {
    console.log("A conexão falhou!: " + error);
}) //função que testa a conexão com o banco

const Usuario = sequelize.define('usuario', {
        nome: {
            type: Sequelize.STRING
        },
        idade: {
            type: Sequelize.INTEGER
        },
        email: {
            type: Sequelize.STRING
        }

}) //imagem do banco armazenado no mysql

Usuario.create({
    nome: "Lucas Sacci",
    idade: 20,
    email: "saccilucas@gmail.com"
})//inserção de usuário

Usuario.sync({force: true});//essa função força o sequelize a recriar a tabela