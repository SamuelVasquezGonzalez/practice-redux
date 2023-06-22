import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './Routes/Routes'

import { Provider } from 'react-redux'
import Store from './store/Store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router />
    </Provider>
  </React.StrictMode>,
)
