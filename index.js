console.log('hello')
require('dotenv').config()


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/love',(req,res)=>{
    res.send('i love you')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})