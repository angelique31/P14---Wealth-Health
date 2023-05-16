import styled, { createGlobalStyle } from "styled-components";

import { NavButton } from "../../components/CreatEmployee/NavButtons/NavButtonsStyles";

export const TableHeadStyle = createGlobalStyle`
.rdt_TableHeadRow {
    background-color: rgb(147, 173, 24); // Change la couleur de l'en tête
  }
  .rdt_TableHeadRow .rdt_TableCol {
    color: white; // Change la couleur du texte de l'en-tête
    font-family: "Source Sans Pro", sans-serif;
  }
  .sc-dEsUz.bgFTUs {
    padding: 0 100px;
    @media (max-width: 920px) {
      padding: 0 30px;
    }
  }
  .sc-hpGEOZ.hCXfxX.rdt_Pagination {
    padding: 0 88px;
    border-top: none
  }
  
  
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
  font-family: Source Sans Pro, sans-serif;
  padding: 0px 100px 0px 100px;
  margin-top: 20px;
  @media (max-width: 920px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
  }
`;

export const SmallerButton = styled(NavButton)`
  width: 195px;
  font-size: 0.8rem;
  color: black;
  background-color: rgb(245, 245, 245);
  box-shadow: 0px 0px 5px rgb(147, 173, 24);
  border: none;
  &:hover {
    background-color: rgb(147, 173, 24);
    color: white;
  }
`;

export const NoDataContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const NoDataP = styled.p`
  font-size: ${(props) => (props.large ? "18px" : "16px")};
  margin-bottom: ${(props) => (props.large ? "10px" : "0")};
  line-height: 1.4;
`;

export const StyledButton = styled.button`
  font-size: 0.8rem;
  padding: 10px 20px;
  background-color: rgb(245, 245, 245);
  color: black;
  box-shadow: 0px 0px 5px rgb(147, 173, 24);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  border-radius: 10px;
  position: relative;

  &:hover {
    background-color: rgb(147, 173, 24);
    color: white;
  }
`;

export const DivContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 50px;
`;
