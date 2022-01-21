import React, { memo } from 'react'
import { useLogout } from '@/presentation/hooks'
import { Logo, currentAccountState } from '@/presentation/components'
import { useRecoilValue } from 'recoil'
import Styles from './header-styles.scss'

const Header: React.FC = () => {
  const logout = useLogout()
  const { getCurrentAccount } = useRecoilValue(currentAccountState)
  const buttonClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    event.preventDefault()
    logout()
  }

  return (
    <header className={Styles.headerWrap}>
      <div className={Styles.headerContent}>
        <Logo />
        <div className={Styles.logoutWrap}>
          <span data-testid="username">{getCurrentAccount().name}</span>
          <a data-testid="logout" href="#" onClick={buttonClick}>sair</a>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
