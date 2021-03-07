import React from "react";
import styled from 'styled-components';
import { backgroundLight } from '../UI/colors';
import Titulo from "../Titulo";
import Conta from "../Conta";
import Extrato from "../Extrato";

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const ContainerWrapper = () => {
  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <Content>
        <Conta />
        <Extrato />
      </Content>
    </Container>
  );
};

export default ContainerWrapper;
