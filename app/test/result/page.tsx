'use client'

import React from 'react'
import { Layout, Typography, Card, Button, Space } from 'antd'
import { useRouter, useSearchParams } from 'next/navigation'
import { GemIcon, Droplets, MessageSquareText } from 'lucide-react'

const { Content } = Layout
const { Title, Paragraph } = Typography

interface ChakraResult {
  chakra: string
  score: number
  suggestion: string
}

const chakraSuggestions: Record<string, string> = {
  crown: "建议加强冥想练习，提升精神意识。",
  "third-eye": "可以尝试视觉化练习，增强直觉能力。",
  throat: "建议多进行表达练习，提高沟通能力。",
  heart: "可以尝试爱的冥想，打开心轮。",
  solar: "建议进行自信心建设，增强个人能量。",
}

export default function TestResult() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const results = searchParams.get('results') 
    ? JSON.parse(decodeURIComponent(searchParams.get('results')!))
    : []

  // 找出得分最低的脉轮
  const lowestChakra = results.reduce((prev: ChakraResult, current: ChakraResult) => 
    current.score < prev.score ? current : prev
  )

  return (
    <Layout style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f3ff 0%, #e0e7ff 100%)' }}>
      <Content style={{ padding: '2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Title level={1} style={{ textAlign: 'center', marginBottom: '2rem', color: '#4338ca' }}>
            测试结果
          </Title>

          <Card styles={{ body: { marginBottom: '2rem' } }}>
            <Title level={3}>能量状态分析</Title>
            <Paragraph>
              根据测试结果显示，您的{lowestChakra.chakra}脉轮能量相对较弱。
              {chakraSuggestions[lowestChakra.chakra]}
            </Paragraph>
            
            {results.map((result: ChakraResult) => (
              <div key={result.chakra} style={{ marginBottom: '1rem' }}>
                <Title level={5}>{result.chakra}脉轮</Title>
                <div style={{ 
                  width: `${result.score}%`, 
                  height: '20px',
                  background: '#818cf8',
                  borderRadius: '10px',
                  transition: 'width 0.5s ease-in-out'
                }} />
              </div>
            ))}
          </Card>

          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Button 
              type="primary"
              size="large"
              icon={<GemIcon />}
              block
              onClick={() => router.push('/crystals')}
              style={{ height: '60px', fontSize: '1.1rem' }}
            >
              推荐水晶
            </Button>

            <Button
              type="primary"
              size="large"
              icon={<Droplets />}
              block
              onClick={() => router.push('/aromatherapy')}
              style={{ height: '60px', fontSize: '1.1rem' }}
            >
              精油配方
            </Button>

            <Button
              type="primary"
              size="large"
              icon={<MessageSquareText />}
              block
              onClick={() => router.push('/ask-ai')}
              style={{ height: '60px', fontSize: '1.1rem' }}
            >
              Ask AI
            </Button>
          </Space>
        </div>
      </Content>
    </Layout>
  )
} 