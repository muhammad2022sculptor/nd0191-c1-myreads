import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

export default function HomePage() {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf title="Currently Reading" />
          <BookShelf title="Want to Read" />
          <BookShelf title="Read" />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}
