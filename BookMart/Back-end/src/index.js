require('./db/database');
const express=require('express');
const router = require('./router/router');
const path=require('path')
const app=express();
const port=process.env.port||3000;


app.use(express.json())
app.use((req,res,next)=>{

    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin,Authorization,Content-Type");
    res.setHeader("Access-Control-Allow-Methods","GET,PUT,POST,PATCH,DELETE,FETCH");
    next();
})

app.use('/images', express.static(path.join(__dirname, '..', 'images')))
app.use(router)
app.listen(port,()=>{

    console.log('Connected to Port : '+port);
})