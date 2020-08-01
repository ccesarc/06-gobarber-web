import styled from 'styled-components';

import singInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: #232119;
      border-radius: 10px;
      boder: 2px solid #232119;
    }

    button {
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${singInBackground}) no-repeat center;
  background-size: cover;
`;
