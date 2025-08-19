"use client"

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux"

export function Topbar() {

  const { currentUser } = useSelector((state: RootState) => state.userReducer);


  
  return (
    <header className="bg-cyan-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">Meu Dashboard</h1>
        <nav className="space-x-4">
          { currentUser ? (<a href="/dashboard" className="hover:underline">{currentUser.email} | Home</a>) : "" }
          <a href="/login" className="hover:underline"> {currentUser ? "Sair" : "Logar"}</a>
        </nav>
      </div>
    </header>
  )
}
