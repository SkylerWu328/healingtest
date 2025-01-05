'use client'

import React from 'react'
import { Layout, Typography, Card, Button, Row, Col } from 'antd'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

const { Content } = Layout
const { Title, Paragraph } = Typography

interface Crystal {
  id: number
  name: string
  description: string
  benefits: string[]
  image: string
  chakra: string
}

const crystals: Crystal[] = [
  {
    id: 1,
    name: '紫水晶',
    description: '紫水晶是一种强大的治疗石，能够净化能量场并带来平静。',
    benefits: ['增强直觉', '改善睡眠', '减轻压力', '促进冥想'],
    image: 'https://placehold.co/400x300/purple/white?text=紫水晶',
    chakra: '顶轮'
  },
  {
    id: 2,
    name: '玫瑰石英',
    description: '玫瑰石英被称为爱之石，能够打开心轮，促进自我接纳和疗愈。',
    benefits: ['增进爱的能量', '提升自我价值感', '改善人际关系', '平衡情绪'],
    image: 'https://placehold.co/400x300/pink/white?text=玫瑰石英',
    chakra: '心轮'
  },
  {
    id: 3,
    name: '黄水晶',
    description: '黄水晶能够激活太阳神经丛轮，增强个人力量和自信。',
    benefits: ['提升自信', '增强意志力', '改善消化', '促进正能量'],
    image: 'https://placehold.co/400x300/yellow/white?text=黄水晶',
    chakra: '太阳神经丛轮'
  }
]

export default function Crystals() {
  const router = useRouter()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Button 
        icon={<ArrowLeft />}
        onClick={() => router.push('/')}
        style={{ 
          position: 'absolute',
          left: '2rem',
          top: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 1
        }}
      >
        返回主页
      </Button>
      
      <Content style={{ padding: '4rem 2rem 2rem', background: 'linear-gradient(135deg, #f5f3ff 0%, #e0e7ff 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Title level={1} style={{ textAlign: 'center', marginBottom: '3rem', color: '#4338ca' }}>
            疗愈水晶图鉴
          </Title>

          <Row gutter={[24, 24]}>
            {crystals.map(crystal => (
              <Col key={crystal.id} xs={24} sm={24} md={8}>
                <Card
                  hoverable
                  styles={{ 
                    body: { 
                      padding: '1.5rem',
                      height: '100%'
                    }
                  }}
                >
                  <div style={{ position: 'relative', width: '100%', height: '200px', marginBottom: '1rem' }}>
                    <img
                      src={crystal.image}
                      alt={crystal.name}
                      style={{ 
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '8px'
                      }}
                    />
                  </div>
                  
                  <Title level={3}>{crystal.name}</Title>
                  <Paragraph>{crystal.description}</Paragraph>
                  
                  <Title level={5}>主要功效：</Title>
                  <ul style={{ paddingLeft: '1.5rem' }}>
                    {crystal.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                  
                  <Paragraph style={{ marginTop: '1rem', color: '#6366f1' }}>
                    对应脉轮：{crystal.chakra}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Content>
    </Layout>
  )
} 