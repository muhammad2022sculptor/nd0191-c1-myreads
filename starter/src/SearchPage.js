import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BookApi from "./BooksAPI";

export default function SearchPage({ books, setSelectedShelf }) {
  const [search, setSearch] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

  useEffect(() => {
    async function searchQuery() {
      try {
        if (search !== "") {
          let data = await BookApi.search(search, 30);
          if (data) {
            setSearchedBooks(data);
          }
        } else {
          setSearchedBooks([]);
        }
      } catch (e) {
        console.log(e);
      }
    }
    searchQuery();
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
            search &&
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
