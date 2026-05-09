import React from 'react'

export default function Navbar(){
  return (
    <nav className="fixed inset-x-4 top-4 z-50 backdrop-blur-md bg-white/6 border border-white/6 rounded-lg py-3 px-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sky-400 to-purple-600 flex items-center justify-center text-white font-bold">CO</div>
          <span className="font-semibold text-white">Career Option</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-white/90">
          <a href="#features" className="hover:underline transition-all duration-200">Home</a>
          <a href="#courses" className="hover:underline transition-all duration-200">Courses</a>
          <a href="/dashboard" className="hover:underline transition-all duration-200">Dashboard</a>
          <a href="#assistant" className="hover:underline transition-all duration-200">AI Assistant</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="/login" className="px-3 py-1.5 rounded-md bg-white/10 text-white hover:bg-white/20 transition">Log in</a>
          <a href="/login" className="px-3 py-1.5 rounded-md border border-white/20 text-white hover:bg-white/5 transition">Sign up</a>
        </div>
      </div>
    </nav>
  )
}
