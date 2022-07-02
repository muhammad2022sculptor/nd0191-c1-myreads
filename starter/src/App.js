import "./App.css";
import { useState } from "react";
import BookShelf from "./BookShelf";
import * as BookApi from "./BooksApi";
import SearchPage from "./SearchPage";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  useEffect(() => {
    async () => {
      let res = await BookApi.getAll();
      console.log(res);
    };
  }, []);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage />
      ) : (
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
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
