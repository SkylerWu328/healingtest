'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: number
}

export default function AskAI() {
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
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-indigo-800">
          与疗愈导师对话
        </h1>

        {/* 聊天区域 */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl mb-6 h-[60vh] overflow-y-auto">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <MessageBubble key={index} message={message} />
            ))}
            {isLoading && (
              <div className="flex justify-center">
                <LoadingDots />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* 输入区域 */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="请输入你的问题..."
            className="flex-1 p-4 rounded-xl border border-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/80 backdrop-blur-sm"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isLoading}
            className="px-6 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50"
          >
            发送
          </motion.button>
        </form>
      </div>
    </main>
  )
}

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === 'user'
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-2xl p-4 ${
          isUser
            ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
            : 'bg-white shadow-md text-gray-800'
        }`}
      >
        <p className="whitespace-pre-line">{message.content}</p>
        <div className={`text-xs mt-1 ${isUser ? 'text-purple-100' : 'text-gray-400'}`}>
          {new Date(message.timestamp).toLocaleTimeString()}
        </div>
      </div>
    </div>
  )
}

function LoadingDots() {
  return (
    <div className="flex space-x-2">
      <motion.div
        className="w-2 h-2 bg-indigo-500 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.div
        className="w-2 h-2 bg-indigo-500 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
      />
      <motion.div
        className="w-2 h-2 bg-indigo-500 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
      />
    </div>
  )
} 