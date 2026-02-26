import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import PageProvider from './components/PageProvider'
import { registerSW } from 'virtual:pwa-register'

registerSW({ immediate: true })

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <PageProvider>
      <App />
    </PageProvider>
  </BrowserRouter>
  </StrictMode>
)