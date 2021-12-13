import React, { useState } from 'react'
import FlipMove from 'react-flip-move'

import { Calendar, Footer, Header, Loading, Error } from '@/presentation/components'
import { LoadSurveyResult } from '@/domain/usecases'
import Styles from './survey-result-styles.scss'

const SurveyResult: React.FC = () => {
  const [state] = useState({
    isLoading: false,
    error: '',
    surveyResult: null as LoadSurveyResult.Model
  })
  return (
    <div className={Styles.surveyResultWrap}>
      <Header />
      <div data-testid="survey-result" className={Styles.contentWrap}>
        {state.surveyResult &&
        <>
          <hgroup>
            <Calendar date={new Date()} className={Styles.calendarWrap} />
            <h2>Qual é seu framework web favorito?</h2>
          </hgroup>
          <FlipMove className={Styles.answersList}>
            <li>
              <img src="https://react-tdd-clean.herokuapp.com/assets/favicon-48x48.png" alt="Imagem da enquente" />
              <span className={Styles.answer}>ReactJS</span>
              <span className={Styles.percent}>50%</span>
            </li>
            <li className={Styles.active}>
              <img src="https://react-tdd-clean.herokuapp.com/assets/favicon-48x48.png" alt="Imagem da enquente" />
              <span className={Styles.answer}>ReactJS</span>
              <span className={Styles.percent}>50%</span>
            </li>
            <li>
              <img src="https://react-tdd-clean.herokuapp.com/assets/favicon-48x48.png" alt="Imagem da enquente" />
              <span className={Styles.answer}>ReactJS</span>
              <span className={Styles.percent}>50%</span>
            </li>
          </FlipMove>
          <button>Voltar</button>
        </>
        }
        {state.isLoading && <Loading />}
        {state.error && <Error error={state.error} reload={() => {}} />}

      </div>
      <Footer />
    </div>
  )
}

export default SurveyResult
