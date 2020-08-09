import React, { createContext, useCallback, useState } from 'react';

import api from '../services/api';

interface SigIncredentials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: object;
}

interface AuthContextData {
  user: object;
  sigIn(credentials: SigIncredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  //useState é o melhor lugar para armazenar informações
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Gobarber:token');
    const user = localStorage.getItem('@Gobarber:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const sigIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });
    console.log('response', response.data);

    const { token, user } = response.data;

    localStorage.setItem('@Gobarber:token', token);
    localStorage.setItem('@Gobarber:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, sigIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
