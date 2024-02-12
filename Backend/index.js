const express=require('express')
const app=express()
require('dotenv').config()
const cors=require('cors');
const  mongodburl=process.env.mongodburl
const mongoose=require('mongoose')
const routes=require('./routes/book')
app.use(cors());
app.use(express.json())
app.use('/',routes)
app.get('/',(req,res) =>{
res.send("listening")
})
 const port =3000;

mongoose.connect(mongodburl).then(()=>{
console.log('connected to database');
app.listen(port,()=>{
    console.log('listening')
})
}).catch((error) =>{
    console.log('error')
})