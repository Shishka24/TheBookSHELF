import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const mainPage = async () => {
      const res = await fetch(" http://localhost:3001");
      const data = await res.json();
      setBooks(data);
    };
    mainPage();
  }, []);
  // console.log(books);
  const allBooks = books.data;
  // console.log(allBooks);
  const history = useNavigate();
  function handleClick(id) {
    history(`/book/${id}`);
  }
  return (
    <>
      <H1>THIS WEEK POPULAR GENRE</H1>
      <ListContainer>
        {allBooks &&
          allBooks.map((e) => (
            <div key={e.book_id} onClick={() => handleClick(e.book_id)}>
              <Img src={e.cover} alt={e.book_id} />
              <Title>{e.name}</Title>
            </div>
          ))}
      </ListContainer>
    </>
  );
};
export default Homepage;
const H1 = styled.h1`
  font-family: "Cormorant", serif;
  background-color: #c4ba9f;
  justify-content: center;
  display: flex;
  font-size: 40px;
  color: grey;
  margin-bottom: 3%;
`;
const Title = styled.h1`
  font-size: 27px;
  color: black;
  font-family: "Cormorant", serif;
  display: flex;
  /* margin-right: 15%;
    display: flex;
   */
`;
const ListContainer = styled.div`
  margin-left: 10%;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  cursor: pointer;
`;
const Img = styled.img`
  background-color: #000;
  color: #fff;
  display: inline-block;
  margin: 8px;
  max-width: 320px;
  min-width: 240px;
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 250px;
`;
