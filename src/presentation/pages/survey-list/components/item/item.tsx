import React from 'react'
import { LoadSurveyList } from '@/domain/usecases'
import { Calendar, Icon, IconName } from '@/presentation/components'
import Styles from './item-styles.scss'

type Props = {
  survey: LoadSurveyList.Model
}

const SurveyItem: React.FC<Props> = ({ survey }: Props) => {
  const iconName = survey.didAnswer ? IconName.thumbUp : IconName.thumbDown

  return (
  <li className={Styles.surveyItemWrap}>
    <div className={Styles.surveyContent}>
      <Icon className={Styles.iconWrap} iconName={iconName} />
      <Calendar date={survey.date} className={Styles.calendarWrap} />
      <p data-testid="question">{survey.question}</p>
    </div>
    <footer>Ver resultado</footer>
  </li>
  )
}

export default SurveyItem
