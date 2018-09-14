import React, { Component } from 'react';
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
  */
  updateSearchedBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((searchedBooks) => {
        this.setState({ searchedBooks: searchedBooks })
      })
    } else {
      this.setState({ searchedBooks: [] });
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">

          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>

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
              this.state.searchedBooks.map(searchedBook => (
                <li key={searchedBook.id}>
                  <Book
                    book={searchedBook}
                  />
                </li>
              ))
            }
          </ol>

        </div>
      </div>
    );
  }
}

export default SearchPage;
