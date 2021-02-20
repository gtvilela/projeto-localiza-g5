import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';
import Cookies from 'js-cookie'

interface User {
  id: number;
  name: string;
  tipo: string;
}


interface IResponseAxios {
  id: number;
  name: string;
  token: string;
  tipo: string;
}

interface SignInCredentials {
  login: string;
  senha: string;
}

interface AuthState {
  user: User;
  token: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const user = Cookies.get('@Localiza:user');
    const token = Cookies.get('@Localiza:token');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signOut = useCallback(() => {
    Cookies.remove('@Localiza:token');
    Cookies.remove('@Localiza:user');

    setData({} as AuthState);
  }, []);

  const signIn = useCallback(async ({ login, senha }) => {
    const response = await api.post<IResponseAxios>('/login', {
      login,
      senha
    });

    const { id, name, token, tipo} = response.data;

    const user = { id, name, tipo };

    Cookies.set('@Localiza:user', JSON.stringify(user));
    Cookies.set('@Localiza:token', JSON.stringify(token));

    setData({ user, token });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
