import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import PropTypes from "prop-types";

export default function HomePage({
  readBooks,
  currentBooks,
  toReadBooks,
  setSelectedShelf,
}) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {currentBooks && (
            <BookShelf
              title="Currently Reading"
              books={currentBooks}
              setSelectedShelf={setSelectedShelf}
            />
          )}
          {toReadBooks && (
            <BookShelf
              title="Want to Read"
              books={toReadBooks}
              setSelectedShelf={setSelectedShelf}
            />
          )}
          {readBooks && (
            <BookShelf
              title="Read"
              books={readBooks}
              setSelectedShelf={setSelectedShelf}
            />
          )}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  readBooks: PropTypes.array.isRequired,
  currentBooks: PropTypes.array.isRequired,
  toReadBooks: PropTypes.array.isRequired,
};
