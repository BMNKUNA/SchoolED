'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password')
      return
    }

    // Implement login functionality here (e.g., API call)
    // For now, we'll just log the input values
    console.log({ email, password })
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        <section className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
              <h1 className="text-2xl font-bold text-center mb-6">Login to Your Account</h1>

              {error && <div className="text-red-600 text-center mb-4">{error}</div>}

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>

                <Button className="w-full bg-pink-800 hover:bg-pink-700">Login</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
