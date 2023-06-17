import React, { useContext, useState } from "react";

import BookCard from "../components/BookCard";
import { BooksContext } from "../contexts/BooksContext";
import { Link } from "react-router-dom";

function SearchPage() {
  const { books } = useContext(BooksContext);

  const [searchBarData, setSearchBarData] = useState("");

  const searchBarChangeHandler = (event) => {
    setSearchBarData(event.target.value);
  };

  const filteredBooks = books.filter(({ name }) =>
    name.toLowerCase().includes(searchBarData.toLowerCase())
  );

  return (
    <div>
      <Link to="/">To Home Page</Link>
      <div className="books-div">
        <input
          type="text"
          placeholder="Search The Books"
          onChange={(event) => {
            searchBarChangeHandler(event);
          }}
          value={searchBarData}
        />
        <div className="books-list">
          {filteredBooks.map((eachBook) => (
            <BookCard key={eachBook.id} eachBookData={eachBook} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
