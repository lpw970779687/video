// ============================================
// 视频数据 - Mock Data
// 10 条视频 · 5 个分类 · 含评论
// ============================================

// ===== 服务器配置 =====
// 改成你的 Cloudflare Tunnel 地址
const SERVER_BASE = 'https://repeat-mrna-concord-thesis.trycloudflare.com';

// 视频文件名映射（中文文件名需要在 URL 中编码）
const VIDEOS = {
  shaDiao1: encodeURI('沙雕动画1.mp4'),
  shaDiao2: encodeURI('沙雕动画2.mp4')
};

// ===== 分类定义 =====
const CATEGORIES = [
  { id: 'all', label: '全部' },
  { id: 'tech', label: '技术' },
  { id: 'entertainment', label: '娱乐' },
  { id: 'education', label: '教育' },
  { id: 'music', label: '音乐' },
  { id: 'gaming', label: '游戏' }
];

const videos = [
  {
    id: 1,
    title: '【干货】2026 年前端开发趋势全景解读',
    category: 'tech',
    views: 28456,
    duration: '15:42',
    uploadedAt: '3 天前',
    thumbnail: 'https://picsum.photos/seed/frontend/640/360',
    videoUrl: `${SERVER_BASE}/videos/${VIDEOS.shaDiao1}`,
    description: '深入分析 2026 年前端领域的最新框架演进、工具链变革和开发范式升级。从 WebAssembly 到 AI 辅助编程，带你全面把握技术脉搏。',
    author: '技术前沿',
    avatar: 'https://picsum.photos/seed/author1/100/100',
    comments: [
      { author: '小明', avatar: 'https://picsum.photos/seed/u1/100/100', content: '讲得很透彻！对 AI 辅助编程的部分特别有启发。', time: '1 天前' },
      { author: 'TechGirl', avatar: 'https://picsum.photos/seed/u2/100/100', content: 'WebAssembly 那段可以展开讲讲吗？想深入了解。', time: '2 天前' },
      { author: '码农阿强', avatar: 'https://picsum.photos/seed/u3/100/100', content: '已三连，期待更多前端深度内容！', time: '3 天前' }
    ]
  },
  {
    id: 2,
    title: '【4K】夏日海岸线 · 治愈系风景放松之旅',
    category: 'entertainment',
    views: 58912,
    duration: '8:15',
    uploadedAt: '5 天前',
    thumbnail: 'https://picsum.photos/seed/coast/640/360',
    videoUrl: `${SERVER_BASE}/videos/${VIDEOS.shaDiao2}`,
    description: '绝美的夏日海岸风光，配合舒缓的背景音乐，带你沉浸在大自然的怀抱中。工作累了就来放松一下吧 🌊',
    author: '旅行日记',
    avatar: 'https://picsum.photos/seed/author2/100/100',
    comments: [
      { author: '旅人小王', avatar: 'https://picsum.photos/seed/u4/100/100', content: '太美了！看完心情都变好了。', time: '1 天前' },
      { author: '自然爱好者', avatar: 'https://picsum.photos/seed/u5/100/100', content: '请问这是在哪里拍摄的？', time: '3 天前' }
    ]
  },
  {
    id: 3,
    title: 'Python 机器学习零基础入门教程',
    category: 'education',
    views: 35210,
    duration: '32:08',
    uploadedAt: '1 周前',
    thumbnail: 'https://picsum.photos/seed/ml-python/640/360',
    videoUrl: SERVER_BASE + '/videos/video3.mp4',
    description: '从零开始学习机器学习！本教程涵盖 Python 基础、NumPy/Pandas 数据处理、Scikit-learn 模型训练，适合完全零基础的初学者。',
    author: 'AI 学堂',
    avatar: 'https://picsum.photos/seed/author3/100/100',
    comments: [
      { author: '学霸小李', avatar: 'https://picsum.photos/seed/u6/100/100', content: '讲得比我们老师清楚多了！', time: '2 小时前' },
      { author: '数据小白', avatar: 'https://picsum.photos/seed/u7/100/100', content: '终于找到适合入门的中文教程了，感谢！', time: '1 天前' },
      { author: 'Pythonista', avatar: 'https://picsum.photos/seed/u8/100/100', content: '建议加点 Kaggle 实战案例', time: '3 天前' },
      { author: '学习达人', avatar: 'https://picsum.photos/seed/u9/100/100', content: '已收藏，慢慢看', time: '5 天前' }
    ]
  },
  {
    id: 4,
    title: '【指弹吉他】起风了 · 岸部真明风格改编',
    category: 'music',
    views: 62478,
    duration: '4:52',
    uploadedAt: '4 天前',
    thumbnail: 'https://picsum.photos/seed/guitar/640/360',
    videoUrl: SERVER_BASE + '/videos/video4.mp4',
    description: '用指弹吉他演绎经典旋律《起风了》，岸部真明风格的温柔改编。谱子已放在评论区置顶。',
    author: '吉他小屋',
    avatar: 'https://picsum.photos/seed/author4/100/100',
    comments: [
      { author: '吉他新手', avatar: 'https://picsum.photos/seed/u10/100/100', content: '太好听了！请问用的什么型号的吉他？', time: '6 小时前' },
      { author: '音乐迷', avatar: 'https://picsum.photos/seed/u11/100/100', content: '这个改编绝了，循环播放中🎵', time: '1 天前' }
    ]
  },
  {
    id: 5,
    title: '【游戏实况】黑神话悟空 · 最终BOSS无伤攻略',
    category: 'gaming',
    views: 125600,
    duration: '22:30',
    uploadedAt: '2 天前',
    thumbnail: 'https://picsum.photos/seed/wukong/640/360',
    videoUrl: SERVER_BASE + '/videos/video5.mp4',
    description: '全网最详细的最终 Boss 无伤攻略！涵盖所有招式应对方法、配装推荐和输出时机分析。',
    author: '游戏达人',
    avatar: 'https://picsum.photos/seed/author5/100/100',
    comments: [
      { author: '天命人', avatar: 'https://picsum.photos/seed/u12/100/100', content: '照着打过了！感谢大佬！', time: '3 小时前' },
      { author: '手残党', avatar: 'https://picsum.photos/seed/u13/100/100', content: '我还是老老实实练级吧😂', time: '12 小时前' },
      { author: '攻略收集者', avatar: 'https://picsum.photos/seed/u14/100/100', content: '讲得很细，P2 阶段的躲避技巧太实用了', time: '1 天前' }
    ]
  },
  {
    id: 6,
    title: 'VS Code 高效编程技巧 20 条',
    category: 'tech',
    views: 42103,
    duration: '11:20',
    uploadedAt: '1 周前',
    thumbnail: 'https://picsum.photos/seed/vscode/640/360',
    videoUrl: SERVER_BASE + '/videos/video6.mp4',
    description: '20 个让你编程效率翻倍的 VS Code 技巧！从快捷键到插件推荐，从调试技巧到 Git 集成，每个开发者都应该掌握。',
    author: '极客编程',
    avatar: 'https://picsum.photos/seed/author6/100/100',
    comments: [
      { author: '程序猿', avatar: 'https://picsum.photos/seed/u15/100/100', content: '用了 5 年 VS Code，居然还有不知道的技巧！', time: '1 天前' },
      { author: '全栈工程师', avatar: 'https://picsum.photos/seed/u16/100/100', content: '多光标编辑那个真的绝了', time: '2 天前' },
      { author: '前端小白', avatar: 'https://picsum.photos/seed/u17/100/100', content: '太实用了，已投币！', time: '3 天前' }
    ]
  },
  {
    id: 7,
    title: '【4K】城市夜景航拍 · 霓虹光影',
    category: 'entertainment',
    views: 44230,
    duration: '6:18',
    uploadedAt: '6 天前',
    thumbnail: 'https://picsum.photos/seed/citynight/640/360',
    videoUrl: SERVER_BASE + '/videos/video7.mp4',
    description: '用无人机记录城市夜晚的璀璨灯火。4K 超清画质，带你从空中领略城市之美。',
    author: '航拍中国',
    avatar: 'https://picsum.photos/seed/author7/100/100',
    comments: [
      { author: '航拍爱好者', avatar: 'https://picsum.photos/seed/u18/100/100', content: '色彩调得真好！用的什么无人机？', time: '2 天前' },
      { author: '城市之光', avatar: 'https://picsum.photos/seed/u19/100/100', content: '这就是我生活的城市，拍得太美了❤️', time: '4 天前' }
    ]
  },
  {
    id: 8,
    title: '【钢琴】River Flows in You · 完整版',
    category: 'music',
    views: 83450,
    duration: '5:06',
    uploadedAt: '2 周前',
    thumbnail: 'https://picsum.photos/seed/piano/640/360',
    videoUrl: SERVER_BASE + '/videos/video8.mp4',
    description: 'Yiruma 经典名曲 River Flows in You 钢琴完整版。高清录音棚录制，带给你最佳的听觉享受。',
    author: '钢琴诗人',
    avatar: 'https://picsum.photos/seed/author8/100/100',
    comments: [
      { author: '琴童妈妈', avatar: 'https://picsum.photos/seed/u20/100/100', content: '孩子在学这首，这个版本弹得太棒了', time: '5 天前' },
      { author: '古典乐迷', avatar: 'https://picsum.photos/seed/u21/100/100', content: '每次听都很感动，经典永不过时', time: '1 周前' },
      { author: '钢琴老师', avatar: 'https://picsum.photos/seed/u22/100/100', content: '触键很细腻，值得学习的演奏', time: '1 周前' }
    ]
  },
  {
    id: 9,
    title: '【英语学习】30 天口语突破计划 Day 1',
    category: 'education',
    views: 19870,
    duration: '18:45',
    uploadedAt: '3 天前',
    thumbnail: 'https://picsum.photos/seed/english/640/360',
    videoUrl: SERVER_BASE + '/videos/video9.mp4',
    description: '30 天英语口语突破计划正式开始！每天一个主题，跟读练习 + 实用表达 + 场景对话，让你的口语在 30 天内实现质的飞跃。',
    author: '英语加油站',
    avatar: 'https://picsum.photos/seed/author9/100/100',
    comments: [
      { author: '英语学习者', avatar: 'https://picsum.photos/seed/u23/100/100', content: '打卡第一天！跟着读了一遍感觉不错', time: '1 小时前' },
      { author: '考研党', avatar: 'https://picsum.photos/seed/u24/100/100', content: '希望这次能坚持下来💪', time: '1 天前' }
    ]
  },
  {
    id: 10,
    title: '【实况】赛博朋克 2077 · 全收集攻略',
    category: 'gaming',
    views: 76300,
    duration: '45:12',
    uploadedAt: '1 周前',
    thumbnail: 'https://picsum.photos/seed/cyberpunk/640/360',
    videoUrl: SERVER_BASE + '/videos/video10.mp4',
    description: '赛博朋克 2077 全收集攻略！包含所有传说级装备、快速移动点、隐藏任务和彩蛋位置。',
    author: '游戏攻略组',
    avatar: 'https://picsum.photos/seed/author10/100/100',
    comments: [
      { author: '夜之城居民', avatar: 'https://picsum.photos/seed/u25/100/100', content: '终于有人做全收集了，mark！', time: '2 天前' },
      { author: '收集控', avatar: 'https://picsum.photos/seed/u26/100/100', content: '视频分段标注好评！', time: '4 天前' }
    ]
  }
];