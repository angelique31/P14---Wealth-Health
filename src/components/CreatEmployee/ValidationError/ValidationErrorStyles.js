import styled from "styled-components";

export const ValidationErrorWrapper = styled.span`
  color: red;
  font-size: 12px;
  margin-top: -28px;
  font-style: italic;
  font-family: Source Sans Pro, sans-serif;
`;

export const DepartmentErrorWrapper = styled(ValidationErrorWrapper)`
  position: relative;
  bottom: -18px;
  left: -218px;
`;

export default {
  ValidationErrorWrapper,
  DepartmentErrorWrapper,
};
