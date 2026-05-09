import React from 'react'

export default function Hero(){
  return (
    <section className="relative w-full">
      <div className="max-w-6xl mx-auto py-24 px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Learn Smarter with AI</h1>
          <p className="text-lg text-white/80 mb-6">Personalized learning paths, skill tracking, and career recommendations powered by machine learning.</p>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <a href="/signup" className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563eb] hover:bg-[#1e4ed8] rounded-lg text-white font-medium shadow-lg transition-all duration-300">Get started</a>
            <a href="#features" className="inline-flex items-center gap-2 px-5 py-3 border border-white/20 rounded-lg text-white/90 hover:bg-white/5 transition">Learn more</a>
          </div>

          <p className="mt-6 text-sm text-white/70">Track skills • Personalized recommendations • AI assistant</p>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-80 h-80 bg-gradient-to-tr from-sky-400/30 to-purple-600/30 rounded-3xl shadow-2xl flex items-center justify-center">
            <div className="w-72 h-72 bg-white/5 rounded-2xl flex items-center justify-center">Illustration</div>
          </div>
        </div>
      </div>
    </section>
  )
}
