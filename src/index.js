const express = require('express');
const app  = express();
const path = require('path');
//Settings
    //Creación de la variable "puerto" con su valor
app.set('puerto', 80);
    //selección de motor de plantilla ejs
app.set('view engine','ejs');
    //Configuración de ubicación de la carpeta views
app.set('views',path.join(__dirname,'views'));

//Midlewares

//Routes
app.get('/',(req,res)=>{
    res.render('index')
})
//Static files

//Servidor Escucha
app.listen(app.get('puerto'),()=>{
    console.log('Bienvenido');
});