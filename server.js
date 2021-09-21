const express = require('express')
const path = require('path')
const app = express()


const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json')
const middleware = jsonServer.defaults();

server.use(middleware);
server.use(router);


app.use(express.static(__dirname+ '/dist/front'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/front/index.html'))
})


server.listen(process.env.PORT || 3000);
app.listen(process.env.PORT, '0.0.0.0')
