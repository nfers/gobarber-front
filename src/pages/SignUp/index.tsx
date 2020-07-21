import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Container, BackGround, Content, FormLogin } from './style';
import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
  <Container>
    <BackGround />
    <Content>
      <img src={logo} alt={logo} />

      <FormLogin>
        <h1>Cadastre-se Aqui</h1>

        <Input
          type="text"
          icon={FiUser}
          name="user"
          placeholder="Nome de Usuário"
        />
        <Input type="text" icon={FiMail} name="email" placeholder="E-mail" />

        <Input
          type="password"
          icon={FiLock}
          name="password"
          placeholder="Senha"
        />
        <Button type="submit">Cadastrar</Button>
      </FormLogin>
      <a href="login" id="login">
        <FiArrowLeft />
        voltar para Logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
