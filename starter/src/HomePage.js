import React from "react";
import BookShelf from "./BookShelf";

export default function HomePage({ showSearchPage, setShowSearchPage }) {
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
        <a onClick={() => setShowSearchPage(!showSearchPage)}>Add a book</a>
      </div>
    </div>
  );
}
