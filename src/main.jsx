import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import { B2BCartProvider } from './context/B2BCartContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <B2BCartProvider>
          <App />
        </B2BCartProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)

