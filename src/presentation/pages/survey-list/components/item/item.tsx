import React from 'react'
import { Icon, IconName } from '@/presentation/components'
import { SurveyModel } from '@/domain/models'
import Styles from './item-styles.scss'

type Props = {
  survey: SurveyModel
}

const SurveyItem: React.FC<Props> = ({ survey }: Props) => {
  const iconName = survey.didAnswer ? IconName.thumbUp : IconName.thumbDown

  return (
  <li className={Styles.surveyItemWrap}>
    <div className={Styles.surveyContent}>
      <Icon className={Styles.iconWrap} iconName={iconName} />
      <time>
        <span
          data-testid="day"
          className={Styles.day}
        >
          {survey.date.getDate().toString().padStart(2, '0')}
        </span>
        <span
          data-testid="month"
          className={Styles.month}
        >
          {survey.date.toLocaleString('pt-BR', { month: 'short' }).replace('.', '')}
        </span>
        <span
          data-testid="year"
          className={Styles.year}
        >
          {survey.date.getFullYear()}
        </span>
      </time>
      <p data-testid="question">{survey.question}</p>
    </div>
    <footer>Ver resultado</footer>
  </li>
  )
}

export default SurveyItem
