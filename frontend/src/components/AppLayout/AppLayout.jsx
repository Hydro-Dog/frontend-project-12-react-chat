import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import './AppLayout.css';

export function AppLayout() {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
    </div>
  );
}
