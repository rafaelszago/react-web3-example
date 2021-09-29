import React, { useContext } from 'react'
import { Button, Card, Col, Layout, Row, Space } from 'antd'
import { Web3Context } from '../contexts'
import { LogoIcon } from '../components'

export const SignIn: React.FC = () => {
  const { hasMetamask, connectWallet } = useContext(Web3Context)

  return (
    <Layout.Content>
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col span={6} style={{ textAlign: 'center' }}>
          <Space size={32} direction="vertical">
            <LogoIcon size="large" />
            <Card>
              <Space size={16} direction="vertical">
                <div>
                  <h2>Sign in</h2>
                  <p>Decentralized application with React + Web3</p>
                </div>
                <Button
                  type="primary"
                  size="large"
                  onClick={async () => await connectWallet()}
                  block
                  disabled={!hasMetamask}
                >
                  Connect wallet
                </Button>
              </Space>
            </Card>
            <p>
              {hasMetamask
                ? ''
                : 'You dont have Metamask installed. Download it in https://metamask.io/'}
            </p>
          </Space>
        </Col>
      </Row>
    </Layout.Content>
  )
}
