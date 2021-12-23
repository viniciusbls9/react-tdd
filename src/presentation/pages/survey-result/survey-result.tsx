import React, { useEffect, useState } from 'react'

import {
  Footer,
  Header,
  Loading,
  Error
} from '@/presentation/components'
import { LoadSurveyResult } from '@/domain/usecases'
import { useErrorHandler } from '@/presentation/hooks'
import Styles from './survey-result-styles.scss'
import { SurveyResultData } from '@/presentation/pages/survey-result/components'

type Props = {
  loadSurveyResult: LoadSurveyResult
}

const SurveyResult: React.FC<Props> = ({ loadSurveyResult }: Props) => {
  const handleError = useErrorHandler((error: Error) => {
    setState((old) => ({ ...state, surveyResult: null, error: error.message }))
  })
  const [state, setState] = useState({
    isLoading: false,
    error: '',
    surveyResult: null as LoadSurveyResult.Model,
    reload: false
  })

  const reload = (): void =>
    setState((old) => ({
      isLoading: false,
      surveyResult: null,
      error: '',
      reload: !old.reload
    }))

  useEffect(() => {
    loadSurveyResult
      .load()
      .then((surveyResult) => setState((old) => ({ ...old, surveyResult })))
      .catch(handleError)
  }, [state.reload])

  return (
    <div className={Styles.surveyResultWrap}>
      <Header />
      <div data-testid="survey-result" className={Styles.contentWrap}>
        {state.surveyResult && <SurveyResultData surveyResult={state.surveyResult} />}
        {state.isLoading && <Loading />}
        {state.error && <Error error={state.error} reload={reload} />}
      </div>
      <Footer />
    </div>
  )
}

export default SurveyResult
