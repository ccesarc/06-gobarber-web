import React, { createContext, useCallback, useContext, useState } from 'react';

import { uuid } from 'uuidv4';

import ToastContainer from '../components/ToastContainer';

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastConstextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastConstext = createContext<ToastConstextData>({} as ToastConstextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      console.log('add toast');
      const id = uuid();
      const toast = {
        id,
        type,
        title,
        description,
      };

      //setMessages([...messages, toast]);
      setMessages(state => [...state, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    console.log('remove toasta aaaaaaaaaaaad');
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <ToastConstext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastConstext.Provider>
  );
};

function useToast(): ToastConstextData {
  const context = useContext(ToastConstext);

  if (!context) {
    throw new Error('useToast must be aasoiasaiosusdiu');
  }

  return context;
}

export { ToastProvider, useToast };
