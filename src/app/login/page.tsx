import { LoginForm } from "@cms/components/login-form"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@cms/components/ui/card"
import Link from "next/link"

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="mb-4 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center">
                        <span className="text-xl font-bold">R</span>
                    </div>
                    <h1 className="text-3xl font-bold">Resource CMS</h1>
                    <p className="text-muted-foreground">Manage multilingual resources across projects</p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Sign in to your account</CardTitle>
                        <CardDescription>Enter your credentials to access your account</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <LoginForm />
                    </CardContent>
                </Card>

                <div className="text-center text-sm text-muted-foreground">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="font-medium text-primary hover:underline">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    )
}
