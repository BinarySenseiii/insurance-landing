import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/styles/global.css'
import AppProviders from '@/providers'
import {Navigation} from '@/components/layout'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviders>
      <Navigation />
      <App />
    </AppProviders>
  </React.StrictMode>,
)
