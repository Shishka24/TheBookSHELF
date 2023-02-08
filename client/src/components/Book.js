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
  let count = 500;
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
            <H2>{BookList.authors}</H2>
            <H2>{BookList.name}</H2>
            <H3>
              {BookList.synopsis.slice(0, count) +
                (BookList.synopsis.length > count ? "..." : "")}
            </H3>
          </Div2>
        </DivBook>
      )}
      {status === "idle" && currentUser !== null && (
        <>
          <DivBook>
            <ImgBook src={BookList.cover} alt={BookList} />
            <Div2>
              <H2>{BookList.authors}</H2>
              <H2>{BookList.name}</H2>
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
  /* position: relative; */
  margin: 85px 120px;
  padding: 20px 80px;
`;
const H2 = styled.h3`
  text-decoration: underline;
  padding-top: 10px;
  font-family: "Pacifico", cursive;
  font-size: 27px;
`;
const H3 = styled.h3`
  text-color: white;
  padding-top: 20px;
  font-family: "Pacifico", cursive;
  font-size: 20px;
`;
const ImgBook = styled.img`
  position: fixed;
  max-width: 100%;
  max-height: 50%;
  margin-left: 25%;
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
`;
