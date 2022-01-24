import React from 'react'
import { Router } from 'react-router-dom'
import { MemoryHistory } from 'history'
import { RecoilRoot } from 'recoil'
import { render } from '@testing-library/react'

import { currentAccountState } from '@/presentation/components'
import { mockAccountModel } from '@/domain/test'
import { AccountModel } from '@/domain/models'

type Params = {
  Page: React.FC
  history: MemoryHistory
  account?: AccountModel
}

type Result = {
  setCurrentAccountMock: (account: AccountModel) => void
}

export const renderWithHistory = ({ Page, history, account = mockAccountModel() }: Params): Result => {
  const setCurrentAccountMock = jest.fn()
  const mockedState = {
    setCurrentAccount: setCurrentAccountMock,
    getCurrentAccount: () => mockAccountModel()
  }
  render(
    <RecoilRoot initializeState={({ set }) => set(currentAccountState, mockedState)}>
      <Router history={history}>
        <Page />
      </Router>
    </RecoilRoot>
  )
  return { setCurrentAccountMock }
}
