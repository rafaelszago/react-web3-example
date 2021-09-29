import React, { useEffect, useRef } from 'react'
import Jazzicon from '@metamask/jazzicon'

type Props = {
  address: string
}

export const WalletIcon: React.FC<Props> = ({ address }: Props) => {
  const ref = useRef<HTMLDivElement>()

  useEffect(() => {
    if (address) {
      ref.current.innerHTML = ''
      ref.current.appendChild(Jazzicon(20, parseInt(address.slice(2, 10), 16)))
    }
  }, [address])

  return (
    <>
      <div ref={ref as any} className="address-icon" />
    </>
  )
}
