import React from 'react'
import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // Simulação de autenticação - em produção seria uma verificação real
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />
}

export default ProtectedRoute
