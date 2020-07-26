import styled from 'styled-components';
import { shade } from 'polished';
import signInImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-self: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;
  width: 100%;
  max-width: 700px;

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.4, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.4, '#f4ede8')};
      }
    }
  }
`;

export const BackGround = styled.div`
  flex: 1;
  background: url(${signInImg}) no-repeat center;
  background-size: cover;
`;

export const FormLogin = styled.form``;
