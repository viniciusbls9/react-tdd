import React from 'react'
import { useHistory } from 'react-router-dom'
import FlipMove from 'react-flip-move'
import Styles from './result-styles.scss'
import { Calendar } from '@/presentation/components'
import { SurveyResultAnswer } from '@/presentation/pages/survey-result/components'
import { LoadSurveyResult } from '@/domain/usecases'

type Props = {
  surveyResult: LoadSurveyResult.Model
}

const Result: React.FC<Props> = ({ surveyResult }: Props) => {
  const { goBack } = useHistory()

  return (
    <>
      <hgroup>
        <Calendar
          date={surveyResult.date}
          className={Styles.calendarWrap}
        />
        <h2 data-testid="question">{surveyResult.question}</h2>
      </hgroup>
      <FlipMove data-testid="answers" className={Styles.answersList}>
        {surveyResult.answers.map((answer) =>
          <div key={answer.answer}>
            <SurveyResultAnswer answer={answer} />
          </div>
        )}
      </FlipMove>
      <button className={Styles.button} data-testid="back-button" onClick={goBack}>Voltar</button>
    </>
  )
}

export default Result
