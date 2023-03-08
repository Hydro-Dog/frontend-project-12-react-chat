/* eslint-disable react/jsx-filename-extension */
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { LoginPage } from './domains/login/LoginPage';
import { ErrorPage } from './domains/error/notFound/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world2!</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },

]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
