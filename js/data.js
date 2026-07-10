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
  { id: 'shadiao', label: '沙雕动画' },
  { id: 'guochan', label: '国产动漫' }
];

const videos = [
  {
    id: 1,
    title: '沙雕动画 #1 笑到停不下来',
    category: 'shadiao',
    views: 12845,
    duration: '2:35',
    uploadedAt: '刚刚',
    thumbnail: 'https://picsum.photos/seed/shadiao1/640/360',
    videoUrl: `${SERVER_BASE}/videos/${VIDEOS.shaDiao1}`,
    description: '搞笑沙雕动画第一集，看完让你笑出腹肌！每天更新，记得关注哦～',
    author: '沙雕动画',
    avatar: 'https://picsum.photos/seed/author_sd/100/100',
    comments: [
      { author: '笑死我了', avatar: 'https://picsum.photos/seed/usd1/100/100', content: '这集笑死我了哈哈哈哈😂', time: '5 分钟前' },
      { author: '沙雕粉', avatar: 'https://picsum.photos/seed/usd2/100/100', content: '终于有沙雕动画看了，催更！', time: '10 分钟前' }
    ]
  },
  {
    id: 2,
    title: '沙雕动画 #2 这波操作太秀了',
    category: 'shadiao',
    views: 9867,
    duration: '3:12',
    uploadedAt: '刚刚',
    thumbnail: 'https://picsum.photos/seed/shadiao2/640/360',
    videoUrl: `${SERVER_BASE}/videos/${VIDEOS.shaDiao2}`,
    description: '第二集来了！这波骚操作你绝对想不到，看完记得点赞投币～',
    author: '沙雕动画',
    avatar: 'https://picsum.photos/seed/author_sd/100/100',
    comments: [
      { author: '哈哈怪', avatar: 'https://picsum.photos/seed/usd3/100/100', content: '结尾那个反转绝了😂', time: '3 分钟前' },
      { author: '追更达人', avatar: 'https://picsum.photos/seed/usd4/100/100', content: '已三连，快出下一集！', time: '8 分钟前' }
    ]
  }
];