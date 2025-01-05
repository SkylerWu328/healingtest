'use client'

import React, { useState } from 'react'
import { Layout, Typography, Card, Radio, Button, Space, Progress } from 'antd'
import { motion } from 'framer-motion'
import type { RadioChangeEvent } from 'antd'
import { useRouter } from 'next/navigation'

const { Content } = Layout
const { Title, Text } = Typography

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

export default function Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const router = useRouter()

  const handleOptionSelect = (e: RadioChangeEvent) => {
    setSelectedOption(e.target.value)
  }

  const handleNext = () => {
    if (selectedOption !== null) {
      setAnswers(prev => ({
        ...prev,
        [currentQuestion]: selectedOption
      }))
      setSelectedOption(null)
      setCurrentQuestion(prev => prev + 1)
    }
  }

  const handleSubmit = () => {
    if (selectedOption !== null) {
      const finalAnswers = {
        ...answers,
        [currentQuestion]: selectedOption
      }
      
      // 计算每个脉轮的得分
      const chakraScores = questions.map((question, index) => {
        const score = ((4 - finalAnswers[index]) / 3) * 100 // 转换为百分比分数
        return {
          chakra: question.chakra,
          score: Math.round(score),
          suggestion: '' // 可以根据需要添加具体建议
        }
      })
      
      // 将结果编码并传递到结果页面
      const encodedResults = encodeURIComponent(JSON.stringify(chakraScores))
      router.push(`/test/result?results=${encodedResults}`)
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <Layout style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f3ff 0%, #e0e7ff 100%)' }}>
      <Content style={{ padding: '2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Title level={1} style={{ textAlign: 'center', marginBottom: '2rem', color: '#4338ca' }}>
            脉轮能量测试
          </Title>

          <Card style={{ marginBottom: '2rem' }}>
            <Progress 
              percent={progress} 
              showInfo={false}
              strokeColor={{ 
                '0%': '#818cf8',
                '100%': '#4338ca'
              }}
              style={{ marginBottom: '2rem' }}
            />
            
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Title level={4} style={{ marginBottom: '1.5rem' }}>
                {questions[currentQuestion].text}
              </Title>

              <Radio.Group
                onChange={handleOptionSelect}
                value={selectedOption}
                style={{ width: '100%' }}
              >
                <Space direction="vertical" style={{ width: '100%' }}>
                  {questions[currentQuestion].options.map((option, index) => (
                    <Radio 
                      key={index} 
                      value={index}
                      style={{ 
                        width: '100%',
                        padding: '1rem',
                        border: '1px solid #e5e7eb',
                        borderRadius: '0.5rem',
                        marginBottom: '0.5rem'
                      }}
                    >
                      {option}
                    </Radio>
                  ))}
                </Space>
              </Radio.Group>
            </motion.div>

            <div style={{ marginTop: '2rem', textAlign: 'right' }}>
              {currentQuestion < questions.length - 1 ? (
                <Button 
                  type="primary" 
                  onClick={handleNext}
                  disabled={selectedOption === null}
                  size="large"
                >
                  下一题
                </Button>
              ) : (
                <Button 
                  type="primary" 
                  onClick={handleSubmit}
                  disabled={selectedOption === null}
                  size="large"
                >
                  完成测试
                </Button>
              )}
            </div>
          </Card>

          <Card style={{ textAlign: 'center', background: 'rgba(255, 255, 255, 0.8)' }}>
            <Text style={{ fontSize: '1.125rem' }}>
              已完成 {currentQuestion + 1} / {questions.length} 题
            </Text>
          </Card>
        </div>
      </Content>
    </Layout>
  )
} 