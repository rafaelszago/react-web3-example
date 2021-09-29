import { Web3GetAccount } from '@/data/usecase/web3-get-account'
import { web3 } from '@/infra/clients/web3'

export const makeWeb3GetAccount = (): any => new Web3GetAccount(web3)
