const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const { engine } = require('express-handlebars')
const port = 3030


//CONFIG
    //Importação de Rotas
    const userRoutes = require('./routes/userRoutes')

    //Importação de views do DB

    //Template Engine
    app.set('view engine', 'handlebars')
    app.engine('handlebars', engine({defaultLayout: 'main'}))
    

    //Body Parser
    app.use(bodyParser.urlencoded({   extended: false  }))
    app.use(bodyParser.json())

    //CORS
    app.use(cors())

    
    //ROTAS
    userRoutes(app)

    app.get('/', (req, res) =>  {
        res.render('home.handlebars', {conteudo: "Bem vindos à minha primeira aplicação usando node!"})
    })

//return usando parametros
app.get('/usertest/:nome/:idade/:email', (req, res) => {
    //res.json({ message: "user" })
    res.json({ userName : req.params.nome,
            userIdade : req.params.idade,
            userEmail : req.params.email  
    })

})
//return usando sendFile
app.get("/file", (req, res) => {
    res.sendFile(__dirname + "/html/index.html", {teste: "teste"})
})



app.listen(port, () => console.log('Api rodando na porta ' + port))