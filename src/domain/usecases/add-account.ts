import { AccountModel } from '@/domain/models'

// Objeto em forma de Type para armazenar os parametros da interface Authentication
export type AddAccountParams = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export interface AddAccount {
  add: (params: AddAccountParams) => Promise<AccountModel>
}
