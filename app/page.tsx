'use client'

import React from 'react'
import Link from 'next/link'
import { Card, Row, Col, Typography, Button, Space, Layout } from 'antd'
import { motion } from 'framer-motion'
import { 
  ExperimentOutlined, 
  HeartOutlined,
  RobotOutlined 
} from '@ant-design/icons'

const { Title, Text } = Typography
const { Content } = Layout

interface ChakraTestResult {
  lastTest: string
  summary: string
  recommendations: string[]
  energyBalance: string[]
}

export default function Home() {
  const [testResult, setTestResult] = React.useState<ChakraTestResult | null>(null)

  React.useEffect(() => {
    const savedResult = localStorage.getItem('chakraTestResult')
    if (savedResult) {
      setTestResult(JSON.parse(savedResult))
    }
  }, [])

  return (
    <Layout style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f3ff 0%, #e0e7ff 100%)' }}>
      <Content style={{ padding: '2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Title level={1} style={{ textAlign: 'center', marginBottom: '2rem', color: '#4338ca' }}>
            脉轮能量平衡
          </Title>

          <Row gutter={[16, 16]} style={{ marginBottom: '2rem' }}>
            <Col xs={12} md={6}>
              <NavCard 
                href="/test"
                title="脉轮测试"
                icon={<ExperimentOutlined />}
              />
            </Col>
            <Col xs={12} md={6}>
              <NavCard 
                href="/crystals"
                title="水晶介绍"
                icon={<ExperimentOutlined />}
              />
            </Col>
            <Col xs={12} md={6}>
              <NavCard 
                href="/aromatherapy"
                title="精油介绍"
                icon={<HeartOutlined />}
              />
            </Col>
            <Col xs={12} md={6}>
              <NavCard 
                href="/ask-ai"
                title="Ask AI"
                icon={<RobotOutlined />}
              />
            </Col>
          </Row>

          <Row gutter={24}>
            <Col xs={24} md={12}>
              <Card
                style={{ height: '100%' }}
                cover={
                  <div style={{ 
                    padding: '2rem',
                    background: 'linear-gradient(135deg, #f3e8ff 0%, #e0e7ff 100%)'
                  }}>
                    <div style={{
                      width: '8rem',
                      height: '8rem',
                      margin: '0 auto',
                      background: '#fff',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem'
                    }}>
                      ✨
                    </div>
                  </div>
                }
              >
                <Card.Meta
                  title={<Text style={{ fontSize: '1.25rem', textAlign: 'center' }}>欢迎来到你的能量空间</Text>}
                />
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Space direction="vertical" style={{ width: '100%' }}>
                {testResult ? (
                  <>
                    <ResultCard 
                      title="上次测试结果"
                      content={testResult.summary}
                      icon="📊"
                    />
                    <ResultCard 
                      title="能量提升建议"
                      content={testResult.recommendations.join('\n')}
                      icon="⭐"
                    />
                    <ResultCard 
                      title="平衡方法"
                      content={testResult.energyBalance.join('\n')}
                      icon="🌟"
                    />
                  </>
                ) : (
                  <Card style={{ textAlign: 'center' }}>
                    <Space direction="vertical" align="center">
                      <Text style={{ fontSize: '2.5rem' }}>🌈</Text>
                      <Text style={{ fontSize: '1.125rem' }}>还没有测试记录，开始你的脉轮之旅吧！</Text>
                      <Link href="/test">
                        <Button type="primary" size="large">
                          开始测试
                        </Button>
                      </Link>
                    </Space>
                  </Card>
                )}
              </Space>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  )
}

function NavCard({ href, title, icon }: { href: string; title: string; icon: React.ReactNode }) {
  return (
    <Link href={href}>
      <motion.div whileHover={{ scale: 1.02 }}>
        <Card 
          style={{ textAlign: 'center', height: '100%', cursor: 'pointer' }}
          styles={{ 
            body: { padding: '24px' }
          }}
        >
          <Space direction="vertical" align="center" size="middle">
            <div style={{
              fontSize: '2.5rem',
              color: 'var(--ant-primary-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '4rem',
              height: '4rem',
              background: 'rgba(var(--ant-primary-color-rgb), 0.05)',
              borderRadius: '50%'
            }}>
              {icon}
            </div>
            <Text strong style={{ fontSize: '1.125rem' }}>
              {title}
            </Text>
          </Space>
        </Card>
      </motion.div>
    </Link>
  )
}

function ResultCard({ title, content, icon }: { title: string; content: string; icon: string }) {
  return (
    <Card>
      <Space align="center" style={{ marginBottom: '1rem' }}>
        <Text style={{ fontSize: '1.5rem' }}>{icon}</Text>
        <Text strong style={{ fontSize: '1.125rem' }}>{title}</Text>
      </Space>
      <Text style={{ whiteSpace: 'pre-line' }}>{content}</Text>
    </Card>
  )
} 