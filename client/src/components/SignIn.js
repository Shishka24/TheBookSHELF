import styled from "styled-components";
import FormInput from "./FormInput";
import { useState } from "react";

const SignIn = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
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
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match!",
      label: "Confirm Password",
      require: true,
      pattern: values.password,
    },
  ];
  console.log(values);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/signin", {
      headers: {
        method: "POST",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password,
      }),
    });
    const data = await response.json();
    console.log(data);
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(e.target.name);
  };
  return (
    <>
      <MainDiv>
        <h2>Register</h2>
        <Form onSubmit={handleSubmit}>
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
  /* justify-content: center; */
  color: black;
`;
const Form = styled.form`
  padding: 0px 60px;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 30px;
`;
