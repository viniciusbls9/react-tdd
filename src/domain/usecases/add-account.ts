import { AccountModel } from '@/domain/models'

export interface AddAccount {
  add: (params: AddAccount.Params) => Promise<AddAccount.Model>
}
export namespace AddAccount {
  // Objeto em forma de Type para armazenar os parametros da interface Authentication
  export type Params = {
    name: string
    email: string
    password: string
    passwordConfirmation: string
  }
  export type Model = AccountModel
}
