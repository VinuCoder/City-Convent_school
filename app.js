const express=require('express');   
const app=express();   
const path=require('path');  
const bodyparser=require('body-parser');  
// const mongoose=require('mongoose');

const port=8000;
app.use("/static",express.static('static'))
app.use(express.urlencoded());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));

app.get('/', (req,res)=>{
    res.status(200).render('index.pug')
})

app.get('/services', (req,res)=>{
    res.render('services.pug')
})

app.get('/contact_us', (req,res)=>{
    res.render('contact.pug')
})

app.get('/about', (req,res)=>{
    res.render('about.pug')
})

app.listen(port,()=>{
    console.log(`The app is serving on the port ${port}`);
});


