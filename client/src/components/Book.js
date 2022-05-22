import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Comment from "./Comment";
import AllComments from "./AllComments";
import { UsersContext } from "./UsersContext";

const Book = () => {
  const { id } = useParams();
  const { currentUser } = useContext(UsersContext);
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
  return (
    <>
      {status === "idle" && currentUser === null && (
        <DivBook>
          <ImgBook src={BookList.cover} alt={BookList} />
          <Div2>
            <H3>{BookList.authors}</H3>
            <H3>{BookList.name}</H3>
            <H3>{BookList.synopsis}</H3>
          </Div2>
        </DivBook>
      )}
      {status === "idle" && currentUser !== null && (
        <>
          <DivBook>
            <ImgBook src={BookList.cover} alt={BookList} />
            <Div2>
              <H3>{BookList.authors}</H3>
              <H3>{BookList.name}</H3>
              <H3>{BookList.synopsis}</H3>
            </Div2>
          </DivBook>
          <div>
            <h2>{currentUser.username}</h2>
            <Comment />
            <AllComments />
          </div>
        </>
      )}
    </>
  );
};

export default Book;
const DivBook = styled.div`
  position: relative;
  display: flex;
  margin-top: 120px;
`;
const Div2 = styled.div`
  position: relative;
  justify-content: center;
  margin: 85px 120px;
  padding: 20px 80px;
  border: 4px solid grey;
`;
const H3 = styled.h3`
  font-size: 20px;
`;
const ImgBook = styled.img`
  width: 350px;
  margin-left: 300px;
`;
