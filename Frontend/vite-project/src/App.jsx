import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'
import GetBook from './pages/GetBook'


const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
        <Route path='/books/create' element={<CreateBook/>} />
        <Route path='/books/delete/:id' element={<DeleteBook/>}/>
        <Route path='/books/edit/:id' element={<EditBook/>}/> 
        <Route path='/books/get/:id' element={<GetBook/>}/> 

   </Routes>
  )
}

export default App
