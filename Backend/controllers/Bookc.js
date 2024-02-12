const express =require('express')
const book=require('../models/bookmodel')
const getallbooks=async(req,res) => {
 try{
const books= await book.find({})
res.status(200).json({
    count:books.length,
    data:books
}) 
}
catch(error){
 res.send("Error").json({msg:"error"});
 }
}

const createabook=async(req,res)=>{
try{
const books=await book.create(req.body)
res.status(200).json({books})
}
catch(error){
    res.status(500).json({error})
}
}

const getsinglebook=async (req,res)=>{
    try{
        const {id:bookid}=req.params
const books = await book.findOne({_id:bookid})
if(books){
res.status(200).json({books})
}else{
    res.status(404).json({msg:"book not found"})
}
    }
    catch(error){
res.status(500).json({msg:"error"})
    }
    }

const editbook = async (req,res) =>{
    try{
const {id:bookid}=req.params
const books=await book.findOneAndUpdate({_id:bookid},req.body,{
    new:true,
    runvalidators:true
})
if(books){
    res.status(200).json({books})
    }else{
        res.status(404).json({msg:"book not found"})
    }
    }
    catch(error){
        res.send(404).json({msg:"error"})
    }
}

   
const deletebook=async (req,res) =>{
    try{
        const {id:bookid}=req.params
        const books=await book.findOneAndDelete({_id:bookid})
if(books){
    res.status(200).json({books})
}
else{
    res.status(404).json({msg:"not found book"})
}
    }
    catch(error){
        res.send(404).json({msg:"error"})
    }
}

module.exports={getallbooks,createabook,getsinglebook,editbook,deletebook};