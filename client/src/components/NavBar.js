import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import SearchBooks from "./SearchBooks";

import { IconContext } from "react-icons/lib";
import { GiGalaxy } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  return (
    <IconContext.Provider value={{ size: "35px", color: "white" }}>
      <NavDiv>
        <DIV>
          {/* <GiGalaxy /> */}
          <NavigationLink to="/">
            <H2>The Book Shelf</H2>
          </NavigationLink>
        </DIV>

        <DIV>
          <SearchBooks />
          {/* <CgProfile /> */}
          <NavigationLink to="/signin">
            <H2>Sign In</H2>
          </NavigationLink>
        </DIV>
      </NavDiv>
    </IconContext.Provider>
  );
};
export default NavBar;
const NavDiv = styled.div`
  background: linear-gradient(110deg, #37fff9 20%, #fc803d 60%, #3dfce9 30%);
  justify-content: space-between;
  background-color: grey;
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
  font-size: 60px;
`;
