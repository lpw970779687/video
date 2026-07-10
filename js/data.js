// ============================================
// 视频数据 - 剧集系统
// 结构：分类 → 剧集 → 集数（多画质）
// ============================================

// ===== 服务器配置 =====
const SERVER_BASE = 'https://repeat-mrna-concord-thesis.trycloudflare.com';

// ===== URL 构建辅助函数 =====
function encodePathComponent(str) {
  return encodeURI(str);
}

function buildVideoUrl(category, seriesTitle, episodeNumber, qualitySuffix) {
  // qualitySuffix 如 '_360p', '_720p', '_1080p'
  const fileName = `${seriesTitle}${episodeNumber}${qualitySuffix}.mp4`;
  return `${SERVER_BASE}/videos/${encodePathComponent(category)}/${encodePathComponent(seriesTitle)}/${encodePathComponent(fileName)}`;
}

function buildCoverUrl(category, seriesTitle) {
  return `${SERVER_BASE}/videos/${encodePathComponent(category)}/${encodePathComponent(seriesTitle)}/${encodePathComponent(seriesTitle + '_封面.jpg')}`;
}

// ===== 画质定义 =====
const QUALITY_LIST = [
  { id: '流畅', label: '流畅', suffix: '_360p' },
  { id: '清晰', label: '清晰', suffix: '_720p' },
  { id: '高清', label: '高清', suffix: '_1080p' }
];

// ===== 分类定义 =====
const CATEGORIES = [
  { id: 'all', label: '全部' },
  { id: 'shadiao', label: '沙雕动画' },
  { id: 'guochan', label: '国产动漫' }
];

// ===== 剧集数据 =====
const seriesList = [
  {
    id: 1,
    title: '公路求生',
    category: 'shadiao',
    status: '连载中',        // 连载中 | 已完结
    totalEpisodes: 2,
    cover: buildCoverUrl('沙雕动画', '公路求生'),
    description: '一部脑洞大开的沙雕公路求生动画！主角在荒诞的公路上遇到各种奇葩事件，笑点密集，全程高能。每天更新一集，记得追更哦～',
    author: '沙雕动画工作室',
    authorAvatar: 'https://picsum.photos/seed/author_gl/100/100',
    episodes: [
      {
        id: 1,
        title: '第一集',
        number: 1,
        duration: '3:20',
        views: 12845,
        uploadedAt: '刚刚',
        qualities: {
          '流畅': buildVideoUrl('沙雕动画', '公路求生', '1', '_360p'),
          '清晰': buildVideoUrl('沙雕动画', '公路求生', '1', '_720p'),
          '高清': buildVideoUrl('沙雕动画', '公路求生', '1', '_1080p')
        }
      },
      {
        id: 2,
        title: '第二集',
        number: 2,
        duration: '4:15',
        views: 9867,
        uploadedAt: '1 天前',
        qualities: {
          '流畅': buildVideoUrl('沙雕动画', '公路求生', '2', '_360p'),
          '清晰': buildVideoUrl('沙雕动画', '公路求生', '2', '_720p'),
          '高清': buildVideoUrl('沙雕动画', '公路求生', '2', '_1080p')
        }
      },
    ]
  }
];

// ===== 旧数据兼容（videos 数组保留，供尚无剧集结构的页面使用）=====
// 为兼容过渡，从 seriesList 中提取所有剧集的所有集数铺平成 videos
const videos = seriesList.flatMap(series =>
  series.episodes.map(ep => ({
    ...ep,
    seriesId: series.id,
    seriesTitle: series.title,
    category: series.category,
    description: series.description,
    author: series.author,
    avatar: series.authorAvatar,
    thumbnail: series.cover
  }))
);