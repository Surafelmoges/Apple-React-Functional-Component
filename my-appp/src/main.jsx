import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/bootstrap-5.3.8-dist/css/bootstrap.min.css'
//import './assets/css/bootstrap-5.3.8-dist/js/bootstrap.bundle.min.js'
import './index.css'
import './App.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
