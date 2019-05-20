import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Book from './Book';

class MainPage extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books
                    .filter(book => book.shelf === 'currentlyReading')
                    .map(book => (
                      <li key={book.id}>
                        {/*
                            Step 4
                            0. ... from App.js.
                            1. Use this.props to pass it to moveShelf.
                            */}
                        <Book
                          book={book}
                          moveShelf={this.props.moveShelf}
                          currentShelf="currentlyReading"
                        />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {/*
                    1. We have 10 books which were fetched.
                    2. We filter them if the shelf is equal to wantToRead.
                    3. Then on the new array we map through it to create new UI.
                  */}
                  {this.props.books
                    .filter(book => book.shelf === 'wantToRead')
                    .map(book => (
                      <li key={book.id}>
                        <Book
                          book={book}
                          moveShelf={this.props.moveShelf}
                          currentShelf="wantToRead"
                        />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books
                    .filter(book => book.shelf === 'read')
                    .map(book => (
                      <li key={book.id}>
                        <Book
                          book={book}
                          moveShelf={this.props.moveShelf}
                          currentShelf="read"
                        />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
