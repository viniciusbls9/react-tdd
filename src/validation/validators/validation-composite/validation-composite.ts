import { Validation } from '@/presentation/protocols/validation'
import { FieldValidation } from '@/validation/protocols/field-validation'

export class ValidationComposite implements Validation {
  private constructor (private readonly validator: FieldValidation[]) { }

  static build (validator: FieldValidation[]): ValidationComposite {
    return new ValidationComposite(validator)
  }

  validate (fieldName: string, input: object): string {
    const validators = this.validator.filter(v => v.field === fieldName)
    for (const validator of validators) {
      const error = validator.validate(input)
      if (error) {
        return error.message
      }
    }
  }
}
