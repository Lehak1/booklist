import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
const DeleteBook = () => {

const [loading,setLoading] =useState(false);
const navigate=useNavigate();
const {id} =useParams();

const deleteitem=() =>{
  setLoading(true);
axios.delete(`http://localhost:3000/books/${id}`).then(() =>{
  setLoading(false);
  navigate('/')
}).catch((error) =>{
console.log(error)
setLoading(false)
});

}
  return (
    <div>

 <BackButton/> 
    {loading ? <Spinner/> : ''}
    <h3 className='text-2xl'>Are you sure you want to delete this book?</h3>
    <button className='border-2 border-red-500' onClick={deleteitem}>delete</button>
    </div>
  )
}

export default DeleteBook