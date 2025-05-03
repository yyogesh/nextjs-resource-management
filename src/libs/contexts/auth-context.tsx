import { useRouter } from "next/navigation"
import { createContext, ReactNode, useContext, useState } from "react"


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
    const router = useRouter()

    const login = async (email: string, password: string) => {
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
            }, 1000)
        });
    }

    const register = async (name: string, email: string, password: string) => {
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("user")
        router.push("/login")
    }

    return <AuthContext.Provider value={{ user, isLoading: false, login, logout, register, isAuthenticated: !!user }}>
        {children}
    </AuthContext.Provider>
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}