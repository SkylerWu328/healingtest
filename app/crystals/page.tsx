'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Crystal {
  name: string
  description: string
  benefits: string[]
  image?: string // 如果之后要添加水晶图片
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
        benefits: ['增强直觉', '促进冥想', '净化负面能量', '改善睡眠质量']
      },
      {
        name: '白水晶',
        description: '纯净的能量放大器，有助于增强其他水晶的效果',
        benefits: ['增强能量', '提升意识', '净化空间', '促进清晰思维']
      },
      {
        name: '紫锂辉',
        description: '高频振动的水晶，有助于连接更高维度的能量',
        benefits: ['增强灵性意识', '促进冥想深度', '开启第三眼', '提升直觉能力']
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
        benefits: ['增强洞察力', '促进真实表达', '增强记忆力', '平衡情绪']
      },
      {
        name: '蓝黄晶',
        description: '结合蓝色和金色能量的水晶，促进思维清晰',
        benefits: ['提升思维能力', '增强表达', '平衡理性与直觉', '促进沟通']
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
        benefits: ['促进沟通', '平静情绪', '增强创造力', '净化能量']
      },
      {
        name: '青金石',
        description: '深蓝色的能量，增强真实表达的能力',
        benefits: ['增强表达', '促进诚实', '增强领导力', '促进内在平和']
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
        benefits: ['增强爱的能量', '促进疗愈', '平衡情绪', '增强同理心']
      },
      {
        name: '孔雀石',
        description: '强大的心轮水晶，有助于情感疗愈',
        benefits: ['促进情感疗愈', '保护心轮', '增强同情心', '转化负面情绪']
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
        benefits: ['增强自信', '提升能量', '促进积极性', '增强创造力']
      },
      {
        name: '虎眼石',
        description: '保护性的金黄色水晶，增强意志力',
        benefits: ['增强意志力', '提供保护', '增强专注力', '促进目标实现']
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
        benefits: ['增强创造力', '提升活力', '增强社交能力', '促进快乐']
      },
      {
        name: '芬达石',
        description: '温暖的橙色能量，增强生命力',
        benefits: ['增强活力', '提升热情', '促进社交', '增强自信心']
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
        benefits: ['增强稳定性', '提供保护', '增强活力', '促进安全感']
      },
      {
        name: '石榴石',
        description: '强大的保护石，增强生存能量',
        benefits: ['增强力量', '提供保护', '增强意志力', '促进稳定']
      }
    ]
  }
]

export default function Crystals() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-indigo-800">
          脉轮水晶指南
        </h1>
        
        <div className="space-y-12">
          {chakraCrystals.map((chakraSection, index) => (
            <ChakraSection 
              key={chakraSection.chakra} 
              chakraInfo={chakraSection} 
              index={index}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

function ChakraSection({ 
  chakraInfo, 
  index 
}: { 
  chakraInfo: ChakraCrystals
  index: number 
}) {
  const colorVariants = {
    purple: 'from-purple-500 to-purple-600',
    indigo: 'from-indigo-500 to-indigo-600',
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    yellow: 'from-yellow-500 to-yellow-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600'
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
    >
      <div className={`bg-gradient-to-r ${colorVariants[chakraInfo.color as keyof typeof colorVariants]} p-4 rounded-xl text-white mb-6`}>
        <h2 className="text-2xl font-bold mb-2">{chakraInfo.chakra}</h2>
        <p>{chakraInfo.description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {chakraInfo.crystals.map((crystal) => (
          <CrystalCard key={crystal.name} crystal={crystal} />
        ))}
      </div>
    </motion.section>
  )
}

function CrystalCard({ crystal }: { crystal: Crystal }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <h3 className="text-xl font-semibold mb-3 text-indigo-900">{crystal.name}</h3>
      <p className="text-gray-700 mb-4">{crystal.description}</p>
      <ul className="space-y-2">
        {crystal.benefits.map((benefit, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-indigo-500 mr-2">✦</span>
            {benefit}
          </li>
        ))}
      </ul>
    </motion.div>
  )
} 