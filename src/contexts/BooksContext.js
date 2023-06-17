import { createContext, useState } from "react";
import { booksData } from "../db/books_db";

export const BooksContext = createContext();

function BooksContextProvider({ children }) {
  const [books, setBooks] = useState(booksData);
  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
}

export default BooksContextProvider;
