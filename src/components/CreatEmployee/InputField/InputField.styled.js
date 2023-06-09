import styled from "styled-components";

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  width: 300px;
  font-family: Source Sans Pro, sans-serif;
  font-size: 1.1rem;
  @media (max-width: 830px) {
    font-size: 1rem;
  }
  @media (max-width: 530px) {
    width: 234px;
    font-size: 0.8rem;
  }
  @media (max-width: 428px) {
    width: 160px;
  }
  @media (max-width: 366px) {
    width: 140px;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
`;

export default {
  Input,
  Label,
};
