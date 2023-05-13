import styled from "styled-components";

const StateSelectWrapper = styled.select`
  border: none;
  border-bottom: 1px solid #000;
  width: 300px;
  @media (max-width: 530px) {
    width: 234px;
  }
  @media (max-width: 428px) {
    width: 160px;
  }
  @media (max-width: 366px) {
    width: 140px;
  }
`;

export default StateSelectWrapper;
