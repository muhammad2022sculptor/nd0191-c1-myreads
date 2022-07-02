import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

export default function SearchPage({ title, books, setSelectedShelf }) {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
        <BookShelf
          title={title}
          books={books}
          setSelectedShelf={setSelectedShelf}
        />
      </div>
    </div>
  );
}
