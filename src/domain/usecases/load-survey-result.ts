export interface LoadSurveyResult {
  load: () => Promise<LoadSurveyResult.Model>
}

export namespace LoadSurveyResult {
  export type Model = {
    question: string
    date: Date
    answer: [{
      image?: string
      answer: string
      count: number
      percent: number
    }]
  }
}
