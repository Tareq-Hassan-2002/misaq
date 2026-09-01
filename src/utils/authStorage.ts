import type { User } from '../types'

const STORAGE_KEY = 'misaq-auth-user'

const safeParse = <T>(value: string | null): T | null => {
  if (!value) {
    return null
  }

  try {
    return JSON.parse(value) as T
  } catch {
    return null
  }
}

export const getCurrentUser = (): User | null => {
  if (typeof window === 'undefined') {
    return null
  }

  const raw = window.localStorage.getItem(STORAGE_KEY)
  return safeParse<User>(raw)
}

export const login = (user: User): void => {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
}

export const logout = (): void => {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.removeItem(STORAGE_KEY)
}

export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null
}

export const hasRole = (role: 'student' | 'admin'): boolean => {
  const user = getCurrentUser()
  return user !== null && user.role === role
}

export const isAdmin = (): boolean => {
  return hasRole('admin')
}

export const isStudent = (): boolean => {
  return hasRole('student')
}
