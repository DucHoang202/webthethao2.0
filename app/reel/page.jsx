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
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.1751 16.8167C12.9584 16.8167 12.7334 16.8083 12.4917 16.7833C12.0584 16.75 11.5667 16.6667 11.0584 16.5417L9.65839 16.2083C5.81673 15.3 4.55839 13.2667 5.45839 9.43333L6.27506 5.94166C6.45839 5.14999 6.67506 4.50833 6.94173 3.97499C8.37506 1.01666 11.1167 1.28333 13.0667 1.74166L14.4584 2.06666C16.4084 2.52499 17.6417 3.24999 18.3334 4.35833C19.0167 5.46666 19.1251 6.89166 18.6667 8.84166L17.8501 12.325C17.1334 15.375 15.6417 16.8167 13.1751 16.8167ZM10.9334 2.70833C9.54173 2.70833 8.65839 3.28333 8.06673 4.51666C7.85006 4.96666 7.65839 5.52499 7.49173 6.22499L6.67506 9.71666C5.93339 12.8667 6.79173 14.2417 9.94173 14.9917L11.3417 15.325C11.7917 15.4333 12.2167 15.5 12.6001 15.5333C14.8667 15.7583 15.9917 14.7667 16.6251 12.0417L17.4417 8.55833C17.8167 6.94999 17.7667 5.82499 17.2667 5.01666C16.7667 4.20833 15.7834 3.65833 14.1667 3.28333L12.7751 2.95833C12.0834 2.79166 11.4667 2.70833 10.9334 2.70833Z" fill="white" />
            <path d="M6.94155 18.5417C4.79988 18.5417 3.43321 17.2583 2.55821 14.55L1.49155 11.2583C0.308214 7.59168 1.36655 5.52501 5.01655 4.34168L6.33321 3.91668C6.76655 3.78334 7.09155 3.69168 7.38321 3.64168C7.62488 3.59168 7.85821 3.68334 7.99988 3.87501C8.14155 4.06668 8.16655 4.31668 8.06655 4.53334C7.84988 4.97501 7.65821 5.53334 7.49988 6.23334L6.68321 9.72501C5.94155 12.875 6.79988 14.25 9.94988 15L11.3499 15.3333C11.7999 15.4417 12.2249 15.5083 12.6082 15.5417C12.8749 15.5667 13.0915 15.75 13.1665 16.0083C13.2332 16.2667 13.1332 16.5333 12.9165 16.6833C12.3665 17.0583 11.6749 17.375 10.7999 17.6583L9.48321 18.0917C8.52488 18.3917 7.69155 18.5417 6.94155 18.5417ZM6.48321 5.18334L5.40821 5.53334C2.43321 6.49168 1.72488 7.89168 2.68321 10.875L3.74988 14.1667C4.71655 17.1417 6.11655 17.8583 9.09155 16.9L10.4082 16.4667C10.4582 16.45 10.4999 16.4333 10.5499 16.4167L9.66655 16.2083C5.82488 15.3 4.56655 13.2667 5.46655 9.43334L6.28321 5.94168C6.34155 5.67501 6.40821 5.41668 6.48321 5.18334Z" fill="white" />
            <path d="M14.5751 8.75833C14.5251 8.75833 14.4751 8.75 14.4168 8.74166L10.3751 7.71666C10.0418 7.63333 9.84181 7.29166 9.92514 6.95833C10.0085 6.625 10.3501 6.425 10.6835 6.50833L14.7251 7.53333C15.0585 7.61666 15.2585 7.95833 15.1751 8.29166C15.1085 8.56666 14.8501 8.75833 14.5751 8.75833Z" fill="white" />
            <path d="M12.1333 11.575C12.0833 11.575 12.0333 11.5667 11.9749 11.5583L9.54994 10.9417C9.21661 10.8583 9.01661 10.5167 9.09994 10.1833C9.18328 9.85 9.52494 9.65 9.85828 9.73334L12.2833 10.35C12.6166 10.4333 12.8166 10.775 12.7333 11.1083C12.6666 11.3917 12.4166 11.575 12.1333 11.575Z" fill="white" />
          </svg>

          Nhận định
        </div>
        <div class="nav-item">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.833 7.29166C14.108 7.29166 12.708 5.89166 12.708 4.16666C12.708 2.44166 14.108 1.04166 15.833 1.04166C17.558 1.04166 18.958 2.44166 18.958 4.16666C18.958 5.89166 17.558 7.29166 15.833 7.29166ZM15.833 2.29166C14.7997 2.29166 13.958 3.13332 13.958 4.16666C13.958 5.19999 14.7997 6.04166 15.833 6.04166C16.8663 6.04166 17.708 5.19999 17.708 4.16666C17.708 3.13332 16.8663 2.29166 15.833 2.29166Z" fill="white" />
            <path d="M9.99967 11.4583H5.83301C5.49134 11.4583 5.20801 11.175 5.20801 10.8333C5.20801 10.4917 5.49134 10.2083 5.83301 10.2083H9.99967C10.3413 10.2083 10.6247 10.4917 10.6247 10.8333C10.6247 11.175 10.3413 11.4583 9.99967 11.4583Z" fill="white" />
            <path d="M13.333 14.7917H5.83301C5.49134 14.7917 5.20801 14.5083 5.20801 14.1667C5.20801 13.825 5.49134 13.5417 5.83301 13.5417H13.333C13.6747 13.5417 13.958 13.825 13.958 14.1667C13.958 14.5083 13.6747 14.7917 13.333 14.7917Z" fill="white" />
            <path d="M12.5003 18.9583H7.50033C2.97533 18.9583 1.04199 17.025 1.04199 12.5V7.49999C1.04199 2.97499 2.97533 1.04166 7.50033 1.04166H11.667C12.0087 1.04166 12.292 1.32499 12.292 1.66666C12.292 2.00832 12.0087 2.29166 11.667 2.29166H7.50033C3.65866 2.29166 2.29199 3.65832 2.29199 7.49999V12.5C2.29199 16.3417 3.65866 17.7083 7.50033 17.7083H12.5003C16.342 17.7083 17.7087 16.3417 17.7087 12.5V8.33332C17.7087 7.99166 17.992 7.70832 18.3337 7.70832C18.6753 7.70832 18.9587 7.99166 18.9587 8.33332V12.5C18.9587 17.025 17.0253 18.9583 12.5003 18.9583Z" fill="white" />
          </svg>

          Mới nhất
        </div>
        <a href="/" class="nav-item active">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="42" height="42" rx="21" fill="#B72424" />
            <path d="M23.2505 29.9583H18.7505C14.6338 29.9583 12.8838 28.2 12.8838 24.0917V20.35C12.8838 20.0083 13.1671 19.725 13.5088 19.725C13.8505 19.725 14.1338 20.0083 14.1338 20.35V24.0917C14.1338 27.5 15.3421 28.7083 18.7505 28.7083H23.2421C26.6505 28.7083 27.8588 27.5 27.8588 24.0917V20.35C27.8588 20.0083 28.1421 19.725 28.4838 19.725C28.8255 19.725 29.1088 20.0083 29.1088 20.35V24.0917C29.1171 28.2 27.3588 29.9583 23.2505 29.9583Z" fill="white" />
            <path d="M21.0002 21.625C20.0835 21.625 19.2502 21.2667 18.6585 20.6083C18.0668 19.95 17.7918 19.0917 17.8835 18.175L18.4418 12.6083C18.4752 12.2917 18.7418 12.0417 19.0668 12.0417H22.9585C23.2835 12.0417 23.5502 12.2833 23.5835 12.6083L24.1418 18.175C24.2335 19.0917 23.9585 19.95 23.3668 20.6083C22.7502 21.2667 21.9168 21.625 21.0002 21.625ZM19.6252 13.2917L19.1252 18.3C19.0668 18.8583 19.2335 19.3833 19.5835 19.7667C20.2918 20.55 21.7085 20.55 22.4168 19.7667C22.7668 19.375 22.9335 18.85 22.8752 18.3L22.3752 13.2917H19.6252Z" fill="white" />
            <path d="M15.6995 21.625C14.7079 21.625 13.8079 21.2333 13.1662 20.525C12.5245 19.8167 12.2245 18.8833 12.3245 17.9L12.5495 15.6083C12.8995 13.0667 14.0412 12.0417 16.4912 12.0417H19.0329C19.2079 12.0417 19.3745 12.1167 19.4995 12.25C19.6245 12.3833 19.6745 12.5583 19.6579 12.7333L19.0745 18.575C18.8995 20.2583 17.3912 21.625 15.6995 21.625ZM16.4912 13.2917C14.6662 13.2917 14.0579 13.8417 13.7912 15.75L13.5662 18.025C13.4995 18.6583 13.6912 19.25 14.0912 19.6917C14.4912 20.1333 15.0579 20.375 15.6995 20.375C16.7495 20.375 17.7245 19.4917 17.8245 18.45L18.3412 13.2917H16.4912Z" fill="white" />
            <path d="M23.0837 29.9583H18.917C18.5753 29.9583 18.292 29.675 18.292 29.3333V27.25C18.292 25.5 19.2503 24.5417 21.0003 24.5417C22.7503 24.5417 23.7087 25.5 23.7087 27.25V29.3333C23.7087 29.675 23.4253 29.9583 23.0837 29.9583ZM19.542 28.7083H22.4587V27.25C22.4587 26.2 22.0503 25.7917 21.0003 25.7917C19.9503 25.7917 19.542 26.2 19.542 27.25V28.7083Z" fill="white" />
          </svg>

        </a>
        <div class="nav-item">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.2746 1.66666H7.72461V5.29999H12.2746V1.66666Z" fill="#FE5D46" />
            <path d="M13.5254 1.66666V5.29999H18.2254C17.8004 3.00832 16.1087 1.67499 13.5254 1.66666Z" fill="#FE5D46" />
            <path d="M1.66699 6.54999V13.4917C1.66699 16.525 3.47533 18.3333 6.50866 18.3333H13.492C16.5253 18.3333 18.3337 16.525 18.3337 13.4917V6.54999H1.66699ZM12.0337 13.4833L10.3003 14.4833C9.93366 14.6917 9.57533 14.8 9.24199 14.8C8.99199 14.8 8.76699 14.7417 8.55866 14.625C8.07533 14.35 7.80866 13.7833 7.80866 13.05V11.05C7.80866 10.3167 8.07533 9.74999 8.55866 9.47499C9.04199 9.19165 9.65866 9.24165 10.3003 9.61665L12.0337 10.6167C12.6753 10.9833 13.0253 11.5 13.0253 12.0583C13.0253 12.6167 12.667 13.1083 12.0337 13.4833Z" fill="#FE5D46" />
            <path d="M6.47539 1.66666C3.89206 1.67499 2.20039 3.00832 1.77539 5.29999H6.47539V1.66666Z" fill="#FE5D46" />
          </svg>

          <div className="text-[#FE5D46]">Video</div>
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
