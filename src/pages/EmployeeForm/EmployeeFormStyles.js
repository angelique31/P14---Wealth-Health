import styled from "styled-components";

export const FormContent = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 60px;
  @media (max-width: 810px) {
    display: block;
    padding: 0px 50px;
  }
`;

export const IdentityContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 810px) {
    margin-bottom: 20px;
  }
`;

export const AddressContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 1.5rem;
  gap: 10px;
  font-family: Source Sans Pro, sans-serif;
  @media (max-width: 810px) {
    flex-direction: row;
    align-items: center;
    display: flex;
    flex: 1 1;
    justify-content: space-between;
    margin: 5px 0;
    font-size: 1rem;
  }
`;

export const DepartmentContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
  @media (max-width: 500px) {
    padding: 0px 50px;
  }
`;

export const DepartmentContainerLabel = styled.div`
  font-size: 1.5rem;
  gap: 15px;
  font-family: Source Sans Pro, sans-serif;
  @media (max-width: 810px) {
    font-size: 1rem;
  }
`;

export const InputText = styled.div`
  font-size: 1.5rem;
  gap: 15px;
  font-family: Source Sans Pro, sans-serif;
`;
