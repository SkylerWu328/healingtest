'use client'

import React from 'react'
import { Layout, Typography, Card, Button, Row, Col, Tag } from 'antd'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const { Content } = Layout
const { Title, Paragraph } = Typography

interface Oil {
  id: number
  name: string
  description: string
  benefits: string[]
  usage: string[]
  image: string
  properties: string[]
}

const oils: Oil[] = [
  {
    id: 1,
    name: '薰衣草精油',
    description: '薰衣草精油以其镇静和放松特性而闻名，是最受欢迎的精油之一。',
    benefits: ['改善睡眠', '减轻压力', '舒缓情绪', '护理皮肤'],
    usage: ['香薰扩香', '按摩调理', '浴盐配方', '枕头喷雾'],
    image: 'https://placehold.co/400x300/lavender/white?text=薰衣草精油',
    properties: ['镇静', '抗菌', '平衡']
  },
  {
    id: 2,
    name: '茶树精油',
    description: '茶树精油具有强大的抗菌和净化作用，适合皮肤护理和空气净化。',
    benefits: ['净化空气', '改善肌肤问题', '提升免疫力', '清洁消毒'],
    usage: ['空气喷雾', '皮肤护理', '清洁配方', '蒸汽吸入'],
    image: 'https://placehold.co/400x300/green/white?text=茶树精油',
    properties: ['抗菌', '净化', '清新']
  },
  {
    id: 3,
    name: '柑橘精油',
    description: '柑橘精油能够提振心情，增添活力，带来阳光般的温暖感。',
    benefits: ['提升心情', '增强能量', '帮助集中注意力', '净化空气'],
    usage: ['香薰扩香', '清洁喷雾', '按摩油调配', '浴盐配方'],
    image: 'https://placehold.co/400x300/orange/white?text=柑橘精油',
    properties: ['提振', '温暖', '愉悦']
  }
]

export default function Aromatherapy() {
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
            精油疗愈指南
          </Title>

          <Row gutter={[24, 24]}>
            {oils.map(oil => (
              <Col key={oil.id} xs={24} sm={24} md={8}>
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
                    <Image
                      src={oil.image}
                      alt={oil.name}
                      fill
                      style={{ objectFit: 'cover', borderRadius: '8px' }}
                    />
                  </div>
                  
                  <Title level={3}>{oil.name}</Title>
                  <Paragraph>{oil.description}</Paragraph>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    {oil.properties.map((property, index) => (
                      <Tag key={index} color="purple" style={{ marginRight: '0.5rem' }}>
                        {property}
                      </Tag>
                    ))}
                  </div>
                  
                  <Title level={5}>功效：</Title>
                  <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    {oil.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                  
                  <Title level={5}>使用方法：</Title>
                  <ul style={{ paddingLeft: '1.5rem' }}>
                    {oil.usage.map((use, index) => (
                      <li key={index}>{use}</li>
                    ))}
                  </ul>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Content>
    </Layout>
  )
} 