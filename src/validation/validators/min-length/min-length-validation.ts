import { InvalidFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols/field-validation'

export class MinLengthValidation implements FieldValidation {
  constructor (readonly field: string, private readonly minLength: number) { }
  validate (input: object): Error {
    return input[this.field]?.length < this.minLength ? new InvalidFieldError() : null
  }
}
