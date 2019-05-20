import React from 'react';
import { Route } from 'react-router-dom';

import SearchPage from './SearchPage.js';
import MainPage from './MainPage.js';

import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  /*
  1. Call the BooksAPI into the file.
  2. Then call the getAll() method and use then to fetch all the books.
  3. Which then puts them into the books array.
  4. And finally update the state.
  */
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
  }

  /*
  Step 1
  1. To update, we use the .update() method on BooksAPI.
  2. It needs a book and a shelf.
  3. It is in App.js because that's where the state lives.
  4. Use this in the Book component (Book.js).
  */
  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(books => {
        this.setState({ books });
      });
    });
  };

  /*
  Step 3
  0. ...From <select> in Book.js.
  1. Give the contents of MainPage to the state.
  2. Pass moveShelf into MainPage.
  */
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <MainPage books={this.state.books} moveShelf={this.moveShelf} />
          )}
        />

        <Route
          path="/search"
          render={() => (
            <SearchPage moveShelf={this.moveShelf} books={this.state.books} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
