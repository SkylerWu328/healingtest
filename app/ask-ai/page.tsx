'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Layout, Typography, Button, Input, Card } from 'antd'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const { Content } = Layout
const { Title, Paragraph } = Typography
const { TextArea } = Input

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: number
}

export default function AskAI() {
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: Date.now()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
        }),
      })

      if (!response.ok) throw new Error('Network response was not ok')

      const data = await response.json()
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
        timestamp: Date.now()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Layout>
      <Content style={{ 
        padding: '2rem',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f3ff 0%, #e0e7ff 100%)'
      }}>
        <Button 
          icon={<ArrowLeft />}
          onClick={() => router.push('/')}
          style={{ 
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          返回主页
        </Button>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Title level={1} style={{ textAlign: 'center', marginBottom: '2rem', color: '#4338ca' }}>
            与疗愈导师对话
          </Title>

          <Card 
            styles={{ 
              body: { 
                height: '60vh',
                overflow: 'auto',
                padding: '1.5rem',
                marginBottom: '1rem'
              }
            }}
          >
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
                    marginBottom: '1rem'
                  }}
                >
                  <Card
                    style={{
                      maxWidth: '80%',
                      background: message.role === 'user' ? '#4338ca' : '#fff',
                      borderColor: message.role === 'user' ? '#4338ca' : '#e5e7eb',
                    }}
                    bodyStyle={{
                      padding: '0.75rem 1rem',
                    }}
                  >
                    <Paragraph
                      style={{
                        margin: 0,
                        color: message.role === 'user' ? '#fff' : '#374151',
                        whiteSpace: 'pre-line'
                      }}
                    >
                      {message.content}
                    </Paragraph>
                    <div
                      style={{
                        fontSize: '0.75rem',
                        marginTop: '0.25rem',
                        color: message.role === 'user' ? 'rgba(255,255,255,0.7)' : '#9CA3AF'
                      }}
                    >
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </div>
                  </Card>
                </div>
              ))}
              {isLoading && (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <LoadingDots />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </Card>

          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
            <TextArea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="请输入你的问题..."
              autoSize={{ minRows: 1, maxRows: 4 }}
              style={{ flex: 1 }}
            />
            <Button
              type="primary"
              htmlType="submit"
              disabled={isLoading}
              style={{
                height: 'auto',
                background: 'linear-gradient(to right, #818cf8, #4338ca)',
                border: 'none'
              }}
            >
              发送
            </Button>
          </form>
        </div>
      </Content>
    </Layout>
  )
}

function LoadingDots() {
  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#4338ca'
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  )
} 