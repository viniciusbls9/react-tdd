import React from 'react'
import { Icon, IconName } from '@/presentation/components'
import Styles from './survey-item-styles.scss'

const SurveyItem: React.FC = () => {
  return (
  <li className={Styles.surveyItemWrap}>
    <div className={Styles.surveyContent}>
      <Icon className={Styles.iconWrap} iconName={IconName.thumbDown} />
      <time>
        <span className={Styles.day}>22</span>
        <span className={Styles.month}>03</span>
        <span className={Styles.year}>2020</span>
      </time>
      <p>Qual é seu framework web favorito?</p>
    </div>
    <footer>Ver resultado</footer>
  </li>
  )
}

export default SurveyItem
