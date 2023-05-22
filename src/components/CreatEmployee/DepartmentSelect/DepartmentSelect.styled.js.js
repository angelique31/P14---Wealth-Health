import styled from "styled-components";

const DepartmentSelectWrapper = styled.select`
  border: none;
  border-bottom: 1px solid #000;
  width: 218px;
  margin-left: 60px;
  @media (max-width: 426px) {
    margin-left: 20px;
  }
`;

export default DepartmentSelectWrapper;
