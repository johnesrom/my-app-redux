"use client"

import { useSelector } from "react-redux";
import { Topbar } from "../../components/TopBar"
import { RootState } from "@/redux/store";
import { useUser } from "@/hooks/useUser";

export default function DashboardPage() {

  const { currentUser } = useUser();

  return (
    <div className="min-h-screen bg-gray-100">
      <Topbar />
      <main className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Dashboard! {currentUser}</h2>

        
        <p className="text-gray-700"> 
          Esta é uma tela simples de dashboard.  
          Aqui você pode adicionar cards, gráficos ou tabelas futuramente.
        </p>
      </main>
    </div>
  )
}
