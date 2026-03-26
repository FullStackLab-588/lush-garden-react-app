import { Suspense, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div className="grid min-h-screen place-items-center text-xl font-bold">Loading...</div>}>
      <App />
    </Suspense>
  </StrictMode>,
)
