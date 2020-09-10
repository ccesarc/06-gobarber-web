import React from 'react';

import SignIn from '../src/pages/Signin';
//import SignUp from '../src/pages/Signup';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <GlobalStyle />
  </>
);

export default App;
