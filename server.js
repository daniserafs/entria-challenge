const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

const connectionString = 'mongodb+srv://danidinha:Meowzinho12@entria-challenge.z5wwi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

MongoClient.connect(connectionString, { useUnifiedTopology: true}).then(client => {
    console.log('Connected to Database')
    const db = client.db('entria-challenge')
    app.use(bodyParser.urlencoded({extended: true}))
    app.get('/', (req, res) => {
        res.sendFile('C:/Users/danye/Projeto/entria-challenge' + '/index.html')
    })
    app.post('/quotes', (req, res) => {
        console.log(req.body)
    })
    app.listen(3000, function(){
        console.log('listening on 3000')
})
}).catch(error => console.log(error))