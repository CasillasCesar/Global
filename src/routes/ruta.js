const express = require('express');
const ruta = express.Router();
ruta.get('/',(req,res)=>{
    res.render('inicio.html',{titulo: 'Inicio'});
});
ruta.get('/Home',(req,res)=>{
    res.render('home.html',{titulo: 'Home'});
});
ruta.get('/Mapa',(req,res)=>{
    res.render('mapa.html',{titulo: 'Mapa'});
})
module.exports = ruta;