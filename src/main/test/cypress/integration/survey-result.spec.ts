import * as Helper from '../utils/helpers'
import * as Http from '../utils/http-mocks'

const path = /surveys/
const mockLoadSuccess = (): void => Http.mockOk(path, 'GET', 'fx:load-survey-result')

describe('SurveyResult', () => {
  describe('load', () => {
    const mockUnexpectedError = (): void => Http.mockServerError(path, 'GET')
    const mockAcessDeniedError = (): void => Http.mockForbiddenError(path, 'GET')

    beforeEach(() => {
      cy.fixture('account').then(account => {
        Helper.setLocalStorageItem('account', account)
      })
    })

    it('Should present error on UnexpectedError', () => {
      mockUnexpectedError()
      cy.visit('/surveys/any_id')
      cy.getByTestId('error').should('contain.text', 'Algo de errado aconteceu. Tente novamente em breve.')
    })

    it('Should reload on button click', () => {
      mockUnexpectedError()
      cy.visit('/surveys/any_id')
      cy.getByTestId('error').should('contain.text', 'Algo de errado aconteceu. Tente novamente em breve.')
      mockLoadSuccess()
      cy.getByTestId('reload').click()
      cy.getByTestId('question').should('exist')
    })

    it('Should logout on AccessDeniedError', () => {
      mockAcessDeniedError()
      cy.visit('/surveys/any_id')
      Helper.testUrl('/login')
    })

    it('Should present survey result', () => {
      mockLoadSuccess()
      cy.visit('/surveys/any_id')
      cy.getByTestId('question').should('have.text', 'Question')
      cy.getByTestId('day').should('have.text', '03')
      cy.getByTestId('month').should('have.text', 'fev')
      cy.getByTestId('year').should('have.text', '2018')
      cy.get('li:nth-child(1)').then(li => {
        assert.equal(li.find('[data-testid="answer"]').text(), 'any_answer')
        assert.equal(li.find('[data-testid="percent"]').text(), '70%')
        assert.equal(li.find('[data-testid="images"]').attr('src'), 'any_image')
      })
      cy.get('li:nth-child(2)').then(li => {
        assert.equal(li.find('[data-testid="answer"]').text(), 'any_answer_2')
        assert.equal(li.find('[data-testid="percent"]').text(), '30%')
        assert.notExists(li.find('[data-testid="images"]'))
      })
    })

    it('Should goto SurveyList on back button click', () => {
      cy.visit('')
      mockLoadSuccess()
      cy.visit('/surveys/any_id')
      cy.getByTestId('back-button').click()
      Helper.testUrl('/')
    })
  })

  describe('save', () => {
    const mockUnexpectedError = (): void => Http.mockServerError(path, 'PUT')
    const mockAcessDeniedError = (): void => Http.mockForbiddenError(path, 'PUT')
    const mockSaveSuccess = (): void => Http.mockOk(path, 'PUT', 'fx:save-survey-result')

    beforeEach(() => {
      cy.fixture('account').then(account => {
        Helper.setLocalStorageItem('account', account)
      })
      mockLoadSuccess()
      cy.visit('/surveys/any_id')
    })

    it('Should present error on UnexpectedError', () => {
      mockUnexpectedError()
      cy.get('li:nth-child(2)').click()
      cy.getByTestId('error').should('contain.text', 'Algo de errado aconteceu. Tente novamente em breve.')
    })

    it('Should logout on AccessDeniedError', () => {
      mockAcessDeniedError()
      cy.get('li:nth-child(2)').click()
      Helper.testUrl('/login')
    })

    it('Should present survey result', () => {
      mockSaveSuccess()
      cy.get('li:nth-child(2)').click()
      cy.getByTestId('question').should('have.text', 'Other Question')
      cy.getByTestId('day').should('have.text', '23')
      cy.getByTestId('month').should('have.text', 'mar')
      cy.getByTestId('year').should('have.text', '2020')
      cy.get('li:nth-child(1)').then(li => {
        assert.equal(li.find('[data-testid="answer"]').text(), 'other_answer')
        assert.equal(li.find('[data-testid="percent"]').text(), '50%')
        assert.equal(li.find('[data-testid="images"]').attr('src'), 'other_image')
      })
      cy.get('li:nth-child(2)').then(li => {
        assert.equal(li.find('[data-testid="answer"]').text(), 'other_answer_2')
        assert.equal(li.find('[data-testid="percent"]').text(), '50%')
        assert.notExists(li.find('[data-testid="images"]'))
      })
    })
  })
})
