import { AccountModel } from '@/domain/models'
import { ConnectWallet, GetAccount, RequireChain } from '@/domain/usecase'

export type Web3ContextData = {
  account?: AccountModel
  connected: boolean
  hasMetamask: boolean
  connectWallet?: () => Promise<void>
}

export type Web3ProviderProps = {
  children: any
  ethereumRequireChain: RequireChain
  web3ConnectWallet: ConnectWallet
  web3GetAccount: GetAccount
}
