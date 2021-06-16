import React, { Component } from 'react'
import './book.scss'

export default class Book extends Component {
  state = {
    isInfoShown: false,
  }
  render() {
    const { id, img, title, author, info, price } = this.props.book
    const { removeBook } = this.props

    return (
      <article className='book'>
        <div className='img-container'>
          <img src={img} alt={title} />
          <span className='close-btn'>
            <i className='fas fa-window-close' onClick={() => removeBook(id)} />
          </span>
        </div>
        <div className='book-info'>
          <h3>{title}</h3>
          <h4>{author}</h4>
          <h6>{price}</h6>
          <h5>
            وصف الكتاب{' '}
            <i
              className='fas fa-caret-square-down'
              onClick={() =>
                this.setState({ isInfoShown: !this.state.isInfoShown })
              }
            />
          </h5>
          {this.state.isInfoShown &&
            info.map((item, index) => (
              <p key={index}>
                <i className='fas fa-angle-double-left' /> {item}
              </p>
            ))}
        </div>
      </article>
    )
  }
}
