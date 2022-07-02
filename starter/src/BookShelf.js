import React from "react";
import Book from "./Book";

export default function BookShelf({ title }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <Book />
        </ol>
      </div>
    </div>
  );
}
