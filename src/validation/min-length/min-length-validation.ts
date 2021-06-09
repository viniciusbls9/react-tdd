import { InvalidFieldError } from '../errors'
import { FieldValidation } from '../protocols/field-validation'

export class MinLengthValidation implements FieldValidation {
  constructor (readonly field: string, private readonly minLength: number) { }
  validate (value: string): Error {
    return new InvalidFieldError()
  }
}
