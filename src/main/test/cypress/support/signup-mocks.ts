import * as helper from '../support/http-mocks'
import faker from 'faker'

export const mockEmailInUseError = (): void => helper.mockEmailInUseError(/signup/)
export const mockUnexpectedError = (): void => helper.mockUnexpectedError(/signup/, 'POST')
export const mockOk = (): void => helper.mockOk(/signup/, 'POST', { accessToken: faker.datatype.uuid(), name: faker.name.findName() })
export const mockInvalidData = (): void => helper.mockOk(/signup/, 'POST', { invalid: faker.datatype.uuid() })
