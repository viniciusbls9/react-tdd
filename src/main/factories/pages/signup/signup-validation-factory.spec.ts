import { makeSignUpValidation } from './signup-validation-factory'
import { EmailValidation, MinLengthValidation, RequiredFieldValidation, ValidationComposite, CompareFieldsValidation } from '@/validation/validators'

describe('SignUpValidationFactory', () => {
  test('Should make compose ValidationComposite with correct validations', () => {
    const composite = makeSignUpValidation()
    expect(composite).toEqual(ValidationComposite.build([
      new RequiredFieldValidation('name'),
      new MinLengthValidation('name', 5),
      new RequiredFieldValidation('email'),
      new EmailValidation('email'),
      new RequiredFieldValidation('password'),
      new MinLengthValidation('password', 5),
      new RequiredFieldValidation('passwordConfirmation'),
      new CompareFieldsValidation('passwordConfirmation', 'password')
    ]))
  })
})
