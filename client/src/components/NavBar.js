import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UsersContext } from "./UsersContext";
import { useContext } from "react";
import SearchBooks from "./SearchBooks";

const NavBar = () => {
  const { currentUser } = useContext(UsersContext);
  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/user/${currentUser}`);
  };
  return (
    <NavDiv>
      <DIV>
        <NavigationLink to="/">
          <H2>The Book Shelf</H2>
        </NavigationLink>
      </DIV>
      <DIV>
        <SearchBooks />
        <NavigationLink to={currentUser === null ? "/login" : "#"}>
          {currentUser != null ? (
            <H1 onClick={handleClick}>Hey, {currentUser.username}!</H1>
          ) : (
            <H2>Log In</H2>
          )}
        </NavigationLink>
      </DIV>
    </NavDiv>
  );
};
export default NavBar;

const NavDiv = styled.div`
  justify-content: space-between;
  list-style: none;
  display: flex;
  flex-direction: row;
  text-shadow: 0px 4px 20px #white;
  position: relative;
`;
const NavigationLink = styled(NavLink)`
  text-decoration: none;
`;
const DIV = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 10px;
`;
const H2 = styled.h2`
  font-family: "Pacifico", cursive;
  color: black;
  font-size: 70px;
  margin-left: 25px; ;
`;
const H1 = styled.h1`
  font-size: 30px;
  display: flex;
  margin-top: 15px;
  margin-left: 25px;
  margin-right: 28px;
  font-family: "Pacifico", bold;
`;
