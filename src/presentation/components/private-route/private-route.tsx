import React from 'react'
import { useRecoilValue } from 'recoil'
import { currentAccountState } from '@/presentation/components'
import { RouteProps, Route, Redirect } from 'react-router-dom'

const PrivateRoute: React.FC<RouteProps> = (props: RouteProps) => {
  const { getCurrentAccount } = useRecoilValue(currentAccountState)
  return getCurrentAccount()?.accessToken
    ? <Route {...props} />
    : <Route {...props} component={() => <Redirect to="/login" />} />
}

export default PrivateRoute
