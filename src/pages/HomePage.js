import React, { useContext } from "react";
import { READ, READING, WANT_TO_READ } from "../utils/constants";
import BookCard from "../components/BookCard";
import "./Pages.css";
import { BooksContext } from "../contexts/BooksContext";
import { Link } from "react-router-dom";

function HomePage() {
  const { books } = useContext(BooksContext);

  const readingBooks = books.filter(({ category }) => category === READING);

  const wantToReadBooks = books.filter(
    ({ category }) => category === WANT_TO_READ
  );

  const readBooks = books.filter(({ category }) => category === READ);

  return (
    <div>
      <Link to="/search">To Search Page</Link>
      <div className="books-div">
        <h2>Currently Reading</h2>
        <div className="books-list">
          {readingBooks.map((eachBook) => (
            <BookCard key={eachBook.id} eachBookData={eachBook} />
          ))}
        </div>
      </div>
      <div className="books-div">
        <h2>Want To Read</h2>
        <div className="books-list">
          {wantToReadBooks.map((eachBook) => (
            <BookCard key={eachBook.id} eachBookData={eachBook} />
          ))}
        </div>
      </div>
      <div className="books-div">
        <h2>Read</h2>
        <div className="books-list">
          {readBooks.map((eachBook) => (
            <BookCard key={eachBook.id} eachBookData={eachBook} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
