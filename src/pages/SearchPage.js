import React, { useState } from "react";
import { booksData } from "../db/books_db";

function SearchPage() {
  const [searchBarData, setSearchBarData] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  return (
    <div>
      {filteredBooks.map((eachBook) => (
        <p>{eachBook.name}</p>
      ))}
    </div>
  );
}

export default SearchPage;
