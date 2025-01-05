'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface EssentialOil {
  name: string
  description: string
  benefits: string[]
  usage: string[]
  caution?: string
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
        ]
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
        ]
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
        ]
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
        ]
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
        caution: '孕妇和儿童慎用'
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
        ]
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
        ]
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
        ]
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
        ]
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
        caution: '使用后避免阳光直射'
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
        ]
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
        ]
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
        ]
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
        ]
      }
    ]
  }
]

export default function Aromatherapy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-indigo-800">
          脉轮精油指南
        </h1>
        
        <div className="space-y-12">
          {chakraOils.map((chakraSection, index) => (
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
  chakraInfo: ChakraAromatherapy
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
        {chakraInfo.oils.map((oil) => (
          <OilCard key={oil.name} oil={oil} />
        ))}
      </div>
    </motion.section>
  )
}

function OilCard({ oil }: { oil: EssentialOil }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <h3 className="text-xl font-semibold mb-3 text-indigo-900">{oil.name}</h3>
      <p className="text-gray-700 mb-4">{oil.description}</p>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-indigo-900 mb-2">功效：</h4>
          <ul className="space-y-2">
            {oil.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="text-indigo-500 mr-2">✦</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-indigo-900 mb-2">使用方法：</h4>
          <ul className="space-y-2">
            {oil.usage.map((use, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="text-green-500 mr-2">•</span>
                {use}
              </li>
            ))}
          </ul>
        </div>

        {oil.caution && (
          <div className="mt-4">
            <p className="text-red-600 text-sm flex items-center">
              <span className="mr-2">⚠️</span>
              注意：{oil.caution}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  )
} 