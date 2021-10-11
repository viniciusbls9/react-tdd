import * as Http from '../support/http-mocks'

export const mockUnexpectedError = (): void => Http.mockServerError(/surveys/, 'GET')
