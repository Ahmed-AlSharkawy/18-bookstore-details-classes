import React, { Component } from 'react'
import Book from '../Book'
import './booklist.scss'
import { bookData } from '../../bookData'

export default class BookList extends Component {
  state = {
    bookList: bookData,
  }

  removeBook = (id) => {
    const filteredBooks = this.state.bookList.filter((book) => book.id !== id)
    this.setState({ bookList: filteredBooks })
  }

  render() {
    const books = this.state.bookList
    return (
      <section className='booklist'>
        {books.map((book) => (
          <Book key={book.id} book={book} removeBook={this.removeBook} />
        ))}
      </section>
    )
  }
}
