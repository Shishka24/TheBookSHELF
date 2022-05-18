import { createContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
export const BooksContext = createContext(null);
export const BooksProvider = ({ children }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [textValue, setTextValue] = useState("");
  return (
    <BooksContext.Provider
      value={{
        searchResult,
        setSearchResult,
        textValue,
        setTextValue,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
