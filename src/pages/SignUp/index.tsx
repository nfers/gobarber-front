import React, { useCallback } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Container, BackGround, Content } from './style';
import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string()
          .required('E-mail é obrigatório')
          .email('digite um e-mail válido'),
        password: Yup.string().required('Senha é Obrigatória').min(6),
      });

      await schema.validate(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <BackGround />
      <Content>
        <img src={logo} alt={logo} />

        <Form onSubmit={handleSubmit}>
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
        </Form>
        <a href="login" id="login">
          <FiArrowLeft />
          voltar para Logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
