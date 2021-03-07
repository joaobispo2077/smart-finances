import React from "react";
import styled from 'styled-components';
import { backgroundLight } from '../UI/colors';
import Titulo from "../Titulo";
import Conta from "../Conta";

const Container = styled.div`
  background-color: ${backgroundLight};
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

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
      </Content>
    </Container>
  );
};

export default ContainerWrapper;
