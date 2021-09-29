import React, { useContext } from 'react'
import { Web3Context } from '../contexts'
import { App } from './App'
import { SignIn } from './SignIn'

const Home: React.FC = () => {
  const { connected } = useContext(Web3Context)

  if (!connected) {
    return <SignIn />
  }
  return <App />
}

export default Home
