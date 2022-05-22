import { useState, useEffect } from "react";
import styled from "styled-components";

const AllComments = () => {
  const [comments, setComments] = useState({});
  useEffect(() => {
    const feed = async () => {
      const res = await fetch(" http://localhost:5000/book");
      const data = await res.json();
      setComments(data);
    };
    feed();
  }, []);
  const list = comments.data;
  return (
    <>
      <H1>What Is Public Opinion?</H1>
      <CommentDiv>
        {list &&
          list.map((e) => (
            <CommentDiv key={e._id}>
              <H2>{e.commentData.author}</H2>
              <P>{e.commentData.comments}</P>
            </CommentDiv>
          ))}
      </CommentDiv>
    </>
  );
};
export default AllComments;

const H1 = styled.h1`
  position: relative;
  font-family: "Cormorant", serif;
  display: flex;
  justify-content: center;
  font-size: 40px;
  margin-top: 300px;
`;
const H2 = styled.h2`
  position: relative;
  color: grey;
  font-family: "Cormorant", serif;
  justify-content: center;
  font-size: 30px;
`;
const P = styled.p`
  position: relative;
  font-family: "Cormorant", serif;
  text-align: center;
  font-size: 45px;
  margin-top: 45px;
`;
const CommentDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 45px;
  margin-bottom: 45px;
  justify-content: center;
`;
