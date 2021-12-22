const express = require('express');
const path = require('path');
const ctrl = require('./controller')
const app = express();

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/css', (req, res)=>{
    res.sendFile(path.join(__dirname, '../style.css'))
})

app.get('/cssreset', (req, res)=>{
    res.sendFile(path.join(__dirname, '../reset.css'))
})

app.get('/js', (req, res)=>{
    res.sendFile(path.join(__dirname, '../main.js'))
})


const port = process.env.PORT || 4005

app.listen(port, ()=>{console.log(`Listenting on port ${port}`)})