import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BookApi from "./BooksAPI";

export default function SearchPage({ books, setSelectedShelf }) {
  const [search, setSearch] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

  const searchQuery = async () => {
    try {
      let data = await BookApi.search(search, 20);
      if (data.length > 0) {
        let booksFromHomePage = data.filter((dataItem) => {
          return books.find((booksItem) => {
            return dataItem.id === booksItem.id
              ? (dataItem.shelf = booksItem.shelf)
              : false;
          });
        });
        let booksFromSearchPage = data.filter((dataItem) => {
          return !books.find((booksItem) => {
            return dataItem.id === booksItem.id ? dataItem : false;
          });
        });
        setSearchedBooks(booksFromHomePage.concat(booksFromSearchPage));
      } else {
        setSearchedBooks([]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (search !== "") {
      searchQuery();
    } else {
      setSearchedBooks([]);
    }
  }, [search]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooks.length > 0 &&
            search.length > 0 &&
            searchedBooks.map((book) => (
              <Book
                key={book.id}
                book={book}
                setSelectedShelf={setSelectedShelf}
              />
            ))}
        </ol>
      </div>
    </div>
  );
}
