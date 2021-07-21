import React from 'react'
import ReactDOM from 'react-dom'
import './assets/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'nprogress/nprogress.css'
import router from './Router'
import { EasyrouteProvider, RouterOutlet } from '@easyroute/react'

ReactDOM.render(
  <React.StrictMode>
    <EasyrouteProvider router={router}>
      <RouterOutlet name={'default'} />
    </EasyrouteProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
