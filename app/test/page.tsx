'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

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
    // 这里添加计算逻辑
    setShowResults(true)
    
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
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-indigo-800">
          脉轮能量测试
        </h1>

        {!showResults ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
          >
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>问题 {currentQuestion + 1} / {questions.length}</span>
                <span>完成度 {Math.round((currentQuestion / questions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              {questions[currentQuestion].text}
            </h2>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(questions[currentQuestion].id, index)}
                  className="w-full text-left p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-6 text-indigo-800">测试完成！</h2>
            <p className="text-gray-700 mb-4">
              感谢你完成脉轮能量测试。根据你的答案，我们为你生成了详细的脉轮分析报告。
            </p>
            <p className="text-gray-700 mb-6">
              你可以在主页查看完整的测试结果和个性化建议。
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/'}
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow"
            >
              返回主页查看结果
            </motion.button>
          </motion.div>
        )}
      </div>
    </main>
  )
} 