/* eslint-disable no-unused-expressions */
import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Container, BackGround, Content } from './style';
import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationErrors';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string()
          .required('E-mail é obrigatório')
          .email('digite um e-mail válido'),
        password: Yup.string().min(6, 'senha precisa ter no mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <BackGround />
      <Content>
        <img src={logo} alt={logo} />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Cadastre-se Aqui</h1>

          <Input
            type="text"
            icon={FiUser}
            name="name"
            placeholder="Nome de Usuário"
          />
          <Input type="text" icon={FiMail} name="email" placeholder="E-mail" />

          <Input
            autoComplete="on"
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
