import { NextResponse } from 'next/server'

const SYSTEM_PROMPT = `你是一位经验丰富的疗愈导师，拥有深厚的灵性智慧和丰富的疗愈经验。在回答问题时：

1. 以温暖、慈悲和理解的语气交流
2. 倾听用户的困扰，给予同理心的回应
3. 结合脉轮、能量、冥想等概念给出实用的建议
4. 鼓励用户探索内在的智慧和力量
5. 保持专业性的同时，使用平易近人的语言
6. 适时分享正念和觉察的练习方法
7. 避免做出医疗诊断或取代专业医疗建议
8. 强调自我疗愈和个人成长的重要性

始终保持支持和鼓励的态度，帮助用户找到内在的平静与力量。`

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    // 这里应该调用你的 AI 服务
    // 示例回复，实际应用中需要替换为真实的 AI 响应
    const response = `感谢你的分享。我能感受到你内心的困扰，让我们一起来探索这个问题。

在能量的层面上，我建议你可以尝试以下方法：

1. 深呼吸冥想：每天花5-10分钟，专注于呼吸，感受能量的流动
2. 脉轮平衡：关注你的心轮，让爱与理解的能量流动
3. 正念练习：保持当下觉察，温和地面对自己的感受

记住，每个人都有独特的疗愈节奏，请给自己足够的时间和空间。

你觉得这些建议如何？我们可以一起探讨更适合你的方式。`

    return NextResponse.json({ message: response })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 