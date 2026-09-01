import { Navigate } from 'react-router-dom'
import { getCurrentUser, hasRole } from '../utils/authStorage'
import type { UserRole } from '../types'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: UserRole
  fallbackPath?: string
}

const ProtectedRoute = ({ children, requiredRole, fallbackPath = '/login' }: ProtectedRouteProps) => {
  const user = getCurrentUser()

  // Not authenticated
  if (!user) {
    return <Navigate to={fallbackPath} replace />
  }

  // Has required role check
  if (requiredRole && !hasRole(requiredRole)) {
    return <Navigate to="/unauthorized" replace />
  }

  return <>{children}</>
}

export default ProtectedRoute
