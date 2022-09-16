const express = require('express')
const app = express();
app.set('view engine', 'ejs')
// const response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

// app.get('/greeting', (req, res) => {
//     res.send('<h1>Hello Stranger</h1>')
// })

// app.get('/greeting/:name', (req, res) => {
//     res.send(`Hello ${req.params.name}`)
// })

// app.get('/tip/:total/:tipPercentage', (req, res) => {
//     res.send(`${req.params.total * (req.params.tipPercentage/100)}`)
// })

// app.get('/magic/:question', (req, res) => {
//     res.send(response[Math.floor(Math.random() * (response.length - 0) + 0)])
// })

//FIBANOCHI
let totalFibNumbers = []
let currentFibNumbers = [0,1]
let sum = 0

for (let i = 0; i < 30; i++){
    sum = currentFibNumbers[0] + currentFibNumbers[1]
    totalFibNumbers.push(currentFibNumbers[0])
    currentFibNumbers.shift()
    currentFibNumbers.push(sum)
}

app.get('/:number', (req, res) => {
    if(totalFibNumbers.includes(parseInt(req.params.number))){
        res.send('<h1>Very good. It is Fibonacci.</h1>')
    }else{
        res.send('<h1>I can tell this is not a fibonacci number.</h1>')
    }
})


app.listen(3000, () => {
    console.log(`listening`)
})