import { useContext } from "react";
import { BooksContext } from "./components/BooksContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchResults = () => {
  const { searchResult } = useContext(BooksContext);
  const history = useNavigate();
  function handleClick(id) {
    history(`/book/${id}`);
  }
  console.log(searchResult);
  return (
    <>
      <H1>That's what you was looking for ?</H1>
      <ListContainer>
        {searchResult.length > 0 &&
          searchResult.map((e) => (
            <div key={e.book_id} onClick={() => handleClick(e.book_id)}>
              <ImgBook src={e.cover} alt={e.book_id} />
              <Title>{e.name}</Title>
            </div>
          ))}
      </ListContainer>
    </>
  );
};
export default SearchResults;
const ListContainer = styled.div`
  position: relative;
  margin-left: 250px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 27px;
  position: relative;
  display: flex;
  color: black;
  font-family: "Cormorant", serif;
  margin-bottom: 20px;
`;
const H1 = styled.h1`
  position: relative;
  font-family: "Cormorant", serif;
  justify-content: center;
  display: flex;
  font-size: 55px;
  color: grey;
  margin-bottom: 3%;
`;
const ImgBook = styled.img`
  /* width: 150px; */
  /* filter: blur(0); */
`;
