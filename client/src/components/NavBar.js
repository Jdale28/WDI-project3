import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #806015;
  height: 60px;
  font-size: 2rem;
  a {
    text-decoration: none;
    padding-left: 10px;
    color: white;
    &:hover {
      color: yellow;
    }
  }
  .right {
    width: 15vw;
    display: flex;
    justify-content: space-around;
  }
`;

class NavBar extends Component {
  render() {
    return (
      <NavBarStyles id="nav-container" class="some-class">
        <Link to="/employers">Employers</Link>
        <div className="right">
          <Link to="/login">Sign Up</Link>
          <Link to="/">Home</Link>
        </div>
      </NavBarStyles>
    );
  }
}

export default NavBar;
