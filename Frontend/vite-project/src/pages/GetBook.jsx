import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import  axios  from 'axios';
import BackButton from '../components/BackButton'
const GetBook = () => {
  const {id}=useParams();
  const [book,setBook] =useState({});
const [loading,setLoading]=useState(false);
useEffect(() => {
  setLoading(true)

axios.get(`http://localhost:3000/books/${id}`).then((response) => {
setBook(response.data.books)
setloading(false);
}).catch((error) => {
  console.log(error)
  setLoading(false);
})

},[id])


  return (
    <div>
      <BackButton/>
      {loading ? <Spinner/> : ''}

<div className='flex flex-col border-4 border-blue-700 justify-center '>
<div className='my-4'>
  <span className='text-xl mr-4 text-gray-500'>ID</span>
<span>{book._id}</span>
</div>

<div className='my-4'>
  <span className='text-xl mr-4 text-gray-500'>TITLE</span>
<span>{book.title}</span>
</div>

<div className='my-4'>
  <span className='text-xl mr-4 text-gray-500'>YEAR</span>
<span>{book.publishedyear}</span>
</div>

<div className='my-4'>
  <span className='text-xl mr-4 text-gray-500'>AUTHOR</span>
<span>{book.Author}</span>
</div>
{/* <H1>{book.createdAt}</H1> */}
</div>
    </div>
  )
}

export default GetBook