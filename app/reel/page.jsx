'use client';

import { useEffect } from "react";
import "../../styles/blocks/reel/_reel.scss"
export default function ReelsDemo() {

  useEffect(() => {
    // --- COPY TOÀN BỘ JS GỐC ---
    const app = document.getElementById('app');
    const reels = Array.from(document.querySelectorAll('.reel'));
    const soundToggle = document.getElementById('sound-toggle');
    const soundIcon = soundToggle.querySelector('.sound-icon');
    const progress = document.getElementById('progress');
    const progressMax = Number(progress.max);
    const overlay = document.getElementById('overlay');
    const overlayBack = document.getElementById('overlay-back');
    const overlayPlay = document.getElementById('overlay-play');
    const overlayNext = document.getElementById('overlay-next');

    let startY = 0;
    let mouseStart = null;
    let activeIndex = 0;
    let isAnimating = false;
    let isMuted = true;
    let currentVideo = null;
    let onTimeUpdate = null;
    let onLoadedMeta = null;
    let overlayTimer = null;

    function layoutAround(center) {
      const next = (center + 1) % reels.length;
      const prev = (center - 1 + reels.length) % reels.length;
      reels.forEach((reel, i) => {
        reel.style.transition = 'none';
        if (i === center) reel.style.transform = 'translateY(0%)';
        else if (i === next) reel.style.transform = 'translateY(100%)';
        else if (i === prev) reel.style.transform = 'translateY(-100%)';
        else reel.style.transform = 'translateY(200%)';
      });
    }

    function updateProgressBar(value) {
      const ratio = Math.min(1, Math.max(0, value / progressMax));
      const percent = ratio * 100;
      progress.style.setProperty('--p', `${percent}%`);
    }

    function updatePlayIcon(video) {
      const isPaused = !video || video.paused;
      overlayPlay.innerHTML = isPaused
        ? '<svg width="28"...></svg>'
        : '<svg width="28"...></svg>';
    }

    function syncProgress(video) {
      if (!video || !video.duration) {
        progress.value = 0;
        progress.disabled = true;
        updateProgressBar(0);
        return;
      }
      progress.disabled = false;
      const ratio = video.currentTime / video.duration;
      const val = Math.min(progressMax, Math.max(0, ratio * progressMax));
      progress.value = val;
      updateProgressBar(val);
    }

    function seekCurrentVideo(delta) {
      if (!currentVideo || !currentVideo.duration) return;
      const duration = currentVideo.duration;
      currentVideo.currentTime = Math.min(duration, Math.max(0, currentVideo.currentTime + delta));
      syncProgress(currentVideo);
    }

    function playActive() {
      reels.forEach((reel, i) => {
        const vid = reel.querySelector('video');
        if (!vid) return;
        vid.muted = isMuted;
        if (i === activeIndex) {
          bindProgress(vid);
          vid.play().catch(() => { });
          updatePlayIcon(vid);
        } else {
          vid.pause();
        }
      });
    }

    function bindProgress(video) {
      if (currentVideo && onTimeUpdate) {
        currentVideo.removeEventListener('timeupdate', onTimeUpdate);
        currentVideo.removeEventListener('loadedmetadata', onLoadedMeta);
      }
      currentVideo = video;
      if (!video) {
        syncProgress(null);
        return;
      }
      const setValue = () => syncProgress(video);
      onTimeUpdate = setValue;
      onLoadedMeta = setValue;
      video.addEventListener('timeupdate', onTimeUpdate);
      video.addEventListener('loadedmetadata', onLoadedMeta);
      setValue();
      updatePlayIcon(video);
    }

    function setMute(state) {
      isMuted = state;
      soundToggle.classList.toggle('active', !isMuted);
      reels.forEach(reel => {
        const vid = reel.querySelector('video');
        if (vid) vid.muted = isMuted;
      });
    }

    function shouldIgnoreOverlay(target) {
      const selectors = [
        '.actions', '.action-btn', '.bottom-nav', '.topbar',
        '.sound-toggle', '.nav-item', '.back', '.follow', '.progress-wrap',
        '.info', '.author-row', '.caption'
      ];
      return selectors.some(sel => target.closest(sel));
    }

    function showOverlay() {
      overlay.classList.add('visible');
      updatePlayIcon(currentVideo);
      if (overlayTimer) clearTimeout(overlayTimer);
      overlayTimer = setTimeout(() => overlay.classList.remove('visible'), 2500);
    }

    function hideOverlay() {
      overlay.classList.remove('visible');
      if (overlayTimer) clearTimeout(overlayTimer);
    }

    function animateTo(dir) {
      if (isAnimating) return;
      const target = (activeIndex + dir + reels.length) % reels.length;
      if (target === activeIndex) return;
      isAnimating = true;

      layoutAround(activeIndex);
      const currentEl = reels[activeIndex];
      const targetEl = reels[target];

      targetEl.style.transition = 'none';
      targetEl.style.transform = `translateY(${dir === 1 ? 100 : -100}%)`;

      requestAnimationFrame(() => {
        currentEl.style.transition = 'transform 280ms ease';
        targetEl.style.transition = 'transform 280ms ease';
        currentEl.style.transform = `translateY(${dir === 1 ? -100 : 100}%)`;
        targetEl.style.transform = 'translateY(0%)';
      });

      const done = () => {
        currentEl.removeEventListener('transitionend', done);
        targetEl.removeEventListener('transitionend', done);
        activeIndex = target;
        layoutAround(activeIndex);
        playActive();
        isAnimating = false;
        hideOverlay();
      };

      currentEl.addEventListener('transitionend', done);
      targetEl.addEventListener('transitionend', done);
    }

    // Touch swipe
    app.addEventListener('touchstart', e => startY = e.touches[0].clientY);
    app.addEventListener('touchend', e => {
      const delta = e.changedTouches[0].clientY - startY;
      if (Math.abs(delta) > 60) animateTo(delta > 0 ? -1 : 1);
    });

    // Mouse swipe
    app.addEventListener('mousedown', e => mouseStart = e.clientY);
    app.addEventListener('mouseup', e => {
      if (mouseStart === null) return;
      const delta = e.clientY - mouseStart;
      mouseStart = null;
      if (Math.abs(delta) > 60) animateTo(delta > 0 ? -1 : 1);
    });

    progress.addEventListener('input', () => {
      if (!currentVideo || !currentVideo.duration) return;
      const ratio = progress.value / progressMax;
      currentVideo.currentTime = ratio * currentVideo.duration;
      syncProgress(currentVideo);
    });

    soundToggle.addEventListener('click', () => {
      setMute(!isMuted);
      playActive();
    });

    reels.forEach((reel, idx) => {
      const video = reel.querySelector('video');
      if (!video) return;
      video.addEventListener('click', e => {
        if (shouldIgnoreOverlay(e.target)) return;
        if (idx !== activeIndex) return;
        showOverlay();
      });
    });

    overlayBack.addEventListener('click', e => {
      e.stopPropagation();
      seekCurrentVideo(-10);
      showOverlay();
    });

    overlayNext.addEventListener('click', e => {
      e.stopPropagation();
      seekCurrentVideo(10);
      showOverlay();
    });

    overlayPlay.addEventListener('click', e => {
      e.stopPropagation();
      if (!currentVideo) return;
      if (currentVideo.paused) currentVideo.play();
      else currentVideo.pause();
      updatePlayIcon(currentVideo);
      showOverlay();
    });

    overlay.addEventListener('click', e => {
      if (e.target === overlay) hideOverlay();
    });

    layoutAround(0);
    setMute(true);
    playActive();
    updateProgressBar(0);

  }, []);

  return (
    <div id="app" className="app">

      <div class="topbar">
        <a class="back" aria-label="Back" href="/">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </a>
        <h1>Videos</h1>
        <button class="sound-toggle" id="sound-toggle" aria-label="Bật/Tắt âm thanh">
          <svg class="sound-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        </button>
      </div>
      <div class="reels">
        <div class="reel portrait" data-index="0">
          <div class="media">
            <video src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" autoplay muted loop
              playsinline></video>
          </div>
          <div class="gradient-top"></div>
          <div class="gradient-bottom"></div>
          <div class="actions">
            <div class="action action-like">
              <div class="action-btn btn-like" aria-label="Like">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M19 14c1.49-1.46 2-4 0-6-2-2-5-2-7 1-2-3-5-3-7-1-2 2-1.5 4.54 0 6l7 7 7-7z" />
                </svg>
              </div>
              <div class="action-count">5.0k</div>
            </div>
            <div class="action action-comment">
              <div class="action-btn btn-comment" aria-label="Comment">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path
                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div class="action-count">6.0k</div>
            </div>
            <div class="action action-share">
              <div class="action-btn btn-share" aria-label="Share">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
              </div>
              <div class="action-count">7.0k</div>
            </div>
            <div class="action action-fullscreen">
              <div class="action-btn btn-fullscreen" aria-label="Full screen">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 9V5a1 1 0 0 1 1-1h4" />
                  <path d="M20 9V5a1 1 0 0 0-1-1h-4" />
                  <path d="M4 15v4a1 1 0 0 0 1 1h4" />
                  <path d="M20 15v4a1 1 0 0 1-1 1h-4" />
                </svg>
              </div>
            </div>
          </div>
          <div class="info">
            <div class="author-row">
              <div class="avatar">
                <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=crop&w=200&q=60"
                  alt="Avatar" />
              </div>
              <div class="author-name">Kiet Phan</div>
              <div class="verified">✓</div>
              <button class="follow">Follow</button>
            </div>
            <div class="caption">Lorem metus porttitor purus enim. Non et malesuada fames nunc.</div>
          </div>
        </div>
        <div class="reel landscape" data-index="1">
          <div class="media">
            <video src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" autoplay muted loop
              playsinline></video>
          </div>
          <div class="gradient-top"></div>
          <div class="gradient-bottom"></div>
          <div class="actions">
            <div class="action action-like">
              <div class="action-btn btn-like" aria-label="Like">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M19 14c1.49-1.46 2-4 0-6-2-2-5-2-7 1-2-3-5-3-7-1-2 2-1.5 4.54 0 6l7 7 7-7z" />
                </svg>
              </div>
              <div class="action-count">9.2k</div>
            </div>
            <div class="action action-comment">
              <div class="action-btn btn-comment" aria-label="Comment">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path
                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div class="action-count">1.1k</div>
            </div>
            <div class="action action-share">
              <div class="action-btn btn-share" aria-label="Share">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
              </div>
              <div class="action-count">3.4k</div>
            </div>
            <div class="action action-fullscreen">
              <div class="action-btn btn-fullscreen" aria-label="Full screen">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 9V5a1 1 0 0 1 1-1h4" />
                  <path d="M20 9V5a1 1 0 0 0-1-1h-4" />
                  <path d="M4 15v4a1 1 0 0 0 1 1h4" />
                  <path d="M20 15v4a1 1 0 0 1-1 1h-4" />
                </svg>
              </div>
            </div>
          </div>
          <div class="info">
            <div class="author-row">
              <div class="avatar">
                <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=60"
                  alt="Avatar" />
              </div>
              <div class="author-name">Miya Tran</div>
              <div class="verified">✓</div>
              <button class="follow">Follow</button>
            </div>
            <div class="caption">Short clip 1MB cho load cực nhanh, demo swiping mượt.</div>
          </div>
        </div>
        <div class="reel square" data-index="2">
          <div class="media">
            <video src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" autoplay muted loop
              playsinline></video>
          </div>
          <div class="gradient-top"></div>
          <div class="gradient-bottom"></div>
          <div class="actions">
            <div class="action action-like">
              <div class="action-btn btn-like" aria-label="Like">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M19 14c1.49-1.46 2-4 0-6-2-2-5-2-7 1-2-3-5-3-7-1-2 2-1.5 4.54 0 6l7 7 7-7z" />
                </svg>
              </div>
              <div class="action-count">12.6k</div>
            </div>
            <div class="action action-comment">
              <div class="action-btn btn-comment" aria-label="Comment">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path
                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div class="action-count">2.9k</div>
            </div>
            <div class="action action-share">
              <div class="action-btn btn-share" aria-label="Share">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
              </div>
              <div class="action-count">4.1k</div>
            </div>
            <div class="action action-fullscreen">
              <div class="action-btn btn-fullscreen" aria-label="Full screen">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 9V5a1 1 0 0 1 1-1h4" />
                  <path d="M20 9V5a1 1 0 0 0-1-1h-4" />
                  <path d="M4 15v4a1 1 0 0 0 1 1h4" />
                  <path d="M20 15v4a1 1 0 0 1-1 1h-4" />
                </svg>
              </div>
            </div>
          </div>
          <div class="info">
            <div class="author-row">
              <div class="avatar">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=60"
                  alt="Avatar" />
              </div>
              <div class="author-name">Thanh Lê</div>
              <div class="verified">✓</div>
              <button class="follow">Follow</button>
            </div>
            <div class="caption">Swipe lên để xem video tiếp theo, swipe xuống để quay lại.</div>
          </div>
        </div>
      </div>
      <div class="progress-wrap">
        <input type="range" id="progress" class="progress-bar" min="0" max="1000" value="0" step="1"
          aria-label="Tien do video" />
      </div>
      <div class="overlay" id="overlay">
        <div class="overlay-controls">
          <button class="overlay-btn btn-back10" id="overlay-back" aria-label="Lui 10 giay">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 11 4 8 9 5" />
              <path d="M20 18V6a2 2 0 0 0-3.3-1.5L9 10v4l7.7 5.5A2 2 0 0 0 20 18Z" />
            </svg>
          </button>
          <button class="overlay-btn play" id="overlay-play" aria-label="Play/Pause">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>
          <button class="overlay-btn btn-forward10" id="overlay-next" aria-label="Tien 10 giay">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 5 20 8 15 11" />
              <path d="M4 18V6a2 2 0 0 1 3.3-1.5L15 10v4l-7.7 5.5A2 2 0 0 1 4 18Z" />
            </svg>
          </button>
        </div>
      </div>
      <div class="bottom-nav">
        <div class="nav-item">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4l2.5 2.5" />
          </svg>
          Nhận định
        </div>
        <div class="nav-item">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
          Mới nhất
        </div>
        <div class="nav-item active">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15V6c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v9" />
            <path d="M7 22h10M12 17v5" />
          </svg>
          Video
        </div>
        <div class="nav-item">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="4" y="4" width="16" height="16" rx="3" />
            <path d="M4 9h16M9 15h1M14 15h1" />
          </svg>
          Reels
        </div>
        <div class="nav-item">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          Bộ môn
        </div>
      </div>


    </div>
  );
}
