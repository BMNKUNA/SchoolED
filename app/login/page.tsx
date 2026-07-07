'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password) {
      setError('Please enter both email and password')
      return
    }

    setError('')
    console.log({ email, password })
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        <section className="bg-gray-50 py-16 md:py-32">
          <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white p-6 shadow-lg sm:p-8">
              <h1 className="mb-6 text-center text-2xl font-bold">Login to Your Account</h1>

              {error && <div className="mb-4 text-center text-red-600">{error}</div>}

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border px-3 py-2 text-base"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-md border px-3 py-2 text-base"
                    required
                  />
                </div>

                <Button type="submit" className="min-h-11 w-full bg-blue-800 hover:bg-blue-700">
                  Login
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
