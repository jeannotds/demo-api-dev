const express = require('express')
const app = express()
const port = 3005
const message = require('./message')
let developpeur = require('./developpeur')
const bodyParser = require('body-parser')

app
.use(bodyParser.json())

app.get('/dev', (request, response)=>{
    response.status(200)
    const mes = "requete reussie"
    response.json(message.messageRes(mes, developpeur))
})


app.post('/dev', (request, response)=>{
    const id = message.getUniqueId(developpeur)
    const createDevelopper = {...request.body, id}
    developpeur.push(createDevelopper)
    response.json(createDevelopper)
})

app.put('/dev/:id', (request, response)=> {
    const id = parseInt(request.params.id)
    const updateDevelopper = {...request.body, id}
    developpeur = developpeur.map(dev => {
        return dev.id === id ? updateDevelopper: dev
    })
    response.json(developpeur)
})

app.listen(port, ()=>{
    console.log("Le serveur a demarré avec succes")
})