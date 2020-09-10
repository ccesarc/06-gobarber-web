import React from 'react';
import Toast from './Toast';
import { ToastMessage } from '../../hooks/toast';
import { Container } from './style';

interface ToastContainerPros {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerPros> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} message={message}></Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;
