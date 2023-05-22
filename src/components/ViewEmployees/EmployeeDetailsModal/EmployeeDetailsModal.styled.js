import styled from "styled-components";
import { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const ModalContent = styled.div`
  text-align: center;
  padding: 30px;
  color: rgb(90, 110, 7);
  animation: ${fadeIn} 1s ease-in-out;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledH2 = styled.h2`
  margin-bottom: 20px;
`;
