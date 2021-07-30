import * as helper from '../support/http-mocks'
import faker from 'faker'

export const mockInvalidCredentialsError = (): void => helper.mockInvalidCredentialsError(/login/)
export const mockUnexpectedError = (): void => helper.mockUnexpectedError(/login/, 'POST')
export const mockOk = (): void => helper.mockOk(/login/, 'POST', { accessToken: faker.datatype.uuid() })
export const mockInvalidData = (): void => helper.mockOk(/login/, 'POST', { invalid: faker.datatype.uuid() })
