import "./App.css";
import { useState, useEffect } from "react";
import * as BookApi from "./BooksAPI";
import SearchPage from "./SearchPage";
import HomePage from "./HomePage";

function App() {
  const [showSearchPage, setShowSearchPage] = useState(false);

  useEffect(() => {
    const getAll = async () => {
      let res = await BookApi.getAll();
      console.log(res);
    };
    getAll();
  }, []);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage
          showSearchPage={showSearchPage}
          setShowSearchPage={setShowSearchPage}
        />
      ) : (
        <HomePage
          showSearchPage={showSearchPage}
          setShowSearchPage={setShowSearchPage}
        />
      )}
    </div>
  );
}

export default App;
