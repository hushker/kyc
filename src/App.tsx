import React from 'react'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            KYC Frontend
          </h1>
          <p className="text-muted-foreground">
            Built with React, Vite, Tailwind CSS, and shadcn/ui
          </p>
        </div>
        
        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-xl font-semibold text-card-foreground mb-4">
            Welcome to your new project!
          </h2>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>✅ React 18 with TypeScript</p>
            <p>✅ Vite for fast development</p>
            <p>✅ Tailwind CSS v3 for styling</p>
            <p>✅ shadcn/ui components ready</p>
            <p>✅ Docker configuration included</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Start building your KYC application!
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
