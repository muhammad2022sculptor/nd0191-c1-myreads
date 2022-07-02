import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import * as BookApi from "./BooksAPI";
import SearchPage from "./SearchPage";
import HomePage from "./HomePage";

function App() {
  useEffect(() => {
    const getAll = async () => {
      let res = await BookApi.getAll();
      console.log(res);
    };
    getAll();
  }, []);

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
