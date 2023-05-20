import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const Container = styled.div``;

export const CenterPage = styled.div`
  text-align: center;
`;

export const TitleText = styled.p`
  color: rgb(147, 173, 24);

  font-weight: 600;
  font-size: 1.3rem;
  line-height: 66px;
  margin-bottom: 60px;
  @media screen and (max-width: 750px) {
    font-size: 1rem;
  }
`;

export const TitleReturn = styled(NavLink)`
  color: rgb(147, 173, 24);
  font-size: 1rem;
  font-weight: 600;
  padding-bottom: 80px;
  text-decoration: underline;
`;

const fall = keyframes`
    0% { transform: translateY(0) rotate(0); }
    100% { transform: translateY(3rem) rotate(90deg); }
`;

export const Title = styled.h1`
  color: rgb(245, 245, 245);
  font-weight: 700;
  font-size: 14rem;
  margin-top: 66px;

  text-shadow: 0px 0px 10px rgb(147, 173, 24);
  @media screen and (max-width: 750px) {
    font-size: 7rem;
  }
`;

export const FallingFour = styled.span`
  display: inline-block;
  animation: ${fall} 3s forwards;
  margin-left: 20px;
  @media screen and (max-width: 750px) {
    position: relative;
    top: -2rem;
    margin-left: 15px;
  }
  @media screen and (max-width: 400px) {
    top: -2.5rem;
  }
`;
