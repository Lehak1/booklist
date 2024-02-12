import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete, MdOutlineAddBox } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:3000/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className=''>
      <Link to='/books/create'><MdOutlineAddBox className='text-2xl text-blue-800'/>Add new book</Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className='grid grid-cols-3'>
          {books.map((book) => (
            <div key={book._id} className='border-2 border-red-500 rounded-lg px-4 py-2 m-4'>
              <h2>Year Of Publication : {book.publishedyear}</h2>
              <h2>ID: {book._id}</h2>
              <h2>Title: {book.title}</h2>
              <h2>Author: {book.Author}</h2>
              <div className='flex justify-center gap-x-2'>
                <Link to={`/books/get/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;