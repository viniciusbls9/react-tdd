import React, { useContext } from 'react'
import { SurveyContext } from '@/presentation/pages/survey-list/components'

import Styles from './error-styles.scss'

const Error: React.FC = () => {
  const { state } = useContext(SurveyContext)
  return (
    <div className={Styles.errorWrap}>
      <span data-testid="error">{state.error}</span>
      <button>Recarregar</button>
    </div>
  )
}

export default Error
