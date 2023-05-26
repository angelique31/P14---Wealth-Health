import styled from "styled-components";
import { Label as BaseLabel } from "../../../pages/EmployeeForm/EmployeeForm.styled";

export const Label = BaseLabel;

export const DepartmentLabel = styled(BaseLabel)`
  align-items: center;
  margin-bottom: -6px;
  @media (max-width: 810px) {
    flex-direction: column;
  }
`;
