const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT=process.env.PORT||3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.status(200).send({msg:"hola maquinola"})
});

app.post('/',(req,res)=>{
    const{userName}=req.body;
    res.status(200).send({msg:`Hola ${userName}`})
});


app.listen(PORT,()=>{
    console.log(`Serving on ${PORT}...`)
})