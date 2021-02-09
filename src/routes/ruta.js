const express = require('express');
const ruta = express.Router();
ruta.get('/',(req,res)=>{
    res.render('inicio.html',{titulo: 'Inicio'});
});
ruta.get('/Home',(req,res)=>{
    res.render('home.html',{titulo: 'Home'});
});
module.exports = ruta;