import styled, { createGlobalStyle } from "styled-components";

export const TableHeadStyle = createGlobalStyle`
.rdt_TableHeadRow {
    background-color: rgb(147, 173, 24); // Change la couleur de l'en tête
  }
  .rdt_TableHeadRow .rdt_TableCol {
    color: white; // Change la couleur du texte de l'en-tête
    font-family: "Source Sans Pro", sans-serif;
  }
  .sc-dEsUz.bgFTUs {
    padding: 0 100px !important;
  }
  .sc-hpGEOZ.hCXfxX.rdt_Pagination {
    padding: 0 88px;
    border-top: none
  }
  
  
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
  font-family: Source Sans Pro, sans-serif;
  padding: 0px 100px 0px 100px;
  @media (max-width: 810px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default Container;
