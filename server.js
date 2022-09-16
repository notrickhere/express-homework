const express = require('express')
const app = express();

const response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/greeting', (req, res) => {
    res.send('<h1>Hello Stranger</h1>')
})

// app.get('/greeting/:name', (req, res) => {
//     res.send(`Hello ${req.params.name}`)
// })

// app.get('/tip/:total/:tipPercentage', (req, res) => {
//     res.send(`${req.params.total * (req.params.tipPercentage/100)}`)
// })

app.get('/magic/:question', (req, res) => {
    res.send(response[Math.floor(Math.random() * (response.length - 0) + 0)])
})

app.listen(3000, () => {
    console.log(`listening`)
})