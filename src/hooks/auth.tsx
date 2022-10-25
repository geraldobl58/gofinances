import { createContext, useContext } from 'react'

interface AuthProviderProps {
  children: React.ReactNode
}

interface User {
  id: string
  name: string
  email: string
  photo?: string
}

interface IAuthContextData {
  user: User
}

const AuthContext = createContext({} as IAuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const user = {
    id: '122121321',
    name: 'John Doe',
    email: 'johndoe@email.com'
  }

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth } 