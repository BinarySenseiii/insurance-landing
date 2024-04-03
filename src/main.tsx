import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/styles/global.css'
import AppProviders from '@/providers'
import {Navigation} from '@/components/layout'
import Footer from './components/layout/footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviders>
      <Navigation />
      <App />
      <Footer />
    </AppProviders>
  </React.StrictMode>,
)
