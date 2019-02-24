import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LoginHeader } from '../styleComponents/styleComponents';

const Nav = styled.nav`
  width: 100%;
  height: 4em;
  position: fixed;
  background: black;
  color: white;
  display: flex;
  justify-content: space-between;
`;

const NavListHeading = styled.li`
  list-style: none;
  display: inline-block;
  margin-right: 1.2em;
`;

const NavListItem = styled(NavListHeading)`
  font-family: 'Press Start 2P', cursive;
  font-size: 0.7em;
`;

const NavProfileSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const NavUsername = styled.p`
  align-self: flex-end;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    color: maroon;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <ul>
        <NavListHeading>
          <NavLink to="/">
            <LoginHeader>JSPARRING</LoginHeader>
          </NavLink>
        </NavListHeading>
        <NavListItem>
          <NavLink to="/join">Queue up for Battle!</NavLink>
        </NavListItem>
      </ul>
      <NavProfileSection>
        <NavUsername>Username Here</NavUsername>
        <NavLink to="/">
          <svg height="100" width="100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="black"
              strokeWidth="3"
              fill="white"
            />
          </svg>
        </NavLink>
      </NavProfileSection>
    </Nav>
  );
};

export default Navbar;
