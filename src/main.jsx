import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter basename="/se_project_react/">
     <App />
   </BrowserRouter>
  </React.StrictMode>,
)
