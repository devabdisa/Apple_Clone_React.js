import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import jquery module
import "jquery/dist/jquery.min.js";
// import bootstrap module
import "bootstrap/dist/css/bootstrap.min.css";
// import bootstrap module
import "bootstrap/dist/js/bootstrap.min.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
