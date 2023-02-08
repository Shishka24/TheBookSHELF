import styled from "styled-components";
import FormInput from "./FormInput";
import { useState } from "react";

const SignIn = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    // confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      require: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      require: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and should include at least 1 letter , 1 number and 1 special character!",
      label: "Password",
      require: true,
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    const settings = {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    fetch("http://localhost:5000/signin", settings)
      .then((res) => res.json())
      .catch((error) => console.log("ERROR: ", error));
    setValues({ username: "", email: "", birthday: "", password: "" });
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <MainDiv>
        <Form onSubmit={handleSubmit}>
          <H2>Registration</H2>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <Button type="submit">Submit</Button>
        </Form>
      </MainDiv>
    </>
  );
};
export default SignIn;
const MainDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: black;
  position: relative;
`;
const Form = styled.form`
  padding: 0px 60px;
  border-radius: 10px;
  border: 4px solid #e6850b;
  box-shadow: 0px 0px 25px 1px #e86f83;
  background: #ddedec;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 35px;
  cursor: pointer;
  margin-bottom: 30px;
`;
const H2 = styled.h2`
  margin-top: 25px;
  margin-bottom: 30px;
  font-size: 35px;
  font-family: "Pacifico", cursive;
`;
