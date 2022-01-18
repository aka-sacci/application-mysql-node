const tbUser = require('../models/User')


const userRoute = (app) => {

    //rota users main
    app.route("/users")
    .get((req, res) => {
        tbUser.findAll({order: [['createdAt', "asc"]]})
        .then((usuarios) => {
            res.render('users.handlebars',   {
                users: usuarios.map(usuarios => usuarios.toJSON())
            })
        });
    })

    //formulário de inserção de usuários
    app.route("/users/insert")
    .get((req, res) => {
        res.render('form.handlebars')
    })

    //formulario para deleção de usuário
    app.route("/users/delete/:id")
    .get((req, res) => {
        var id = req.params.id
        tbUser.destroy(
            {where: {"id": id}}
        ).then(() => res.status(200).redirect('/')
        )
        .catch(() => res.status(400).send("Erro ao excluir o registro! Tente novamente mais tarde!")
        )
        })

    //inserção de usuário
    app.route('/users/insert/action')
    .post((req, res) => {
        tbUser.create({
            nome: req.body.userName,
            idade: req.body.userIdade,
            email: req.body.userEmail
        })
        .then(() => res.status(200).redirect('/')
        )
        .catch(() => res.status(400).send("Erro ao inserir um novo registro! Tente novamente mais tarde!")
        )
        })
}

module.exports = userRoute;