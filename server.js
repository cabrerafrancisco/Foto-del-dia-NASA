const express = require('express');
const { request } = require('http');
const path = require("path");
const app = express()
const PORT = 3001;



app.use(express.static(path.join(__dirname, "")));
/*linkeados en html como css o js o imagen ... */

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.listen(PORT , function(){
    console.log(`server iniciado en el puerto ${PORT}...`)
})