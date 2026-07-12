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

function buildCoverUrl(category, seriesTitle, ext = 'jpg') {
  return `${SERVER_BASE}/videos/${encodePathComponent(category)}/${encodePathComponent(seriesTitle)}/${encodePathComponent(seriesTitle + '_封面.' + ext)}`;
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
        title: '第1集',
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
  },
  {
    id: 2,
    title: '第一序列',
    category: 'shadiao',
    status: '连载中',
    totalEpisodes: 9,
    cover: buildCoverUrl('沙雕动画', '第一序列', 'jpeg'),
    description: '沙雕动画第一序列，搞笑剧情持续更新中～',
    author: '夏范',
    authorAvatar: 'https://www.douyin.com/user/MS4wLjABAAAANDAGDDcLn2weri91EMcij3kt-crPsXVxXRBs9dc3CKUxwGvLLKhC_RJ8loImnEDM?from_tab_name=main&vid=7523482957958450472',
    episodes: [
      { id: 1, title: '第1集', number: 1, duration: '3:00', views: 9800, uploadedAt: '2026/7/12-15:45:00', qualities: { '480P': buildVideoUrl('沙雕动画', '第一序列', '1', '_480P'), '720P': buildVideoUrl('沙雕动画', '第一序列', '1', '_720P'), '1080P': buildVideoUrl('沙雕动画', '第一序列', '1', '_1080P') } },
      { id: 2, title: '第2集', number: 2, duration: '3:00', views: 8700, uploadedAt: '2026/7/12-15:45:00', qualities: { '480P': buildVideoUrl('沙雕动画', '第一序列', '2', '_480P'), '720P': buildVideoUrl('沙雕动画', '第一序列', '2', '_720P'), '1080P': buildVideoUrl('沙雕动画', '第一序列', '2', '_1080P') } },
      { id: 3, title: '第3集', number: 3, duration: '3:00', views: 7600, uploadedAt: '2026/7/12-15:45:00', qualities: { '480P': buildVideoUrl('沙雕动画', '第一序列', '3', '_480P'), '720P': buildVideoUrl('沙雕动画', '第一序列', '3', '_720P'), '1080P': buildVideoUrl('沙雕动画', '第一序列', '3', '_1080P') } },
      { id: 4, title: '第4集', number: 4, duration: '3:00', views: 6500, uploadedAt: '2026/7/12-15:45:00', qualities: { '480P': buildVideoUrl('沙雕动画', '第一序列', '4', '_480P'), '720P': buildVideoUrl('沙雕动画', '第一序列', '4', '_720P'), '1080P': buildVideoUrl('沙雕动画', '第一序列', '4', '_1080P') } },
      { id: 5, title: '第5集', number: 5, duration: '3:00', views: 5400, uploadedAt: '2026/7/12-15:45:00', qualities: { '480P': buildVideoUrl('沙雕动画', '第一序列', '5', '_480P'), '720P': buildVideoUrl('沙雕动画', '第一序列', '5', '_720P'), '1080P': buildVideoUrl('沙雕动画', '第一序列', '5', '_1080P') } },
      { id: 6, title: '第6集', number: 6, duration: '3:00', views: 4300, uploadedAt: '2026/7/12-15:45:00', qualities: { '480P': buildVideoUrl('沙雕动画', '第一序列', '6', '_480P'), '720P': buildVideoUrl('沙雕动画', '第一序列', '6', '_720P'), '1080P': buildVideoUrl('沙雕动画', '第一序列', '6', '_1080P') } },
      { id: 7, title: '第7集', number: 7, duration: '3:00', views: 3200, uploadedAt: '2026/7/12-15:45:00', qualities: { '480P': buildVideoUrl('沙雕动画', '第一序列', '7', '_480P'), '720P': buildVideoUrl('沙雕动画', '第一序列', '7', '_720P'), '1080P': buildVideoUrl('沙雕动画', '第一序列', '7', '_1080P') } },
      { id: 8, title: '第8集', number: 8, duration: '3:00', views: 2100, uploadedAt: '2026/7/12-15:45:00', qualities: { '480P': buildVideoUrl('沙雕动画', '第一序列', '8', '_480P'), '720P': buildVideoUrl('沙雕动画', '第一序列', '8', '_720P'), '1080P': buildVideoUrl('沙雕动画', '第一序列', '8', '_1080P') } },
      { id: 9, title: '第9集', number: 9, duration: '3:00', views: 1000, uploadedAt: '2026/7/12-15:45:00', qualities: { '480P': buildVideoUrl('沙雕动画', '第一序列', '9', '_480P'), '720P': buildVideoUrl('沙雕动画', '第一序列', '9', '_720P'), '1080P': buildVideoUrl('沙雕动画', '第一序列', '9', '_1080P') } }
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