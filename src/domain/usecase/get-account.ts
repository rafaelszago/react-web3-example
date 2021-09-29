import { AccountModel } from '@/domain/models/account-model'

export interface GetAccount {
  get: (address: string) => Promise<AccountModel>
}
