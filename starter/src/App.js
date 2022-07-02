import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import * as BookApi from "./BooksAPI";
import SearchPage from "./SearchPage";
import HomePage from "./HomePage";

function App() {
  const [allAvaiableBooks, setAllAvailableBooks] = useState();
  const [currentBooks, setCurrentBooks] = useState();
  const [toReadBooks, setToReadBooks] = useState();
  const [readBooks, setReadBooks] = useState();
  const [booksFetched, setBooksFetched] = useState(false);

  // Api call to fetch the books in the database
  const getAll = async () => {
    let res = await BookApi.getAll();
    setAllAvailableBooks(res);
    setToReadBooks(res.filter((book) => book.shelf === "wantToRead"));
    setCurrentBooks(res.filter((book) => book.shelf === "currentlyReading"));
    setReadBooks(res.filter((book) => book.shelf === "read"));
    setBooksFetched(true);
  };

  useEffect(() => {
    if (!booksFetched) {
      getAll();
    }
    console.log(allAvaiableBooks);
    console.log(toReadBooks);
    console.log(currentBooks);
    console.log(readBooks);
  }, [booksFetched]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
