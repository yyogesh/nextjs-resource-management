"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

// Mock user data for demonstration
const mockUsers = [
  {
    id: "user-1",
    name: "Admin User",
    email: "admin@example.com",
    password: "password123",
    role: "admin",
  },
  {
    id: "user-2",
    name: "Regular User",
    email: "user@example.com",
    password: "password123",
    role: "user",
  },
]

interface User {
  id: string
  name: string
  email: string
  role: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // In a real app, this would call an API endpoint
    // For demo purposes, we'll use mock authentication
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const user = mockUsers.find((u) => u.email === email && u.password === password)
        if (user) {
          const { password, ...userWithoutPassword } = user
          setUser(userWithoutPassword)
          localStorage.setItem("user", JSON.stringify(userWithoutPassword))
          resolve()
        } else {
          reject(new Error("Invalid credentials"))
        }
      }, 1000) // Simulate API delay
    })
  }

  const register = async (name: string, email: string, password: string) => {
    // In a real app, this would call an API endpoint
    // For demo purposes, we'll use mock registration
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const existingUser = mockUsers.find((u) => u.email === email)
        if (existingUser) {
          reject(new Error("Email already in use"))
        } else {
          // In a real app, this would add the user to the database
          // For demo, we'll just simulate success
          resolve()
        }
      }, 1000) // Simulate API delay
    })
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    router.push("/login")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
