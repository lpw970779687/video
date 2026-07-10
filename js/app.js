/* ============================================
   视频网站 - 核心逻辑
   渲染 · 搜索 · 筛选 · 页面跳转
   ============================================ */

/* ---------- Format helpers ---------- */
function formatViews(views) {
  if (views >= 10000) {
    const w = (views / 10000).toFixed(1);
    return w.endsWith('.0') ? `${parseInt(w)} 万次播放` : `${w} 万次播放`;
  }
  if (views >= 1000) {
    const k = (views / 1000).toFixed(1);
    return k.endsWith('.0') ? `${parseInt(k)} 千次播放` : `${k} 千次播放`;
  }
  return `${views} 次播放`;
}

function getCategoryLabel(id) {
  const c = CATEGORIES.find(c => c.id === id);
  return c ? c.label : id;
}

/* ---------- Render video cards ---------- */
function renderVideoCards(videoList, container) {
  if (!container) return;

  if (!videoList || videoList.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h3>没有找到匹配的视频</h3>
        <p>试试其他关键词或分类</p>
      </div>
    `;
    return;
  }

  container.innerHTML = videoList.map(video => `
    <div class="video-card" onclick="goToPlayer(${video.id})">
      <div class="video-card-thumb">
        <img src="${video.thumbnail}" alt="${video.title}" loading="lazy" onerror="this.src='https://picsum.photos/seed/default/640/360'">
        <span class="video-card-duration">${video.duration}</span>
      </div>
      <div class="video-card-body">
        <h3 class="video-card-title">${video.title}</h3>
        <div class="video-card-meta">
          <span>${formatViews(video.views)}</span>
          <span>·</span>
          <span>${video.uploadedAt}</span>
        </div>
        <div class="video-card-author">
          <img src="${video.avatar}" alt="" onerror="this.style.display='none'">
          <span>${video.author}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* ---------- Render categories ---------- */
function renderCategories(container, activeId, onClick) {
  if (!container) return;

  container.innerHTML = CATEGORIES.map(c => `
    <button class="category-tab ${c.id === activeId ? 'active' : ''}"
            data-category="${c.id}">${c.label}</button>
  `).join('');

  container.querySelectorAll('.category-tab').forEach(btn => {
    btn.addEventListener('click', () => onClick(btn.dataset.category));
  });
}

/* ---------- Go to player page ---------- */
function goToPlayer(videoId) {
  window.location.href = `player.html?id=${videoId}`;
}

/* ---------- Get video by ID ---------- */
function getVideoById(id) {
  return videos.find(v => v.id === Number(id));
}

/* ---------- Get related videos (same category, exclude current) ---------- */
function getRelatedVideos(video, count = 6) {
  return videos
    .filter(v => v.id !== video.id && v.category === video.category)
    .slice(0, count);
}

/* ---------- Search & filter ---------- */
function filterVideos(videos, { category, query }) {
  let result = [...videos];

  if (category && category !== 'all') {
    result = result.filter(v => v.category === category);
  }

  if (query && query.trim()) {
    const q = query.trim().toLowerCase();
    result = result.filter(v =>
      v.title.toLowerCase().includes(q) ||
      v.description.toLowerCase().includes(q) ||
      v.author.toLowerCase().includes(q)
    );
  }

  return result;
}

/* ---------- Debounce ---------- */
function debounce(fn, delay = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/* ============================================
   Player Page Initialization
   ============================================ */
function initPlayerPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const video = getVideoById(id);

  if (!video) {
    document.querySelector('.player-container')?.remove();
    document.querySelector('.main-content').innerHTML = `
      <div class="empty-state">
        <h3>视频不存在</h3>
        <p>返回 <a href="index.html" style="color:var(--accent)">首页</a></p>
      </div>
    `;
    return;
  }

  // Set video source
  const videoEl = document.getElementById('player');
  if (videoEl) {
    videoEl.querySelector('source').src = video.videoUrl;
    videoEl.load();
  }

  // Title
  document.getElementById('player-title').textContent = video.title;

  // Stats
  document.getElementById('player-stats').innerHTML = `
    <span>${formatViews(video.views)}</span>
    <span>·</span>
    <span>${video.uploadedAt}</span>
    <span class="player-category">${getCategoryLabel(video.category)}</span>
  `;

  // Author info
  document.getElementById('player-author-avatar').src = video.avatar;
  document.getElementById('player-author-name').textContent = video.author;
  document.getElementById('player-author-desc').textContent = video.description;

  // Comments
  const commentsEl = document.getElementById('comments-list');
  commentsEl.innerHTML = video.comments.map(c => `
    <div class="comment-item">
      <img src="${c.avatar}" alt="" onerror="this.style.display='none'">
      <div>
        <div class="comment-author">${c.author} <span>${c.time}</span></div>
        <div class="comment-content">${c.content}</div>
      </div>
    </div>
  `).join('');
  document.getElementById('comments-count').textContent = video.comments.length;

  // Sidebar - related videos
  const related = getRelatedVideos(video);
  const sidebarEl = document.getElementById('related-list');
  sidebarEl.innerHTML = related.map(v => `
    <div class="sidebar-video" onclick="goToPlayer(${v.id})">
      <div class="sidebar-video-thumb">
        <img src="${v.thumbnail}" alt="${v.title}" loading="lazy">
        <span class="sidebar-video-duration">${v.duration}</span>
      </div>
      <div class="sidebar-video-info">
        <div class="sidebar-video-title">${v.title}</div>
        <div class="sidebar-video-meta">${v.author} · ${formatViews(v.views)}</div>
      </div>
    </div>
  `).join('');
}

/* ============================================
   Index Page Initialization
   ============================================ */
function initIndexPage(initialQuery = '') {
  const videoGrid = document.getElementById('video-grid');
  const categoriesEl = document.getElementById('categories');
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');

  let activeCategory = 'all';
  let searchQuery = initialQuery;

  function render() {
    const filtered = filterVideos(videos, {
      category: activeCategory,
      query: searchQuery
    });
    renderVideoCards(filtered, videoGrid);
    renderCategories(categoriesEl, activeCategory, (catId) => {
      activeCategory = catId;
      render();
    });
  }

  // Search handler
  const handleSearch = debounce((query) => {
    searchQuery = query;
    render();
  }, 300);

  if (searchInput) {
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        searchQuery = e.target.value;
        render();
      }
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      searchQuery = searchInput.value;
      render();
    });
  }

  // Initial render
  render();
}

/* ---------- Global search (works on all pages) ---------- */
function initGlobalSearch() {
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');

  function doSearch(query) {
    if (query && query.trim()) {
      window.location.href = `index.html?search=${encodeURIComponent(query.trim())}`;
    }
  }

  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        doSearch(e.target.value);
      }
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      doSearch(searchInput?.value || '');
    });
  }

  // Read search param from URL (for index page)
  const params = new URLSearchParams(window.location.search);
  const q = params.get('search');
  if (q && searchInput) {
    searchInput.value = q;
  }
  return q || '';
}

/* ---------- Auto-init by page ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  // Global search on every page
  const searchQuery = initGlobalSearch();

  if (path.endsWith('player.html') || path.includes('player')) {
    initPlayerPage();
  } else {
    initIndexPage(searchQuery);
  }
});