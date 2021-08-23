import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { makeLogin } from '@/main/factories/pages/login/login-factory'
import { makeSignup } from '@/main/factories/pages/signup/signup-factory'
import { ApiContext } from '@/presentation/contexts'
import { SurveyList } from '@/presentation/pages'
import { setCurrentAccountAdapter, getCurrentAccountAdapter } from '../adapters/current-account-adapter'
import { PrivateRoute } from '@/presentation/components'

const Router: React.FC = () => {
  return (
    <ApiContext.Provider
      value={{
        setCurrentAccount: setCurrentAccountAdapter,
        getCurrentAccount: getCurrentAccountAdapter
      }}
    >
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={makeLogin} />
        <Route path="/signup" exact component={makeSignup} />
        <PrivateRoute path="/" exact component={SurveyList} />
      </Switch>
    </BrowserRouter>
    </ApiContext.Provider>
  )
}
export default Router
