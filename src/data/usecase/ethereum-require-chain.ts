import { RequireChain } from '@/domain/usecase'
import { Ethereum } from '../protocols/ethereum'

const CHAIN_DATA = {
  bsc: {
    chainId: 56,
    chainIdHex: '0x38',
    chainName: 'Binance Smart Chain',
    rpcUrls: ['https://bsc-dataseed.binance.org/']
  },
  localhost: {
    chainId: 56,
    chainIdHex: '0x38',
    chainName: 'Localhost',
    rpcUrls: ['https://bsc-dataseed.binance.org/']
  }
}

export class EthereumRequireChain implements RequireChain {
  constructor(private readonly ethereum: Ethereum) {}

  async require(params: RequireChain.Params): Promise<void> {
    const selectedChain = await this.ethereum.request({
      method: 'eth_chainId'
    })

    const chain = CHAIN_DATA[params.chainName]

    if (selectedChain !== chain?.chainIdHex) {
      try {
        await this.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: chain.chainIdHex }]
        })
      } catch (err) {
        await this.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: chain.chainIdHex,
              chainName: chain.chainIdHex,
              rpcUrls: chain.rpcUrls
            }
          ]
        })
      }
    }
  }
}
