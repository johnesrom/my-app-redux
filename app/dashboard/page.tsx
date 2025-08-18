"use client"

import { Topbar } from "../../components/TopBar"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Topbar />
      <main className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Dashboard!</h2>
        <p className="text-gray-700">
          Esta é uma tela simples de dashboard.  
          Aqui você pode adicionar cards, gráficos ou tabelas futuramente.
        </p>
      </main>
    </div>
  )
}
