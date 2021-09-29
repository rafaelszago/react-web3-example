import { ConnectWallet } from '@/domain/usecase'
import { Web3 } from '../protocols'

export class Web3ConnectWallet implements ConnectWallet {
  constructor(private readonly web3: Web3) {}

  async connect(): Promise<boolean> {
    const accounts = await this.web3.eth.requestAccounts()
    return !!accounts.length
  }
}
