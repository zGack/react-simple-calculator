import React from 'react'
import ReactDOM from 'react-dom/client'
import CalculatorApp from './CalculatorApp'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CalculatorApp />
  </React.StrictMode>,
)
