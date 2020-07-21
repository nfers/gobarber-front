import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, BackGround, Content, FormLogin } from './style';
import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt={logo} />

      <FormLogin>
        <h1>Faça Login</h1>

        <Input type="text" icon={FiMail} name="email" placeholder="E-mail" />

        <Input
          type="password"
          icon={FiLock}
          name="password"
          placeholder="Senha"
        />
        <Button type="submit">Entrar</Button>

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
