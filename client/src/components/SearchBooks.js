import { useState, useEffect, useContext } from "react";
// import { Link, useSearchParams } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BooksContext } from "./BooksContext";
import { useNavigate } from "react-router-dom";

const SearchBooks = () => {
  const { textValue, setTextValue, setSearchResult, searchResult } =
    useContext(BooksContext);
  const history = useNavigate();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
      "X-RapidAPI-Key": "2385336b51mshac5593ff9c397a4p1698ffjsnb6910d60abef",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(`https://hapi-books.p.rapidapi.com/search/${textValue}`, options)
      .then((response) => response.json())
      .then((data) => setSearchResult(data))
      .catch((err) => console.error(err));
    history("/searchedBooks");
  };
  console.log(searchResult);
  return (
    <SearchDiv>
      <SearchForm onSubmit={handleSubmit}>
        <input
          placeholder="Let's see how we can help you "
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
        <button>Let's Go!</button>
      </SearchForm>
    </SearchDiv>
  );
};
export default SearchBooks;

const SearchDiv = styled.div`
  display: flex;
  align-items: center;
`;
const SearchForm = styled.form`
  display: flex;
`;
