"use client"

import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function Input({ label, ...props }: InputProps) {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        {...props}
        className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
    </div>
  )
}
