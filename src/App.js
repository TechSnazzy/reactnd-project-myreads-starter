import React from 'react';
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage.js';
import MainPage from './MainPage.js';
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    Books API.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <MainPage />
      </div>
    )
  }
}

export default BooksApp
