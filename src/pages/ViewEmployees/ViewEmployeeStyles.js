import styled from "styled-components";

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
