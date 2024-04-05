import {Footer, Navigation} from '@/components/layout'
import AppProviders from '@/providers'
import '@/styles/global.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import {BrowserRouter} from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProviders>
        <Navigation />
        <App />
        <Footer />
      </AppProviders>
    </BrowserRouter>
  </React.StrictMode>,
)
