/* ============================================
   视频网站 - 核心逻辑（剧集系统版）
   渲染 · 搜索 · 筛选 · 播放
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

/* ---------- Render series cards (首页剧集卡片) ---------- */
function renderSeriesCards(list, container) {
  if (!container) return;

  if (!list || list.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h3>没有找到匹配的剧集</h3>
        <p>试试其他关键词或分类</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(series => `
    <div class="video-card" onclick="goToPlayer(${series.id})">
      <div class="video-card-thumb">
        <img src="${series.cover}" alt="${series.title}" loading="lazy" onerror="this.src='https://picsum.photos/seed/${series.id}/640/360'">
        <span class="video-card-duration">${series.totalEpisodes} 集</span>
      </div>
      <div class="video-card-body">
        <div class="series-card-header">
          <h3 class="video-card-title">${series.title}</h3>
          <span class="series-status-badge ${series.status === '已完结' ? 'finished' : 'ongoing'}">${series.status}</span>
        </div>
        <div class="video-card-meta">
          <span>${getCategoryLabel(series.category)}</span>
          <span>·</span>
          <span>${series.episodes.length} 集</span>
        </div>
        <div class="video-card-author">
          <img src="${series.authorAvatar}" alt="" onerror="this.style.display='none'">
          <span>${series.author}</span>
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

/* ---------- Navigate to player page ---------- */
function goToPlayer(seriesId, episodeId) {
  let url = `player.html?series=${seriesId}`;
  if (episodeId) url += `&episode=${episodeId}`;
  window.location.href = url;
}

/* ---------- Get series by ID ---------- */
function getSeriesById(id) {
  return seriesList.find(s => s.id === Number(id));
}

/* ---------- Search & filter for series ---------- */
function filterSeries(list, { category, query }) {
  let result = [...list];

  if (category && category !== 'all') {
    result = result.filter(s => s.category === category);
  }

  if (query && query.trim()) {
    const q = query.trim().toLowerCase();
    result = result.filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.author.toLowerCase().includes(q) ||
      s.episodes.some(ep => ep.title.toLowerCase().includes(q))
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
   Series Page Initialization (播放页)
   ============================================ */
function initSeriesPage() {
  const params = new URLSearchParams(window.location.search);
  const seriesId = params.get('series');
  const episodeId = params.get('episode');
  const series = getSeriesById(seriesId);

  if (!series) {
    document.querySelector('.player-container')?.remove();
    document.querySelector('.main-content').innerHTML = `
      <div class="empty-state">
        <h3>剧集不存在</h3>
        <p>返回 <a href="index.html" style="color:var(--accent)">首页</a></p>
      </div>
    `;
    return;
  }

  // Determine which episode to start with
  let currentEpisode;
  if (episodeId) {
    currentEpisode = series.episodes.find(ep => ep.id === Number(episodeId));
  }
  if (!currentEpisode) {
    currentEpisode = series.episodes[0];
  }

  let currentQuality = '1080P';

  // ---- Quality switching ----
  const qualityOptions = document.getElementById('quality-options');
  const videoEl = document.getElementById('player');

  function switchQuality(qualityId) {
    if (!currentEpisode || !currentEpisode.qualities || !currentEpisode.qualities[qualityId]) return;
    if (!videoEl) return;

    const currentTime = videoEl.currentTime;
    const wasPlaying = !videoEl.paused;

    videoEl.querySelector('source').src = currentEpisode.qualities[qualityId];
    videoEl.load();

    videoEl.addEventListener('loadedmetadata', function onLoaded() {
      videoEl.currentTime = currentTime;
      if (wasPlaying) videoEl.play();
      videoEl.removeEventListener('loadedmetadata', onLoaded);
    });

    currentQuality = qualityId;

    qualityOptions.querySelectorAll('.quality-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.quality === qualityId);
    });
  }

  // ---- Episode switching ----
  function switchEpisode(episode) {
    if (!episode || !episode.qualities) return;
    currentEpisode = episode;

    // Update video source
    const quality = episode.qualities[currentQuality] || episode.qualities['1080P'];
    if (videoEl && quality) {
      const currentTime = videoEl.currentTime;
      const wasPlaying = !videoEl.paused;

      videoEl.querySelector('source').src = quality;
      videoEl.load();

      videoEl.addEventListener('loadedmetadata', function onLoaded() {
        videoEl.currentTime = currentTime;
        if (wasPlaying) videoEl.play();
        videoEl.removeEventListener('loadedmetadata', onLoaded);
      });
    }

    // Update title & stats
    document.title = `${series.title} ${episode.title} - VideoHub`;
    document.getElementById('player-title').textContent = `${series.title} ${episode.title}`;
    document.getElementById('player-stats').innerHTML = `
      <span>${formatViews(episode.views)}</span>
      <span>·</span>
      <span>${episode.uploadedAt}</span>
    `;

    // Highlight current episode in grid
    document.querySelectorAll('.episode-item').forEach(item => {
      item.classList.toggle('active', Number(item.dataset.episodeId) === episode.id);
    });

    // Update URL without reloading
    const url = new URL(window.location);
    url.searchParams.set('episode', episode.id);
    window.history.replaceState({}, '', url);

    // Update quality buttons (episode may have different quality sources)
    qualityOptions.querySelectorAll('.quality-btn').forEach(btn => {
      const qId = btn.dataset.quality;
      btn.classList.toggle('active', qId === currentQuality);
    });
  }

  // ---- Render quality options ----
  if (currentEpisode && currentEpisode.qualities) {
    qualityOptions.innerHTML = QUALITY_LIST.map(q => `
      <button class="quality-btn ${q.id === currentQuality ? 'active' : ''}"
              data-quality="${q.id}">${q.label}</button>
    `).join('');

    qualityOptions.querySelectorAll('.quality-btn').forEach(btn => {
      btn.addEventListener('click', () => switchQuality(btn.dataset.quality));
    });
  } else {
    qualityOptions.innerHTML = '';
  }

  // ---- Set initial video source ----
  if (videoEl && currentEpisode && currentEpisode.qualities) {
    const initialQuality = currentEpisode.qualities['1080P'] || Object.values(currentEpisode.qualities)[0];
    videoEl.querySelector('source').src = initialQuality;
    videoEl.load();
  }

  // ---- Episode title & stats ----
  document.title = `${series.title} ${currentEpisode.title} - VideoHub`;
  document.getElementById('player-title').textContent = `${series.title} ${currentEpisode.title}`;
  document.getElementById('player-stats').innerHTML = `
    <span>${formatViews(currentEpisode.views)}</span>
    <span>·</span>
    <span>${currentEpisode.uploadedAt}</span>
  `;

  // ---- Series intro (专题栏) ----
  document.getElementById('series-cover').src = series.cover;
  document.getElementById('series-cover').onerror = function() {
    this.style.display = 'none';
  };
  document.getElementById('series-title').textContent = series.title;
  const badge = document.getElementById('series-badge');
  badge.textContent = series.status;
  badge.className = `series-intro-badge ${series.status === '已完结' ? 'finished' : 'ongoing'}`;
  document.getElementById('series-meta').innerHTML = `
    <span>${series.totalEpisodes} 集</span>
    <span>·</span>
    <span>${getCategoryLabel(series.category)}</span>
  `;
  document.getElementById('series-desc').textContent = series.description;
  const authorAvatar = document.getElementById('series-author-avatar');
  authorAvatar.src = series.authorAvatar;
  authorAvatar.onerror = function() { this.style.display = 'none'; };
  document.getElementById('series-author-name').textContent = series.author;

  // ---- Episode grid (选集) ----
  const episodeGrid = document.getElementById('episode-grid');
  episodeGrid.innerHTML = series.episodes.map(ep => `
    <div class="episode-item ${ep.id === currentEpisode.id ? 'active' : ''}"
         data-episode-id="${ep.id}"
         onclick="initSeriesPage.switchEpisode(${ep.id})">
      <span class="episode-item-title">${ep.title}</span>
    </div>
  `).join('');

  // Expose switchEpisode globally so onclick works
  initSeriesPage.switchEpisode = function(episodeId) {
    const ep = series.episodes.find(e => e.id === Number(episodeId));
    if (ep) switchEpisode(ep);
  };
}

/* ============================================
   Index Page Initialization (首页)
   ============================================ */
function initIndexPage(initialQuery = '') {
  const videoGrid = document.getElementById('video-grid');
  const categoriesEl = document.getElementById('categories');
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');

  let activeCategory = 'all';
  let searchQuery = initialQuery;

  function render() {
    const filtered = filterSeries(seriesList, {
      category: activeCategory,
      query: searchQuery
    });
    renderSeriesCards(filtered, videoGrid);
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
    initSeriesPage();
  } else {
    initIndexPage(searchQuery);
  }
});