import { AccountModel } from '@/domain/models/account-model'

// Objeto em forma de Type para armazenar os parametros da interface Authentication
export type AuthenticationParams = {
  email: string
  password: string
}

export interface Authentication {
  auth: (params: AuthenticationParams) => Promise<AccountModel>
}
