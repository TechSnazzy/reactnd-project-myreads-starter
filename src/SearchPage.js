import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

import * as BooksAPI from './BooksAPI';

class SearchPage extends Component {
  state = {
    query: '',
    searchedBooks: []
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.updateSearchedBooks(query);
  }

  /*
  1. Run this method when we update the query above.
  2. If we have a query, we will fetch the books.
  3. And if we don't have a query, then the searchedBooks state will be an empty array.
  4. And the nested if handles the error using the error property if text input results in undefined.
  5. And when it matches, it will use the .map() in the ordered list below.
  */
  updateSearchedBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((searchedBooks) => {
        if (searchedBooks.error) {
          this.setState({ searchedBooks: [] });
        } else {
          this.setState({ searchedBooks: searchedBooks })
        }
      })
    } else {
      this.setState({ searchedBooks: [] });
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">

          <Link
            to="/"
            className="close-search"
          >Close</Link>

          <div className="search-books-input-wrapper">

            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>

        </div>

        <div className="search-books-results">

          <ol className="books-grid">
            {
              this.state.searchedBooks.map(searchedBook => {
                let shelf = "none";

                this.props.books.map(book => (
                  book.id === searchedBook.id ?
                  shelf = book.shelf :
                  ''
                ));

                return (
                  <li key={searchedBook.id}>
                    <Book
                      book={searchedBook}
                      moveShelf={this.props.moveShelf}
                      currentShelf={shelf}
                    />
                  </li>
                )
              })
            }
          </ol>

        </div>
      </div>
    );
  }
}

export default SearchPage;
