'use client'

import React, { useState, useEffect } from 'react'
import { Layout, Typography, Card, Row, Col, Button, Space } from 'antd'
import { 
  ExperimentOutlined, 
  CrownOutlined,
  FireOutlined,
  RobotOutlined,
  StarOutlined,
  ThunderboltOutlined,
  HeartOutlined
} from '@ant-design/icons'
import { useRouter } from 'next/navigation'

const { Content } = Layout
const { Title, Text, Paragraph } = Typography

interface ChakraTestResult {
  lastTest: string
  summary: string
  recommendations: string[]
  energyBalance: string[]
}

const navItems = [
  {
    title: '脉轮测试',
    icon: <ExperimentOutlined />,
    path: '/test',
    color: '#8B5CF6'
  },
  {
    title: '水晶介绍',
    icon: <CrownOutlined />,
    path: '/crystals',
    color: '#EC4899'
  },
  {
    title: '精油介绍',
    icon: <FireOutlined />,
    path: '/aromatherapy',
    color: '#F59E0B'
  },
  {
    title: 'Ask AI',
    icon: <RobotOutlined />,
    path: '/ask-ai',
    color: '#10B981'
  }
]

export default function Home() {
  const router = useRouter()
  const [testResult, setTestResult] = useState<ChakraTestResult | null>(null)

  useEffect(() => {
    const savedResult = localStorage.getItem('chakraTestResult')
    if (savedResult) {
      setTestResult(JSON.parse(savedResult))
    }
  }, [])

  return (
    <Layout>
      <Content style={{ 
        minHeight: '100vh',
        padding: '2rem',
        background: 'linear-gradient(135deg, #f5f3ff 0%, #e0e7ff 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Title 
            level={1} 
            style={{ 
              textAlign: 'center', 
              marginBottom: '3rem',
              color: '#4338ca'
            }}
          >
            脉轮能量平衡
          </Title>

          {/* 导航卡片 */}
          <Row gutter={[16, 16]} style={{ marginBottom: '3rem' }}>
            {navItems.map((item) => (
              <Col key={item.path} xs={12} sm={12} md={6}>
                <Card
                  hoverable
                  onClick={() => router.push(item.path)}
                  style={{ textAlign: 'center', height: '100%' }}
                  styles={{
                    body: {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '2rem'
                    }
                  }}
                >
                  <div style={{
                    fontSize: '2rem',
                    color: item.color,
                    marginBottom: '1rem'
                  }}>
                    {item.icon}
                  </div>
                  <Text strong style={{ fontSize: '1.1rem' }}>
                    {item.title}
                  </Text>
                </Card>
              </Col>
            ))}
          </Row>

          {/* 内容区域 */}
          <Row gutter={[24, 24]}>
            {/* 左侧用户信息 */}
            <Col xs={24} md={12}>
              <Card
                styles={{
                  body: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '2rem'
                  }
                }}
              >
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #c084fc 0%, #818cf8 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <StarOutlined style={{ fontSize: '3rem', color: 'white' }} />
                </div>
                <Title level={3} style={{ margin: 0 }}>
                  欢迎来到你的能量空间
                </Title>
              </Card>
            </Col>

            {/* 右侧测试结果 */}
            <Col xs={24} md={12}>
              <Space direction="vertical" style={{ width: '100%' }} size="large">
                {testResult ? (
                  <>
                    <ResultCard 
                      icon={<ThunderboltOutlined />}
                      title="上次测试结果"
                      content={testResult.summary}
                    />
                    <ResultCard 
                      icon={<StarOutlined />}
                      title="能量提升建议"
                      content={testResult.recommendations.join('\n')}
                    />
                    <ResultCard 
                      icon={<HeartOutlined />}
                      title="平衡方法"
                      content={testResult.energyBalance.join('\n')}
                    />
                  </>
                ) : (
                  <Card>
                    <div style={{ textAlign: 'center' }}>
                      <StarOutlined style={{ 
                        fontSize: '3rem', 
                        color: '#818cf8',
                        marginBottom: '1rem'
                      }} />
                      <Paragraph>
                        还没有测试记录，开始你的脉轮之旅吧！
                      </Paragraph>
                      <Button 
                        type="primary"
                        size="large"
                        onClick={() => router.push('/test')}
                        style={{
                          background: 'linear-gradient(to right, #818cf8, #4338ca)',
                          border: 'none'
                        }}
                      >
                        开始测试
                      </Button>
                    </div>
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

function ResultCard({ 
  icon, 
  title, 
  content 
}: { 
  icon: React.ReactNode
  title: string
  content: string 
}) {
  return (
    <Card>
      <Space align="center" style={{ marginBottom: '1rem' }}>
        <span style={{ 
          fontSize: '1.5rem',
          color: '#4338ca'
        }}>
          {icon}
        </span>
        <Text strong style={{ fontSize: '1.1rem' }}>
          {title}
        </Text>
      </Space>
      <Paragraph style={{ whiteSpace: 'pre-line', margin: 0 }}>
        {content}
      </Paragraph>
    </Card>
  )
} 