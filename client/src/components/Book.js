import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Book = () => {
  const { id } = useParams();
  const [BookList, setBookList] = useState([]);
  const [status, setStatus] = useState("loading");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
      "X-RapidAPI-Key": "2385336b51mshac5593ff9c397a4p1698ffjsnb6910d60abef",
    },
  };
  useEffect(() => {
    fetch(`https://hapi-books.p.rapidapi.com/book/${id}`, options, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setBookList(data))
      .then(() => setStatus("idle"))
      .catch((err) => console.log("Error from the server ", err));
  }, []);
  console.log(BookList);
  return (
    <>
      <DivBook>
        <ImgBook src={BookList.cover} alt={BookList} />
        <Div2>
          <H3>{BookList.authors}</H3>
          <H3>{BookList.name}</H3>
          <H3>{BookList.synopsis}</H3>
        </Div2>
      </DivBook>
    </>
  );
};

export default Book;
const DivBook = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 20px;
`;
const Div2 = styled.div`
  /* display: flex; */
  margin: 20px 20px;
  /* text-align: left; */
`;
const H3 = styled.h3`
  font-size: 20px;
`;
const ImgBook = styled.img`
  width: 350px;
`;
