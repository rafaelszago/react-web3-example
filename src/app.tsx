import ReactDOM from 'react-dom'
import React from 'react'
import Home from '@/presentation/pages/Home'
import '@/presentation/styles/app.less'
import { Web3Provider } from './presentation/contexts'
import { Layout } from 'antd'
import {
  makeEthereumRequireChain,
  makeWeb3ConnectWallet,
  makeWeb3GetAccount
} from './main/factories/usecase'

ReactDOM.render(
  <Web3Provider
    ethereumRequireChain={makeEthereumRequireChain()}
    web3ConnectWallet={makeWeb3ConnectWallet()}
    web3GetAccount={makeWeb3GetAccount()}
  >
    <Layout>
      <Home />
    </Layout>
  </Web3Provider>,
  document.getElementById('main')
)
