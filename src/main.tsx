import {Footer, Navigation} from '@/components/layout'
import AppProviders from '@/providers'
import '@/styles/global.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import router from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProviders>
        <Navigation />

        <Routes>
          {router.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>

        <Footer />
      </AppProviders>
    </BrowserRouter>
  </React.StrictMode>,
)
