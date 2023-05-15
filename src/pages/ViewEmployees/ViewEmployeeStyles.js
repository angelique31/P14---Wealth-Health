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
  width: 187px;

  font-size: 0.8rem;
  color: black;

  background-color: rgb(245, 245, 245);
  &:hover {
    background-color: rgb(238, 238, 238);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
