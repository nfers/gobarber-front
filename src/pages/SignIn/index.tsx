import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Container, BackGround, Content, FormLogin } from './style';
import logo from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt={logo} />

      <FormLogin>
        <h1>Faça Login</h1>

        <input type="text" name="email" placeholder="E-mail" />

        <input type="password" name="password" placeholder="Senha" />
        <button type="submit">Entrar</button>

        <a href="forgot">Esqueci a senha</a>
      </FormLogin>
      <a href="login" id="login">
        <FiLogIn />
        Criar Conta
      </a>
    </Content>
    <BackGround />
  </Container>
);

export default SignIn;
