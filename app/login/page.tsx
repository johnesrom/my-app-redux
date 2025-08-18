"use client"

import { Input } from "@/components/Input"
import { Button } from "@/components/Button"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useDispatch } from "react-redux"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();

  function handleLogin(e: React.FormEvent) {  
    e.preventDefault()

    dispatch({
      type: 'user/login',
      payload: {email, password}
    });
    
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button text="Entrar" type="submit" />
        </form>
      </div>
    </div>
  )
}
