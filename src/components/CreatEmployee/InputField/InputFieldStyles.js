import styled from "styled-components";

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  width: 300px;
  font-size: 1.3rem;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
`;

export default {
  Input,
  Label,
};
