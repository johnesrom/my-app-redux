"use client"

import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function Button({ text, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-semibold transition"
    >
      {text}
    </button>
  )
}
