// Dados
const proffys = [
    {
        name: "João Augusto",
        avatar:"https://avatars.githubusercontent.com/u/78097760?s=460&u=f62a462f6809df77023113360e2539a3354ae967&v=4",
        whatsapp: "51999426169",
        bio:"Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost:"20", 
        weekday:[0],
        time_from:[720],
        time_to:[1220]
    
    },
    {
        name: "Maura",
        avatar:"https://media-exp1.licdn.com/dms/image/C4E03AQHk3_ppZnV-Gw/profile-displayphoto-shrink_800_800/0/1585774344971?e=1620259200&v=beta&t=KTB0usd82jZyJUq2TcxqLjS99NB7T9ams2nn1RStYuM",
        whatsapp: "51999426169",
        bio:"Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost:"20", 
        weekday:[1],
        time_from:[720],
        time_to:[1220]
    },
    {
        name: "Felipe Pedroso",
        avatar:"https://avatars.githubusercontent.com/u/43517062?s=460&u=8b42976b5d92e115162fa6194759b8ad46e0f395&v=4",
        whatsapp: "51999426169",
        bio:"Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost:"20", 
        weekday:[1],
        time_from:[720],
        time_to:[1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

// Funcionalidades
function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res) {
    const dados = req.query

    console.log(dados)
    // adicionar dados a lista de proffys

    return res.render("give-classes.html", {subjects, weekdays})
}

// Servidor
const express = require('express')
const server = express()

// configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Início e configuração do servidor
server
// Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static('public'))
// rotas de aplicação
.get("/", pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
// start do servidor
.listen(5500)



