import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-24 border-t border-white/6 py-12 text-white/80">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-semibold text-white mb-3">Career Option</h4>
          <p className="text-sm">AI-guided learning paths and career recommendations.</p>
        </div>
        <div>
          <h5 className="font-medium mb-2">Resources</h5>
          <ul className="text-sm space-y-1">
            <li>Docs</li>
            <li>Blog</li>
            <li>API</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-2">Company</h5>
          <ul className="text-sm space-y-1">
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-2">Legal</h5>
          <ul className="text-sm space-y-1">
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
