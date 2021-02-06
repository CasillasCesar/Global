const express = require('express');
const ruta = express.Router();
ruta.get('/',(req,res)=>{
    res.render('inicio.html',{mensaje: 'Este mensaje'});
});
module.exports = ruta;