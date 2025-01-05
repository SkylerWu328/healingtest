'use client'

import React from 'react'
import { Layout, Typography, Card, Row, Col, Button, Space, Tag } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const { Content } = Layout
const { Title, Text, Paragraph } = Typography

interface EssentialOil {
  name: string
  description: string
  benefits: string[]
  usage: string[]
  caution?: string
  chakra: string
}

interface ChakraAromatherapy {
  chakra: string
  color: string
  description: string
  oils: EssentialOil[]
}

const chakraOils: ChakraAromatherapy[] = [
  {
    chakra: '顶轮',
    color: 'purple',
    description: '代表灵性觉知与高层意识，与松果体相连',
    oils: [
      {
        name: '乳香精油',
        description: '具有深层冥想和灵性提升的功效，被称为"灵性之油"',
        benefits: [
          '增强冥想深度',
          '提升灵性意识',
          '平衡情绪',
          '安抚心神'
        ],
        usage: [
          '香薰扩香',
          '冥想时涂抹于眉心或头顶',
          '与基础油调和按摩'
        ],
        chakra: '顶轮'
      },
      {
        name: '檀香精油',
        description: '古老的冥想香气，有助于深层放松和灵性连接',
        benefits: [
          '促进深层放松',
          '增强灵性连接',
          '平衡心智',
          '提升觉知'
        ],
        usage: [
          '香薰扩香',
          '局部按摩',
          '冥想时使用'
        ],
        chakra: '顶轮'
      }
    ]
  },
  {
    chakra: '眉心轮',
    color: 'indigo',
    description: '代表直觉与内在智慧，与松果体和脑垂体相连',
    oils: [
      {
        name: '薰衣草精油',
        description: '平衡安神的香气，促进直觉开发和内在觉知',
        benefits: [
          '增强直觉',
          '改善睡眠',
          '平衡情绪',
          '提升专注力'
        ],
        usage: [
          '香薰扩香',
          '枕头喷洒',
          '浴缸使用',
          '局部按摩'
        ],
        chakra: '眉心轮'
      },
      {
        name: '天竺葵精油',
        description: '平衡情绪的精油，有助于开启直觉和内在智慧',
        benefits: [
          '平衡荷尔蒙',
          '稳定情绪',
          '增强洞察力',
          '促进放松'
        ],
        usage: [
          '香薰扩香',
          '局部按摩',
          '热敷使用'
        ],
        chakra: '眉心轮'
      }
    ]
  },
  {
    chakra: '喉轮',
    color: 'blue',
    description: '代表表达与沟通，与甲状腺相连',
    oils: [
      {
        name: '尤加利精油',
        description: '清新提神的香气，促进呼吸系统健康和表达能力',
        benefits: [
          '促进呼吸顺畅',
          '增强表达能力',
          '提升清晰度',
          '净化空气'
        ],
        usage: [
          '香薰扩香',
          '蒸汽吸入',
          '局部按摩'
        ],
        caution: '孕妇和儿童慎用',
        chakra: '喉轮'
      },
      {
        name: '茶树精油',
        description: '具有净化和保护作用的精油，支持健康表达',
        benefits: [
          '净化环境',
          '支持免疫系统',
          '促进口腔健康',
          '增强表达力'
        ],
        usage: [
          '香薰扩香',
          '漱口使用（稀释）',
          '局部使用'
        ],
        chakra: '喉轮'
      }
    ]
  },
  {
    chakra: '心轮',
    color: 'green',
    description: '代表爱与同理心，与胸腺和心脏相连',
    oils: [
      {
        name: '玫瑰精油',
        description: '爱与疗愈的精油，被称为"情感之油"',
        benefits: [
          '开启心轮',
          '疗愈情感创伤',
          '增强自我接纳',
          '促进爱的能量'
        ],
        usage: [
          '香薰扩香',
          '局部按摩',
          '浴缸使用'
        ],
        chakra: '心轮'
      },
      {
        name: '依兰依兰精油',
        description: '温暖甜美的花香，有助于情感平衡和心轮开启',
        benefits: [
          '平衡情绪',
          '增进人际关系',
          '提升自信',
          '促进放松'
        ],
        usage: [
          '香薰扩香',
          '局部按摩',
          '个人香水'
        ],
        chakra: '心轮'
      }
    ]
  },
  {
    chakra: '太阳轮',
    color: 'yellow',
    description: '代表个人力量与自信，与胰腺和消化系统相连',
    oils: [
      {
        name: '柠檬精油',
        description: '充满阳光能量的清新香气，提升活力和自信',
        benefits: [
          '提升能量',
          '增强自信',
          '改善心情',
          '促进消化'
        ],
        usage: [
          '香薰扩香',
          '清洁用品添加',
          '饮用（食用级）'
        ],
        chakra: '太阳轮'
      },
      {
        name: '佛手柑精油',
        description: '阳光柑橘香，平衡情绪和增强自信',
        benefits: [
          '减轻压力',
          '提升心情',
          '增强自信',
          '改善消化'
        ],
        usage: [
          '香薰扩香',
          '局部按摩',
          '浴缸使用'
        ],
        caution: '使用后避免阳光直射',
        chakra: '太阳轮'
      }
    ]
  },
  {
    chakra: '骶轮',
    color: 'orange',
    description: '代表创造力与感受力，与生殖系统相连',
    oils: [
      {
        name: '橙花精油',
        description: '甜美温暖的花香，激发创造力和感受力',
        benefits: [
          '增强创造力',
          '平衡情绪',
          '提升感受力',
          '促进放松'
        ],
        usage: [
          '香薰扩香',
          '局部按摩',
          '浴缸使用'
        ],
        chakra: '骶轮'
      },
      {
        name: '甜橙精油',
        description: '欢快的柑橘香，提升创造力和生命力',
        benefits: [
          '提升活力',
          '增强创造力',
          '改善心情',
          '促进放松'
        ],
        usage: [
          '香薰扩香',
          '居室喷洒',
          '清洁用品添加'
        ],
        chakra: '骶轮'
      }
    ]
  },
  {
    chakra: '根轮',
    color: 'red',
    description: '代表稳定与安全感，与肾上腺相连',
    oils: [
      {
        name: '雪松精油',
        description: '稳定踏实的木质香，增强根部能量和安全感',
        benefits: [
          '增强稳定性',
          '提供安全感',
          '促进接地',
          '平衡情绪'
        ],
        usage: [
          '香薰扩香',
          '局部按摩',
          '冥想时使用'
        ],
        chakra: '根轮'
      },
      {
        name: '广藿香精油',
        description: '深沉的土地香气，增强接地气和稳定性',
        benefits: [
          '增强接地感',
          '提供保护',
          '平衡情绪',
          '促进消化'
        ],
        usage: [
          '香薰扩香',
          '局部按摩',
          '个人香水'
        ],
        chakra: '根轮'
      }
    ]
  }
]

