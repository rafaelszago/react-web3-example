import { EthereumRequireChain } from '@/data/usecase'
import { ethereum } from '@/infra/clients/ethereum'

export const makeEthereumRequireChain = (): any =>
  new EthereumRequireChain(ethereum)
