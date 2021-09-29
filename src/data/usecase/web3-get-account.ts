import { AccountModel } from '@/domain/models'
import { GetAccount } from '@/domain/usecase'
import { Web3 } from '../protocols'

export class Web3GetAccount implements GetAccount {
  constructor(private readonly web3: Web3) {}

  async get(address: string): Promise<AccountModel> {
    const balanceWei = await this.web3.eth.getBalance(address)
    const balanceEther = this.web3.utils.fromWei(balanceWei, 'ether')
    const initialShortenAddress = address.slice(0, 4)
    const finalShortenAddress = address.slice(
      address.length - 3,
      address.length
    )
    const shortAddress = `${initialShortenAddress}...${finalShortenAddress}`

    return {
      balanceWei,
      balanceEther,
      shortAddress,
      address
    }
  }
}
