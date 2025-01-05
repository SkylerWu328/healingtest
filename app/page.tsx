'use client'

import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface ChakraTestResult {
  lastTest: string
  summary: string
  recommendations: string[]
  energyBalance: string[]
}

export default function Home() {
  const [testResult, setTestResult] = useState<ChakraTestResult | null>(null)

  useEffect(() => {
    const savedResult = localStorage.getItem('chakraTestResult')
    if (savedResult) {
      setTestResult(JSON.parse(savedResult))
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 p-4 md:p-8">
      {/* 标题区域 */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-indigo-800">
        脉轮能量平衡
      </h1>

      {/* 导航按钮区域 */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <NavButton href="/test" title="脉轮测试" icon="🌈" />
        <NavButton href="/crystals" title="水晶介绍" icon="💎" />
        <NavButton href="/aromatherapy" title="香氛介绍" icon="🌸" />
        <NavButton href="/ask-ai" title="Ask AI" icon="🤖" />
      </div>

      {/* 用户信息区域 */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* 用户头像 */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
          <div className="w-48 h-48 mx-auto bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full mb-6 flex items-center justify-center">
            <span className="text-6xl">✨</span>
          </div>
          <h2 className="text-xl text-center font-semibold text-indigo-900">欢迎来到你的能量空间</h2>
        </div>

        {/* 测试结果和建议 */}
        <div className="space-y-6">
          {testResult ? (
            <>
              <ResultCard 
                title="上次测试结果" 
                content={testResult.summary}
                icon="📊" 
              />
              <ResultCard 
                title="能量提升建议" 
                content={testResult.recommendations.join('\n')}
                icon="⭐" 
              />
              <ResultCard 
                title="平衡方法" 
                content={testResult.energyBalance.join('\n')}
                icon="🌟" 
              />
            </>
          ) : (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <div className="text-center">
                <span className="text-4xl mb-4 block">🌈</span>
                <p className="text-lg text-indigo-900">还没有测试记录，开始你的脉轮之旅吧！</p>
                <Link href="/test">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
                  >
                    开始测试
                  </motion.button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

// 导航按钮组件
function NavButton({ href, title, icon }: { href: string; title: string; icon: string }) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center cursor-pointer"
      >
        <span className="text-2xl mb-2 block">{icon}</span>
        <span className="font-medium text-indigo-900">{title}</span>
      </motion.div>
    </Link>
  )
}

// 结果卡片组件
function ResultCard({ title, content, icon }: { title: string; content: string; icon: string }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-lg font-semibold text-indigo-900">{title}</h3>
      </div>
      <p className="whitespace-pre-line text-gray-700">{content}</p>
    </div>
  )
} 