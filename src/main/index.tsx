import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@/presentation/components'
import { makeLogin } from './factories/pages/login/login-factory'
import { makeSignup } from './factories/pages/signup/signup-factory'
import '@/presentation/styles/global.scss'

ReactDOM.render(
  <Router
    makeLogin={makeLogin}
    makeSignUp={makeSignup}
  />,
  document.getElementById('main')
)
