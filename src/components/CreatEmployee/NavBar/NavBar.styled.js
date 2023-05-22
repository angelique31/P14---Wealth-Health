import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0 50px 0;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LogoImage = styled.img`
  width: 150px;
  height: 150px;
  animation: ${rotateAnimation} 35s infinite linear;
  border-radius: 50%;
`;

export default {
  Navbar,
  Logo,
  LogoImage,
};
