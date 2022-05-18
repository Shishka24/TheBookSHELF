import { useContext } from "react";
import { BooksContext } from "./components/BooksContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchResults = () => {
  const { searchResult } = useContext(BooksContext);
  console.log(searchResult);
  const history = useNavigate();
  function handleClick(id) {
    history(`/book/${id}`);
  }
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
  margin-left: 250px;
  margin-top: 20px;
  /* justify-content: center; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 27px;
  display: flex;
  color: black;
  font-family: "Cormorant", serif;
  margin-bottom: 20px;
`;
const H1 = styled.h1`
  font-family: "Cormorant", serif;
  background-color: #c4ba9f;
  justify-content: center;
  display: flex;
  font-size: 40px;
  color: grey;
  margin-bottom: 3%;
`;
const ImgBook = styled.img`
  width: 50px;
  /* filter: blur(0); */
`;
