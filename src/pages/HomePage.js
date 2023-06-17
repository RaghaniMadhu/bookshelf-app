import React from "react";
import { booksData } from "../db/books_db";
import { READ, READING, WANT_TO_READ } from "../utils/constants";

function HomePage() {
  const readingBooks = booksData.filter(({ category }) => category === READING);

  const wantToReadBooks = booksData.filter(
    ({ category }) => category === WANT_TO_READ
  );

  const readBooks = booksData.filter(({ category }) => category === READ);

  return (
    <div>
      <div>
        <h4>Currently Reading</h4>
        <div>
          {readingBooks.map((eachBook) => (
            <p>{eachBook.name}</p>
          ))}
        </div>
      </div>
      <div>
        <h4>Want To Read</h4>
        <div>
          {wantToReadBooks.map((eachBook) => (
            <p>{eachBook.name}</p>
          ))}
        </div>
      </div>
      <div>
        <h4>Read</h4>
        <div>
          {readBooks.map((eachBook) => (
            <p>{eachBook.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
