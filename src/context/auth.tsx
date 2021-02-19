import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';
import Cookies from 'js-cookie'

interface User {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}

interface SignInCredentials {
  login: string;
  senha: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = Cookies.get('@Localiza:token');
    const user = Cookies.get('@Localiza:user');

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
    const response = await api.post('/login', {
      login,
      senha
    });

    const { token, user } = response.data;

    Cookies.set('@Localiza:token', token);
    Cookies.set('@Localiza:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      Cookies.set('@Localiza:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
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
