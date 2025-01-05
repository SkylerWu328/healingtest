'use client'

import React from 'react'
import { Layout, Typography, Card, Row, Col, Button, Space, Tag } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const { Content } = Layout
const { Title, Text, Paragraph } = Typography

interface Crystal {
  name: string
  description: string
  benefits: string[]
  chakra: string
}

interface ChakraCrystals {
  chakra: string
  color: string
  description: string
  crystals: Crystal[]
}

const chakraCrystals: ChakraCrystals[] = [
  {
    chakra: '顶轮',
    color: 'purple',
    description: '与精神意识和高层次能量连接的脉轮',
    crystals: [
      {
        name: '紫水晶',
        description: '被誉为"灵性之石"，能够净化心灵，提升精神意识',
        benefits: ['增强直觉', '促进冥想', '净化负面能量', '改善睡眠质量'],
        chakra: '顶轮'
      },
      {
        name: '白水晶',
        description: '纯净的能量放大器，有助于增强其他水晶的效果',
        benefits: ['增强能量', '提升意识', '净化空间', '促进清晰思维'],
        chakra: '顶轮'
      },
      {
        name: '紫锂辉',
        description: '高频振动的水晶，有助于连接更高维度的能量',
        benefits: ['增强灵性意识', '促进冥想深度', '开启第三眼', '提升直觉能力'],
        chakra: '顶轮'
      }
    ]
  },
  {
    chakra: '眉心轮',
    color: 'indigo',
    description: '与直觉和内在智慧相关的脉轮',
    crystals: [
      {
        name: '青金石',
        description: '深邃的蓝色宝石，能够开启内在智慧',
        benefits: ['增强洞察力', '促进真实表达', '增强记忆力', '平衡情绪'],
        chakra: '眉心轮'
      },
      {
        name: '蓝黄晶',
        description: '结合蓝色和金色能量的水晶，促进思维清晰',
        benefits: ['提升思维能力', '增强表达', '平衡理性与直觉', '促进沟通'],
        chakra: '眉心轮'
      }
    ]
  },
  {
    chakra: '喉轮',
    color: 'blue',
    description: '与表达和沟通相关的脉轮',
    crystals: [
      {
        name: '海蓝宝',
        description: '温和的蓝色能量，有助于清晰表达',
        benefits: ['促进沟通', '平静情绪', '增强创造力', '净化能量'],
        chakra: '喉轮'
      },
      {
        name: '青金石',
        description: '深蓝色的能量，增强真实表达的能力',
        benefits: ['增强表达', '促进诚实', '增强领导力', '促进内在平和'],
        chakra: '喉轮'
      }
    ]
  },
  {
    chakra: '心轮',
    color: 'green',
    description: '与爱、同理心和疗愈相关的脉轮',
    crystals: [
      {
        name: '绿萤石',
        description: '充满治愈能量的水晶，促进心轮开放',
        benefits: ['增强爱的能量', '促进疗愈', '平衡情绪', '增强同理心'],
        chakra: '心轮'
      },
      {
        name: '孔雀石',
        description: '强大的心轮水晶，有助于情感疗愈',
        benefits: ['促进情感疗愈', '保护心轮', '增强同情心', '转化负面情绪'],
        chakra: '心轮'
      }
    ]
  },
  {
    chakra: '太阳轮',
    color: 'yellow',
    description: '与个人力量和意志相关的脉轮',
    crystals: [
      {
        name: '黄水晶',
        description: '充满阳光能量的水晶，增强个人力量',
        benefits: ['增强自信', '提升能量', '促进积极性', '增强创造力'],
        chakra: '太阳轮'
      },
      {
        name: '虎眼石',
        description: '保护性的金黄色水晶，增强意志力',
        benefits: ['增强意志力', '提供保护', '增强专注力', '促进目标实现'],
        chakra: '太阳轮'
      }
    ]
  },
  {
    chakra: '骶轮',
    color: 'orange',
    description: '与创造力和情感相关的脉轮',
    crystals: [
      {
        name: '橙色方解石',
        description: '充满创造能量的水晶，激发灵感',
        benefits: ['增强创造力', '提升活力', '增强社交能力', '促进快乐'],
        chakra: '骶轮'
      },
      {
        name: '芬达石',
        description: '温暖的橙色能量，增强生命力',
        benefits: ['增强活力', '提升热情', '促进社交', '增强自信心'],
        chakra: '骶轮'
      }
    ]
  },
  {
    chakra: '根轮',
    color: 'red',
    description: '与基础能量和稳定性相关的脉轮',
    crystals: [
      {
        name: '红玛瑙',
        description: '稳定的红色能量，增强根部能量',
        benefits: ['增强稳定性', '提供保护', '增强活力', '促进安全感'],
        chakra: '根轮'
      },
      {
        name: '石榴石',
        description: '强大的保护石，增强生存能量',
        benefits: ['增强力量', '提供保护', '增强意志力', '促进稳定'],
        chakra: '根轮'
      }
    ]
  }
]

export default function Crystals() {
  const router = useRouter()

  return (
    <Layout>
      <Content style={{ 
        minHeight: '100vh',
        padding: '2rem',
        background: 'linear-gradient(135deg, #f5f3ff 0%, #e0e7ff 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Space style={{ marginBottom: '2rem' }}>
            <Button 
              icon={<ArrowLeftOutlined />}
              onClick={() => router.push('/')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              返回主页
            </Button>
          </Space>

          <Title 
            level={1} 
            style={{ 
              textAlign: 'center', 
              marginBottom: '3rem',
              color: '#4338ca'
            }}
          >
            脉轮水晶指南
          </Title>

          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            {chakraCrystals.map((chakraSection, index) => (
              <Card
                key={chakraSection.chakra}
                title={
                  <Space align="center">
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: chakraSection.color,
                    }} />
                    <Text strong style={{ fontSize: '1.25rem' }}>
                      {chakraSection.chakra}
                    </Text>
                  </Space>
                }
                styles={{
                  header: {
                    background: 'rgba(255, 255, 255, 0.5)',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.06)'
                  }
                }}
              >
                <Paragraph style={{ marginBottom: '2rem' }}>
                  {chakraSection.description}
                </Paragraph>

                <Row gutter={[16, 16]}>
                  {chakraSection.crystals.map((crystal, crystalIndex) => (
                    <Col key={crystal.name} xs={24} sm={24} md={12}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: crystalIndex * 0.1 }}
                      >
                        <Card
                          hoverable
                          styles={{
                            body: {
                              padding: '1.5rem'
                            }
                          }}
                        >
                          <Title level={4} style={{ marginBottom: '1rem' }}>
                            {crystal.name}
                          </Title>
                          <Paragraph style={{ marginBottom: '1rem' }}>
                            {crystal.description}
                          </Paragraph>
                          <div style={{ marginBottom: '1rem' }}>
                            <Text strong style={{ display: 'block', marginBottom: '0.5rem' }}>
                              功效：
                            </Text>
                            <Space size={[0, 8]} wrap>
                              {crystal.benefits.map((benefit, index) => (
                                <Tag
                                  key={index}
                                  color="purple"
                                  style={{ marginBottom: '0.5rem' }}
                                >
                                  {benefit}
                                </Tag>
                              ))}
                            </Space>
                          </div>
                          <div>
                            <Text type="secondary">
                              对应脉轮：{crystal.chakra}
                            </Text>
                          </div>
                        </Card>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </Card>
            ))}
          </Space>
        </div>
      </Content>
    </Layout>
  )
} 