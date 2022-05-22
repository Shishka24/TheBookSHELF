import { useContext, useState } from "react";
import { UsersContext } from "./UsersContext";
import styled from "styled-components";
const Comments = () => {
  const { currentUser } = useContext(UsersContext);
  const [inputText, setInputText] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [commentData, setCommentData] = useState({
    comments: "",
    author: currentUser.username,
  });
  const countCharacters = (ev) => {
    const currentText = ev.target.value;
    setCommentData({ ...commentData, comments: currentText });
    return inputText.length;
  };

  const Color = () => {
    if (inputText.length >= 50 && inputText.length <= 100) {
      return "rgba(189, 170, 0, 1)";
    } else if (inputText.length > 100 && inputText.length <= 200) {
      return "rgba(189, 0, 110, 1)";
    } else if (inputText.length > 200) {
      return "rgba(219, 0, 0, 1)";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true); //once clicked for Tweet submit set pending to TRUE
    try {
      fetch("http://localhost:5000/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ commentData }),
      }).then((res) => {
        if (res.ok) {
          return res.json().then(() => setIsPending(false));
        }
        throw res;
      });
    } catch (error) {
      return console.error("ERROR");
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Wrapper>
          <CommentText
            type="text"
            onChange={countCharacters}
            placeholder="   What'do you think about this Book?"
          />
          <Count countColor={Color}>
            {inputText !== "" ? <>{280 - inputText.length}</> : "280"}
          </Count>
          <Input>
            <input
              className="submitButton"
              type="submit"
              value="Send"
              disabled={inputText !== "" && inputText.length >= 280}
            />
          </Input>
        </Wrapper>
      </Form>
    </>
  );
};
export default Comments;
const Form = styled.form`
  position: absolute;
`;
const CommentText = styled.textarea`
  margin-left: 1000px;
  width: 600px;
  height: 150px;
  resize: none;
  border: none;
  resize: none;
  outline: none;
  font-size: 25px;
  border-radius: 25px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Count = styled.div`
  color: ${(prop) => prop.countColor};
  margin-top: 110px;
`;
const Input = styled.div`
  position: relative;
  margin-top: 110px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  transition: 200ms;
  .submitButton {
    color: white;
    border: none;
    font-size: 18px;
    border-radius: 20px;
    padding: 10px 30px 10px 30px;
    background: black;
  }
`;