export default function Aromatherapy() {
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
            脉轮精油指南
          </Title>

          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            {chakraOils.map((chakraSection, index) => (
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
                  {chakraSection.oils.map((oil, oilIndex) => (
                    <Col key={oil.name} xs={24} sm={24} md={12}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: oilIndex * 0.1 }}
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
                            {oil.name}
                          </Title>
                          <Paragraph style={{ marginBottom: '1rem' }}>
                            {oil.description}
                          </Paragraph>

                          <div style={{ marginBottom: '1rem' }}>
                            <Text strong style={{ display: 'block', marginBottom: '0.5rem' }}>
                              功效：
                            </Text>
                            <Space size={[0, 8]} wrap>
                              {oil.benefits.map((benefit, index) => (
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

                          <div style={{ marginBottom: oil.caution ? '1rem' : 0 }}>
                            <Text strong style={{ display: 'block', marginBottom: '0.5rem' }}>
                              使用方法：
                            </Text>
                            <Space size={[0, 8]} wrap>
                              {oil.usage.map((use, index) => (
                                <Tag
                                  key={index}
                                  color="blue"
                                  style={{ marginBottom: '0.5rem' }}
                                >
                                  {use}
                                </Tag>
                              ))}
                            </Space>
                          </div>

                          {oil.caution && (
                            <div style={{ marginTop: '1rem' }}>
                              <Text type="danger" style={{ fontSize: '0.9rem' }}>
                                ⚠️ 注意：{oil.caution}
                              </Text>
                            </div>
                          )}

                          <div style={{ marginTop: '1rem' }}>
                            <Text type="secondary">
                              对应脉轮：{oil.chakra}
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