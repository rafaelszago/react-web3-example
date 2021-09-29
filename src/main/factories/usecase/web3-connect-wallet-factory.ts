import { Web3ConnectWallet } from '@/data/usecase'
import { web3 } from '@/infra/clients'

export const makeWeb3ConnectWallet = (): any => new Web3ConnectWallet(web3)
