import React, { useContext, useState } from "react";
import { NONE, READ, READING, WANT_TO_READ } from "../utils/constants";
import "./BookCard.css";
import { BooksContext } from "../contexts/BooksContext";

function BookCard({ eachBookData: { id, img, name, author, category } }) {
  const { books, setBooks } = useContext(BooksContext);
  const [isOpen, setIsOpen] = useState(false);

  const buttonClickHandler = (id, buttonCategory) => {
    setBooks(
      books.map((eachBook) =>
        eachBook.id === id
          ? { ...eachBook, category: buttonCategory }
          : eachBook
      )
    );
  };

  return (
    <div className="book-card-main">
      <img src={img} alt={name}></img>
      <p className="book-title">{name}</p>
      <p className="book-author">{author}</p>
      <div className="dropdown on-image">
        <button
          className="dropdown"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          ▽
        </button>
        <div
          id="test"
          className="dropdown-menu"
          style={{ display: isOpen ? "block" : "none" }}
        >
          <button className="dropdown-item" disabled={true}>
            Move To
          </button>
          <button
            className="dropdown-item"
            style={{
              backgroundColor: category === READING && "green",
              color: category === READING && "white",
            }}
            onClick={() => {
              buttonClickHandler(id, READING);
            }}
          >
            Currently Reading
          </button>
          <button
            className="dropdown-item"
            style={{
              backgroundColor: category === WANT_TO_READ && "green",
              color: category === WANT_TO_READ && "white",
            }}
            onClick={() => {
              buttonClickHandler(id, WANT_TO_READ);
            }}
          >
            Want To Read
          </button>
          <button
            className="dropdown-item"
            style={{
              backgroundColor: category === READ && "green",
              color: category === READ && "white",
            }}
            onClick={() => {
              buttonClickHandler(id, READ);
            }}
          >
            Read
          </button>
          <button
            className="dropdown-item"
            style={{
              backgroundColor: category === NONE && "green",
              color: category === NONE && "white",
            }}
            onClick={() => {
              buttonClickHandler(id, NONE);
            }}
          >
            None
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
