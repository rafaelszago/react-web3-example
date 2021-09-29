/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { AccountModel } from '@/domain/models/account-model'
import React, { createContext, useCallback, useEffect, useState } from 'react'
import { Web3ContextData, Web3ProviderProps } from './protocols'

declare const window: any

export const Web3Context = createContext<Web3ContextData>({} as Web3ContextData)

export const Web3Provider: React.FC<Web3ProviderProps> = ({
  children,
  ethereumRequireChain,
  web3ConnectWallet,
  web3GetAccount
}: Web3ProviderProps) => {
  const [account, setAccount] = useState<AccountModel>(null)
  const [connected, setConnected] = useState<boolean>(false)
  const [hasMetamask, setHasMetamask] = useState<boolean>(false)

  const loadData = useCallback(async () => {
    await ethereumRequireChain.require({ chainName: 'localhost' })
  }, [ethereumRequireChain])

  const connectWallet = useCallback(async () => {
    const isConnected = await web3ConnectWallet.connect()
    setConnected(isConnected)
  }, [web3ConnectWallet])

  useEffect(() => {
    if (!window.ethereum) {
      setHasMetamask(false)
    } else {
      setHasMetamask(true)
      loadData()
    }
  }, [])

  return (
    <Web3Context.Provider
      value={{ account, connected, hasMetamask, connectWallet }}
    >
      {children}
    </Web3Context.Provider>
  )
}
