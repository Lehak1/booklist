const mongoose=require('mongoose')
const bookschema =mongoose.Schema({
title:{
    type:String,
    required:true
},
Author:{
type:String,
required:true
},
publishedyear:{
    type:Number,
    required:true
}
},
{
    timestamps:true
}
)
module.exports=mongoose.model('Book',bookschema);