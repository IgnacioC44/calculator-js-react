import React from 'react'

export default function Button({ label, onClick, className }) {
  return (
    <button onClick={onClick} className={`w-12 h-12 py-2 px-4 rounded-full ${className}`}>
      {label}
    </button>
  )
}
