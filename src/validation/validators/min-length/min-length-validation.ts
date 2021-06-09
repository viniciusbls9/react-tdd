import { InvalidFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols/field-validation'

export class MinLengthValidation implements FieldValidation {
  constructor (readonly field: string, private readonly minLength: number) { }
  validate (value: string): Error {
    return value.length >= this.minLength ? null : new InvalidFieldError()
  }
}
