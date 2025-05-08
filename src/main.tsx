import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/Global.css'
import App from '@/app/App.tsx'

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
