import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
const CreateBook = () => {
const[title,setTitle]=useState('');
const[Author,setAuthor]=useState('');
const[publishedyear,setPublishedyear]=useState('');
const[loading,setLoading]=useState(false);
const navigate =useNavigate();
const saveHandle=() =>{
const data={
title,
Author,
publishedyear,
};
setLoading(true);
axios.post('http://localhost:3000/books',data).then(() =>{
  console.log(data)
setLoading(false)
navigate('/')
}).catch((error)=>{
  console.error(error.response);
  setLoading(false);
})
}




  return (
    <div>
      <BackButton/>
      <h1 className='text-3xl my-4'>Create a new Book</h1>   
{loading ? <Spinner/>:''}
<div className='flex flex-col border-2 border-sky-400 w- [400px]'>
<div className='my-4'>
<label className='text-xl mr-4 text-gray-500 '>Title   </label>
<input className='border-2 border-gray-500 px-4 py-2 w-[300px]'  type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
</div>



<div className='my-4'>
<label className='text-xl mr-4 text-gray-500'>Author   </label>
<input className='border-2 border-gray-500 px-4 py-2 w-[300px] '  type='text' value={Author} onChange={(e) => setAuthor(e.target.value)}/>
</div>
<div className='my-4'>
<label className='text-xl mr-4 text-gray-500'>publsihed year    </label>
<input className='border-2 border-gray-500 px-4 py-2 w-[300px]' type='text' value={publishedyear} onChange={(e) => setPublishedyear(e.target.value)}/>
</div>
<button className='border-2 border-blue-300' onClick={saveHandle}>SAVE</button>
</div>

    </div>
  )
}

export default CreateBook