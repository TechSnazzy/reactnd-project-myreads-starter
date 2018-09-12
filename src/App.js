import React from 'react';
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage.js';
import MainPage from './MainPage.js';
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  /*
  1. Call the BooksAPI into the file.
  2. Then call the getAll() method and use then to fetch all the books.
  3. Which then puts them into the books array.
  4. And finally update the state.
  */
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  /*
  1. Create this method to update the state.
  */
  moveShelf = (book, shelf) => {
    update(book, shelf)
  }

  render() {
    return (
      <div className="app">
        {/*
          1. Give the contents of MainPage to the state.
          2. Pass moveShelf into MainPage.
          */}
        <MainPage
          books={this.state.books}
          moveShelf={this.moveShelf}
        />
      </div>
    )
  }
}

export default BooksApp
