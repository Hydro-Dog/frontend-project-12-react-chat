/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ authorized, component }) {
  if (!authorized) {
    return <Navigate to="/login" replace />;
  }

  return component;
}
