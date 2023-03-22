// @ts-nocheck
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';
import { LoginPage } from './domains/login/LoginPage';
import { ErrorPage } from './domains/error/notFound/ErrorPage';
import { ProtectedRoute } from './utils/routes';
import { AppContext } from './AppContext';
import { ChatPage } from './domains/chat/ChatPage';
import { AppLayout } from './components/AppLayout/AppLayout';

const socket = io.connect('http://127.0.0.1:3000');

socket.on('connect', () => {
  console.log('socket.connected: ', socket.connected);
});

function App() {
  const [authorized, setAuthorized] = useState(!!localStorage.getItem('jwt'));
  axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('jwt');
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  });

  return (
    <AppContext.Provider value={{ authorized, socket, setAuthorized }}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>

            <Route
              index
              element={<ProtectedRoute component={<ChatPage />} authorized={authorized} />}
              errorElement={<ErrorPage />}
            />
          </Route>
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
