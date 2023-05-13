import styled from "styled-components";

export const ValidationErrorWrapper = styled.span`
  color: red;
  font-size: 0.75rem;
  margin-top: -28px;
  font-style: italic;
  font-family: Source Sans Pro, sans-serif;
  @media (max-width: 810px) {
    text-align: right;
    font-size: 0.5rem;
    margin-top: -24px;
  }
`;

export const DepartmentErrorWrapper = styled(ValidationErrorWrapper)`
  position: relative;
  bottom: -18px;
  left: -218px;
  @media (max-width: 505px) {
    left: 222px;
    bottom: -25px;
    display: flex;
    flex-wrap: nowrap;
  }
  @media (max-width: 467px) {
    left: 150px;
  }
`;

export default {
  ValidationErrorWrapper,
  DepartmentErrorWrapper,
};
