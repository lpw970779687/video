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
  { id: '480P', label: '480P', suffix: '_480P' },
  { id: '720P', label: '720P', suffix: '_720P' },
  { id: '1080P', label: '1080P', suffix: '_1080P' }
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
    title: '序列公路求生',
    category: 'shadiao',
    status: '连载中',        // 连载中 | 已完结
    totalEpisodes: 1,
    cover: buildCoverUrl('沙雕动画', '序列公路求生'),
    description: '一部脑洞大开的沙雕序列公路求生动画！主角在荒诞的公路上遇到各种奇葩事件，笑点密集，全程高能。每天更新一集，记得追更哦～',
    author: '夏范',
    authorAvatar: 'https://www.douyin.com/user/MS4wLjABAAAANDAGDDcLn2weri91EMcij3kt-crPsXVxXRBs9dc3CKUxwGvLLKhC_RJ8loImnEDM?from_tab_name=main&vid=7523482957958450472',
    episodes: [
      {
        id: 1,
        title: '第一集',
        number: 1,
        duration: '3:20',
        views: 12845,
        uploadedAt: '2026/7/10-21:33:00',
        qualities: {
          '480P': buildVideoUrl('沙雕动画', '序列公路求生', '1', '_480P'),
          '720P': buildVideoUrl('沙雕动画', '序列公路求生', '1', '_720P'),
          '1080P': buildVideoUrl('沙雕动画', '序列公路求生', '1', '_1080P')
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