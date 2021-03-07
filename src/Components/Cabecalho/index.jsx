import React from "react";

import styled from "styled-components";
import { primary } from '../UI/colors';

import bank_logo from "../../assets/images/bank_logo.svg";

const Header = styled.nav`
  background-color: ${primary};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const Button = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: ${(props) => (props.primary ? "white" : primary)};
  color: ${(props) => (props.primary ? primary : "white")};
`;

const Cabecalho = () => {
  return (
    <Header>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <Button primary href="https://google.com">
          Ajuda
        </Button>
        <Button href="https://google.com">
          Sair
        </Button>
      </div>
    </Header>
  );
};

export default Cabecalho;
