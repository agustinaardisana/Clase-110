import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../Context/UserContext";

const NavBar = styled.nav`
  background-color: blue;
  height: 30px;
`;

const Nav = () => {
  const { esUsuarioPremium } = useContext(UserContext);
  return (
    <NavBar esUsuarioPremium={esUsuarioPremium}>
      <h1> {esUsuarioPremium ? "Soy Premium" : "Soy Nav"}</h1>
    </NavBar>
  );
};

export default Nav;
