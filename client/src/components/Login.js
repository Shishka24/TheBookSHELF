import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { UsersContext } from "./UsersContext";
var bcrypt = require("bcryptjs");

const Login = () => {
  const { users, loginData, setLoginData, setCurrentUser, currentUser } =
    useContext(UsersContext);
  let navigate = useNavigate();
  const handleChange = (value, name) => {
    setLoginData({ ...loginData, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const findUser = users.find((user) => user.username === loginData.username);

    if (findUser === undefined) {
      window.alert("Invalid Username or Password!");
    } else {
      bcrypt.compare(
        loginData.password,
        findUser.password,
        function (err, result) {
          if (findUser === undefined || result === false) {
            window.alert("Invalid Username or Password!");
          } else {
            setCurrentUser(findUser);
            navigate(`/user/${findUser.username}`);
          }
        }
      );
    }
  }

  return (
    <>
      <Form>
        <FormDiv onSubmit={handleSubmit}>
          <Input
            type={"text"}
            name="username"
            required
            placeholder="Username"
            onChange={(e) => handleChange(e.target.value, "username")}
          />
          <Input
            type={"password"}
            name="password"
            required
            placeholder="Password"
            onChange={(e) => handleChange(e.target.value, "password")}
          />
          <SubmitInput
            type="submit"
            value="Login"
            disabled={!loginData.password || !loginData.username}
          />
          <p>Would you like have an account?</p>
          <NavLink to="/signin"> Sign Up! </NavLink>
        </FormDiv>
      </Form>
    </>
  );
};

const Form = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

const FormDiv = styled.form`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 4px solid #e6850b;
  box-shadow: 0px 0px 25px 1px #e86f83;
  background: #ddedec;
  width: 300px;
  height: 300px;
`;

const Input = styled.input`
  border: none;
  background: #e0e0ad;
  font-size: 16px;
  height: 35px;
  margin: 0px 0px 20px 0px;
  padding: 15px;
  border-radius: 10px;
`;

const SubmitInput = styled.input`
  color: white;
  font-weight: bold;
  padding: 12px 35px 12px 35px;
  margin-bottom: 10px;
  text-align: center;
  border: none;
  border-radius: 10px;
  background: #e0e0ad;

  &:hover {
    color: white;
    background-color: #a16a23;
    transition: 150ms;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export default Login;
