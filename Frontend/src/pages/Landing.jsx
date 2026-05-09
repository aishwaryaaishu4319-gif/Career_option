import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Landing(){
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <Hero />

        <section id="features" className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-bold mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/4 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Personalized Paths</h3>
              <p className="text-sm text-white/80">AI builds a learning path tailored to your goals.</p>
            </div>
            <div className="bg-white/4 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Skill Tracking</h3>
              <p className="text-sm text-white/80">Track progress with visual charts and milestones.</p>
            </div>
            <div className="bg-white/4 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="font-semibold mb-2">AI Assistant</h3>
              <p className="text-sm text-white/80">Ask career questions and get real-time suggestions.</p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}
