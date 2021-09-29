import { Col, Layout, Row } from 'antd'
import React, { useContext } from 'react'
import { LogoIcon, WalletIcon } from '../components'
import { Web3Context } from '../contexts'

export const App: React.FC = () => {
  const { account } = useContext(Web3Context)

  return (
    <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Row align="middle">
        <Col span={2}>
          <div
            style={{
              boxSizing: 'border-box',
              height: '64px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <LogoIcon size="small" />
          </div>
        </Col>
        <Col span={19}></Col>
        <Col span={3}>
          <div className="wallet-badge">
            <div className="value">
              <span>{account?.balanceEther} ETH</span>
            </div>
            <div className="address">
              <span>{account?.shortAddress}</span>
              <WalletIcon address={account?.shortAddress} />
            </div>
          </div>
        </Col>
      </Row>
    </Layout.Header>
  )
}
