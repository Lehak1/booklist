const express=require('express')
const Router=express.Router();
const book=require('../controllers/Bookc')
Router.route('/books').get(book.getallbooks).post(book.createabook)
Router.route('/books/:id').get(book.getsinglebook).patch(book.editbook).delete(book.deletebook)
module.exports=Router;