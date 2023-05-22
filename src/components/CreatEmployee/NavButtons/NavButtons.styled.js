import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav``;

export const NavButtonLink = styled(Link)`
  text-decoration: none;
`;

export const NavButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  margin-bottom: 100px;
  @media (max-width: 810px) {
    padding: 0px 50px;
    flex-direction: column;
  }
`;

export const NavButton = styled.button`
  font-size: 1rem;
  padding: 10px 20px;
  background-color: #93ad18;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;

  &:hover {
    background-color: #5a6e07;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:not(:hover) {
    ${NavButtonsContainer}:hover & {
      background-color: #b4ce4f;
    }
  }

  &.activeNavButton {
    background-color: #5a6e07;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    top: 1px;
  }
`;

export default {
  NavContainer,
  NavButtonLink,
  NavButtonsContainer,
  NavButton,
};
