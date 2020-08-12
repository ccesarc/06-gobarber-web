import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import LogoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/AuthContext';
import getValidationErros from '../../utils/getValidationErros';

interface SigInFormData {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { sigIn } = useAuth();
  //console.log('User:', user);
  //console.log('formRef :', formRef);

  const handleSubmit = useCallback(
    async (data: SigInFormData) => {
      console.log('data : ', data);
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        sigIn({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        console.log('error', error);
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErros(error);
          formRef.current?.setErrors(errors);
        }
        //disparar um toast
      }
    },
    [sigIn],
  );

  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit"> Entrar </Button>
          <a href="esqueci">Esqueci minha senha</a>
        </Form>
        <a href="criarconta">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default Signin;
