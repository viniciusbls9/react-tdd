import { AccountModel } from '@/domain/models'
import { makeLocalStorageAdapter } from '../factories/cache/local-storage-adapter-factory'

export const setCurrentAccountAdapter = (account: AccountModel): void => {
  makeLocalStorageAdapter().set('account', account)
}

export const getCurrentAccountAdapter = (): AccountModel => {
  return makeLocalStorageAdapter().get('account')
}
