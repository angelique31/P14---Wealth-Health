import styled from "styled-components";

export const SubmitButtonContainer = styled.div`
  text-align: center;
  padding-bottom: 50px;
`;

export const SaveButton = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  background-color: #93ad18;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 5px;

  &:hover {
    background-color: #5a6e07;
  }
`;

export default {
  SubmitButtonContainer,
  SaveButton,
};
