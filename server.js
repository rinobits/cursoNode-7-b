const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
//declare public directory
app.use(express.static(__dirname+'/public'));
//register partials partials
hbs.registerPartials(__dirname + '/views/partials')
//set view engine 
app.set('view engine', 'hbs');
app.get('/', (req, res) =>{
    res.render('index', {
        nombre: 'Michael'
    });
});
app.get('/index', (req, res) =>{
    res.render('index', {
        nombre: 'Michael'
    });
});
app.get('/about', (req,res) =>{
    res.render('about');
});
//up server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});
