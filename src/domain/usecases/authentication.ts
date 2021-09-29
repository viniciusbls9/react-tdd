import { AccountModel } from '@/domain/models'

export interface Authentication {
  auth: (params: Authentication.Params) => Promise<Authentication.Model>
}
export namespace Authentication {
  // Objeto em forma de Type para armazenar os parametros da interface Authentication
  export type Params = {
    email: string
    password: string
  }
  export type Model = AccountModel
}
