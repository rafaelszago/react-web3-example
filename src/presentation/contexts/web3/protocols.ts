import { AccountModel } from '@/domain/models'
import { GetAccount, RequireChain } from '@/domain/usecase'

export type Web3ContextData = {
  account?: AccountModel
  connected: boolean
  hasMetamask: boolean
  connectAccount?: () => Promise<void>
}

export type Web3ProviderProps = {
  children: any
  web3GetAccount: GetAccount
  ethereumRequireChain: RequireChain
}
