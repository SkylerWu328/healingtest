'use client'

import React, { useState } from 'react'
import { Layout, Typography, Card, Button, Progress, Space } from 'antd'
import { ArrowLeftOutlined, CheckCircleOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const { Content } = Layout
const { Title, Text, Paragraph } = Typography

interface Question {
  id: number
  text: string
  options: string[]
  chakra: string
}

const questions: Question[] = [
  {
    id: 1,
    text: '当面对重要决定时，你通常会：',
    options: [
      '完全依靠直觉做决定',
      '权衡利弊后理性决定',
      '听从他人建议',
      '拖延不做决定'
    ],
    chakra: 'crown'
  },
  {
    id: 2,
    text: '在日常生活中，你对精神层面的追求是：',
    options: [
      '经常冥想和反思',
      '偶尔思考人生意义',
      '很少关注精神层面',
      '完全专注于现实生活'
    ],
    chakra: 'third-eye'
  },
  {
    id: 3,
    text: '在表达自己的想法时，你通常会：',
    options: [
      '清晰自信地表达',
      '谨慎地选择措辞',
      '难以准确表达',
      '选择保持沉默'
    ],
    chakra: 'throat'
  },
  {
    id: 4,
    text: '在人际关系中，你倾向于：',
    options: [
      '敞开心扉，乐于分享',
      '选择性地分享感受',
      '保持一定距离',
      '很难与人建立深层连接'
    ],
    chakra: 'heart'
  },
  {
    id: 5,
    text: '面对挑战时，你通常会：',
    options: [
      '充满信心地迎接挑战',
      '谨慎评估后行动',
      '感到压力和焦虑',
      '尽量避免挑战'
    ],
    chakra: 'solar'
  },
  // 可以继续添加更多问题...
]

export default function ChakraTest() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{[key: number]: number}>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (questionId: number, answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }))
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      calculateResults()
    }
  }

  const calculateResults = () => {
    // 保存结果到localStorage
    const testResult = {
      lastTest: new Date().toISOString(),
      summary: '根据测试结果，你的脉轮整体状况良好，但心轮和喉轮需要更多关注...',
      recommendations: [
        '建议每天进行10分钟的冥想练习',
        '可以尝试使用紫水晶来平衡顶轮能量',
        '进行正念呼吸练习有助于开启心轮'
      ],
      energyBalance: [
        '使用薰衣草精油帮助放松',
        '佩戴海蓝宝石有助于表达',
        '进行户外运动增强根轮能量'
      ]
    }
    
    localStorage.setItem('chakraTestResult', JSON.stringify(testResult))
    setShowResults(true)
  }

  return (
    <Layout>
      <Content style={{ 
        minHeight: '100vh',
        padding: '2rem',
        background: 'linear-gradient(135deg, #f5f3ff 0%, #e0e7ff 100%)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Title 
            level={1} 
            style={{ 
              textAlign: 'center', 
              marginBottom: '3rem',
              color: '#4338ca'
            }}
          >
            脉轮能量测试
          </Title>

          {!showResults ? (
            <Card>
              <div style={{ marginBottom: '2rem' }}>
                <Space style={{ width: '100%', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <Text type="secondary">
                    问题 {currentQuestion + 1} / {questions.length}
                  </Text>
                  <Text type="secondary">
                    完成度 {Math.round((currentQuestion / questions.length) * 100)}%
                  </Text>
                </Space>
                <Progress 
                  percent={Math.round((currentQuestion / questions.length) * 100)}
                  showInfo={false}
                  strokeColor={{
                    '0%': '#818cf8',
                    '100%': '#4338ca'
                  }}
                />
              </div>

              <Title level={4} style={{ marginBottom: '2rem' }}>
                {questions[currentQuestion].text}
              </Title>

              <Space direction="vertical" style={{ width: '100%' }} size="large">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      block
                      size="large"
                      onClick={() => handleAnswer(questions[currentQuestion].id, index)}
                      style={{
                        height: 'auto',
                        padding: '1rem',
                        textAlign: 'left',
                        whiteSpace: 'normal',
                        background: 'white'
                      }}
                    >
                      {option}
                    </Button>
                  </motion.div>
                ))}
              </Space>
            </Card>
          ) : (
            <Card>
              <div style={{ textAlign: 'center' }}>
                <CheckCircleOutlined style={{ 
                  fontSize: '4rem', 
                  color: '#4338ca',
                  marginBottom: '1.5rem'
                }} />
                <Title level={3} style={{ marginBottom: '1rem' }}>
                  测试完成！
                </Title>
                <Paragraph style={{ marginBottom: '2rem' }}>
                  感谢你完成脉轮能量测试。根据你的答案，我们为你生成了详细的脉轮分析报告。
                  你可以在主页查看完整的测试结果和个性化建议。
                </Paragraph>
                <Button 
                  type="primary"
                  size="large"
                  onClick={() => router.push('/')}
                  style={{
                    background: 'linear-gradient(to right, #818cf8, #4338ca)',
                    border: 'none',
                    height: 'auto',
                    padding: '1.5rem 3rem',
                  }}
                >
                  返回主页查看结果
                </Button>
              </div>
            </Card>
          )}
        </div>
      </Content>
    </Layout>
  )
} 