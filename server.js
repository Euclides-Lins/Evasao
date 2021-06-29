const express = require('express')
const path = require('path')
const app = express()

const port = 8080

app.use(express.static(__dirname+ '/dist/front'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname+ '/dist/front/index.html')
})

app.listen(port, ()=> {
  console.log('Servidor iniciado na porta'+ port);
})
