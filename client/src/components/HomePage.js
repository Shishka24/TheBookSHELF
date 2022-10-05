import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [books, setBooks] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "873856791bmsh0e3f21396a8cb64p19bf12jsn1ebee9cc68e4",
      "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
    },
  };
  useEffect(() => {
    const mainPage = async () => {
      const res = await fetch(
        "https://hapi-books.p.rapidapi.com/month/2022/3",
        options
      );
      const data = await res.json();
      setBooks(data);
    };
    mainPage();
  }, []);
  const allBooks = books;
  console.log(allBooks);
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
