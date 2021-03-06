import React, { Component } from 'react';

class Book extends Component {
  render() {
    let displayedThumbnail = this.props.book.imageLinks
      ? this.props.book.imageLinks.thumbnail
      : '';
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${displayedThumbnail}")`
            }}
          />
          <div className="book-shelf-changer">
            {/*
              Step 2
              0. ...From moveShelf from App.js.
              1. select will need the onChange() method.
              2. onChange() will be used to update the shelf.
              3. Refer to "OnChange event using React JS for drop down" from StackOverflow.
              */}
            <select
              /*
              Step 5
              0. Call the onChange() method when the selection changes.
              */
              onChange={event =>
                this.props.moveShelf(this.props.book, event.target.value)
              }
              value={this.props.currentShelf}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">
          {this.props.book.authors ? this.props.book.authors.join(', ') : ''}
        </div>
      </div>
    );
  }
}

export default Book;
