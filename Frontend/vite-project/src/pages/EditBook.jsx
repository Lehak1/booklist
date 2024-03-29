import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
const EditBook = () => {

  const [title,setTitle] = useState('');
  const [Author,setAuthor]=useState('');
  const [publishedyear,setPublishedyear] =useState('');
  const[loading,setLoading]=useState('');
  const navigate=useNavigate();
  const {id} = useParams();
  
useEffect(() =>{
  setLoading(true);
axios.get(`http://localhost:3000/books/${id}`).then((response) => {
  setTitle(response.data.title);
  setAuthor(response.data.Author);
  setPublishedyear(response.data.publishedyear);
  setLoading(false);
}
).catch((error) => {
  console.log("error");
  setLoading(false);
});
},[id]);

const handleeditbook =() =>{
  const data={
title,
  Author,
publishedyear,
  };
setLoading(true);
axios.patch(`http://localhost:3000/books/${id}`,data).then(() =>{
setLoading(false);
navigate('/');
}).catch((error) =>{
  console.log(error);
  setLoading(false)
});
  
}


  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input
            type='text'
            value={Author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input
            type='number'
            value={publishedyear}
            onChange={(e) => setPublishedyear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleeditbook}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditBook