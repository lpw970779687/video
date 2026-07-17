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
  { id: 'shadiao', label: '沙雕动画', subCategories: [
    { id: 'xiuxian', label: '修仙类' },
    { id: 'guiyi', label: '诡异类' },
    { id: 'dushi', label: '都市类' }
  ]},
  { id: 'guochan', label: '国产动漫' }
];

// ===== 剧集数据 =====
const seriesList = [
  {
    id: 1,
    title: '序列公路求生',
    category: 'shadiao',
    subCategory: 'xiuxian',
    status: '连载中',        // 连载中 | 已完结
    totalEpisodes: 9,
    cover: buildCoverUrl('沙雕动画', '序列公路求生'),
    description: '一部脑洞大开的沙雕序列公路求生动画！主角在荒诞的公路上遇到各种奇葩事件，笑点密集，全程高能。每天更新一集，记得追更哦～',
    author: '夏范',
    authorAvatar: 'https://www.douyin.com/user/MS4wLjABAAAANDAGDDcLn2weri91EMcij3kt-crPsXVxXRBs9dc3CKUxwGvLLKhC_RJ8loImnEDM?from_tab_name=main&vid=7523482957958450472',
    episodes: [
      { id: 1, title: '第1集', number: 1, duration: '3:20', views: 12845, uploadedAt: '2026/7/10-21:33:00', qualities: { '480P': buildVideoUrl('沙雕动画', '序列公路求生', '1', '_480P'), '720P': buildVideoUrl('沙雕动画', '序列公路求生', '1', '_720P'), '1080P': buildVideoUrl('沙雕动画', '序列公路求生', '1', '_1080P') } },
      { id: 2, title: '第2集', number: 2, duration: '3:20', views: 11000, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '序列公路求生', '2', '_480P'), '720P': buildVideoUrl('沙雕动画', '序列公路求生', '2', '_720P'), '1080P': buildVideoUrl('沙雕动画', '序列公路求生', '2', '_1080P') } },
      { id: 3, title: '第3集', number: 3, duration: '3:20', views: 9800, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '序列公路求生', '3', '_480P'), '720P': buildVideoUrl('沙雕动画', '序列公路求生', '3', '_720P'), '1080P': buildVideoUrl('沙雕动画', '序列公路求生', '3', '_1080P') } },
      { id: 4, title: '第4集', number: 4, duration: '3:20', views: 8700, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '序列公路求生', '4', '_480P'), '720P': buildVideoUrl('沙雕动画', '序列公路求生', '4', '_720P'), '1080P': buildVideoUrl('沙雕动画', '序列公路求生', '4', '_1080P') } },
      { id: 5, title: '第5集', number: 5, duration: '3:20', views: 7600, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '序列公路求生', '5', '_480P'), '720P': buildVideoUrl('沙雕动画', '序列公路求生', '5', '_720P'), '1080P': buildVideoUrl('沙雕动画', '序列公路求生', '5', '_1080P') } },
      { id: 6, title: '第6集', number: 6, duration: '3:20', views: 6500, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '序列公路求生', '6', '_480P'), '720P': buildVideoUrl('沙雕动画', '序列公路求生', '6', '_720P'), '1080P': buildVideoUrl('沙雕动画', '序列公路求生', '6', '_1080P') } },
      { id: 7, title: '第7集', number: 7, duration: '3:20', views: 5400, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '序列公路求生', '7', '_480P'), '720P': buildVideoUrl('沙雕动画', '序列公路求生', '7', '_720P'), '1080P': buildVideoUrl('沙雕动画', '序列公路求生', '7', '_1080P') } },
      { id: 8, title: '第8集', number: 8, duration: '3:20', views: 4300, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '序列公路求生', '8', '_480P'), '720P': buildVideoUrl('沙雕动画', '序列公路求生', '8', '_720P'), '1080P': buildVideoUrl('沙雕动画', '序列公路求生', '8', '_1080P') } },
      { id: 9, title: '第9集', number: 9, duration: '3:20', views: 3200, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '序列公路求生', '9', '_480P'), '720P': buildVideoUrl('沙雕动画', '序列公路求生', '9', '_720P'), '1080P': buildVideoUrl('沙雕动画', '序列公路求生', '9', '_1080P') } },
    ]
  },
  {
    id: 2,
    title: '第一序列',
    category: 'shadiao',
    subCategory: 'dushi',
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
  },
  {
    id: 3,
    title: '不灭之王',
    category: 'shadiao',
    subCategory: 'xiuxian',
    status: '连载中',
    totalEpisodes: 37,
    cover: buildCoverUrl('沙雕动画', '不灭之王', 'jpeg'),
    description: '不灭之王，沙雕动画修仙大作，精彩剧情持续更新中～',
    author: '夏范',
    authorAvatar: 'https://www.douyin.com/user/MS4wLjABAAAANDAGDDcLn2weri91EMcij3kt-crPsXVxXRBs9dc3CKUxwGvLLKhC_RJ8loImnEDM?from_tab_name=main&vid=7523482957958450472',
    episodes: [
      { id: 1, title: '第1集', number: 1, duration: '3:00', views: 36100, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '1', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '1', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '1', '_1080P') } },
      { id: 2, title: '第2集', number: 2, duration: '3:00', views: 35200, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '2', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '2', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '2', '_1080P') } },
      { id: 3, title: '第3集', number: 3, duration: '3:00', views: 34300, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '3', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '3', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '3', '_1080P') } },
      { id: 4, title: '第4集', number: 4, duration: '3:00', views: 33400, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '4', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '4', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '4', '_1080P') } },
      { id: 5, title: '第5集', number: 5, duration: '3:00', views: 32500, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '5', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '5', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '5', '_1080P') } },
      { id: 6, title: '第6集', number: 6, duration: '3:00', views: 31600, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '6', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '6', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '6', '_1080P') } },
      { id: 7, title: '第7集', number: 7, duration: '3:00', views: 30700, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '7', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '7', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '7', '_1080P') } },
      { id: 8, title: '第8集', number: 8, duration: '3:00', views: 29800, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '8', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '8', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '8', '_1080P') } },
      { id: 9, title: '第9集', number: 9, duration: '3:00', views: 28900, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '9', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '9', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '9', '_1080P') } },
      { id: 10, title: '第10集', number: 10, duration: '3:00', views: 28000, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '10', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '10', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '10', '_1080P') } },
      { id: 11, title: '第11集', number: 11, duration: '3:00', views: 27100, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '11', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '11', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '11', '_1080P') } },
      { id: 12, title: '第12集', number: 12, duration: '3:00', views: 26200, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '12', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '12', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '12', '_1080P') } },
      { id: 13, title: '第13集', number: 13, duration: '3:00', views: 25300, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '13', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '13', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '13', '_1080P') } },
      { id: 14, title: '第14集', number: 14, duration: '3:00', views: 24400, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '14', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '14', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '14', '_1080P') } },
      { id: 15, title: '第15集', number: 15, duration: '3:00', views: 23500, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '15', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '15', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '15', '_1080P') } },
      { id: 16, title: '第16集', number: 16, duration: '3:00', views: 22600, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '16', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '16', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '16', '_1080P') } },
      { id: 17, title: '第17集', number: 17, duration: '3:00', views: 21700, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '17', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '17', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '17', '_1080P') } },
      { id: 18, title: '第18集', number: 18, duration: '3:00', views: 20800, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '18', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '18', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '18', '_1080P') } },
      { id: 19, title: '第19集', number: 19, duration: '3:00', views: 19900, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '19', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '19', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '19', '_1080P') } },
      { id: 20, title: '第20集', number: 20, duration: '3:00', views: 19000, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '20', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '20', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '20', '_1080P') } },
      { id: 21, title: '第21集', number: 21, duration: '3:00', views: 18100, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '21', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '21', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '21', '_1080P') } },
      { id: 22, title: '第22集', number: 22, duration: '3:00', views: 17200, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '22', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '22', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '22', '_1080P') } },
      { id: 23, title: '第23集', number: 23, duration: '3:00', views: 16300, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '23', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '23', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '23', '_1080P') } },
      { id: 24, title: '第24集', number: 24, duration: '3:00', views: 15400, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '24', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '24', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '24', '_1080P') } },
      { id: 25, title: '第25集', number: 25, duration: '3:00', views: 14500, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '25', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '25', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '25', '_1080P') } },
      { id: 26, title: '第26集', number: 26, duration: '3:00', views: 13600, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '26', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '26', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '26', '_1080P') } },
      { id: 27, title: '第27集', number: 27, duration: '3:00', views: 12700, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '27', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '27', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '27', '_1080P') } },
      { id: 28, title: '第28集', number: 28, duration: '3:00', views: 11800, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '28', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '28', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '28', '_1080P') } },
      { id: 29, title: '第29集', number: 29, duration: '3:00', views: 10900, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '29', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '29', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '29', '_1080P') } },
      { id: 30, title: '第30集', number: 30, duration: '3:00', views: 10000, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '30', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '30', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '30', '_1080P') } },
      { id: 31, title: '第31集', number: 31, duration: '3:00', views: 9100, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '31', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '31', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '31', '_1080P') } },
      { id: 32, title: '第32集', number: 32, duration: '3:00', views: 8200, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '32', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '32', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '32', '_1080P') } },
      { id: 33, title: '第33集', number: 33, duration: '3:00', views: 7300, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '33', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '33', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '33', '_1080P') } },
      { id: 34, title: '第34集', number: 34, duration: '3:00', views: 6400, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '34', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '34', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '34', '_1080P') } },
      { id: 35, title: '第35集', number: 35, duration: '3:00', views: 5500, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '35', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '35', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '35', '_1080P') } },
      { id: 36, title: '第36集', number: 36, duration: '3:00', views: 4600, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '36', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '36', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '36', '_1080P') } },
      { id: 37, title: '第37集', number: 37, duration: '3:00', views: 3700, uploadedAt: '2026/7/12-22:00:00', qualities: { '480P': buildVideoUrl('沙雕动画', '不灭之王', '37', '_480P'), '720P': buildVideoUrl('沙雕动画', '不灭之王', '37', '_720P'), '1080P': buildVideoUrl('沙雕动画', '不灭之王', '37', '_1080P') } },
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