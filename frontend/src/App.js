/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { useState } from 'react';
import { LoginPage } from './domains/login/LoginPage';
import { ErrorPage } from './domains/error/notFound/ErrorPage';
import { ProtectedRoute } from './utils/ProtectedRoute';
import { AppContext } from './AppContext';

function App() {
  const [authorized, setAuthorized] = useState(!!localStorage.getItem('jwt'));

  return (
    <AppContext.Provider value={{ authorized, setAuthorized }}>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<ProtectedRoute component={<div>Hello!</div>} authorized={authorized} />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="login"
            element={
              <LoginPage />
          }
          />
          <Route
            path="*"
            element={<ErrorPage />}
          />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
