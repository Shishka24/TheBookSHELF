import { useContext } from "react";
import styled from "styled-components";
import { BooksContext } from "./BooksContext";
import { useNavigate } from "react-router-dom";

const SearchBooks = () => {
  const { textValue, setTextValue, setSearchResult } = useContext(BooksContext);
  const history = useNavigate();
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "873856791bmsh0e3f21396a8cb64p19bf12jsn1ebee9cc68e4",
      "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
    },
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(`https://hapi-books.p.rapidapi.com/search/${textValue}`, options)
      .then((response) => response.json())
      .then((data) => setSearchResult(data))

      .catch((err) => console.error(err));
    history("/searchedBooks");
    setTextValue("");
  };
  return (
    <SearchDiv>
      <SearchForm onSubmit={handleSubmit}>
        <Input
          placeholder="How we can help you? "
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
        <Button>Let's Go!</Button>
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
const Input = styled.input`
  text-align: center;
`;
const Button = styled.button`
  border-radius: 25px;
`;
