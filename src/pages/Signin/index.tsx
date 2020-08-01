import React from 'react';

import { FiLogIn } from 'react-icons/fi';

import LogoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const Signin: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={LogoImg} alt="GoBarber" />
        <form>
          <h1>Faça seu login</h1>
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit"> Entrar</button>
          <a href="">Esqueci minha senha</a>
        </form>
        <a href="">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  </>
);

export default Signin;
