import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import IdpWrapper from './IdpWrapper'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  
      <IdpWrapper />
    
  </StrictMode>,
)
