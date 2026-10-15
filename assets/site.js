/* MosaicTools docs — search (inlined data: works on file:// AND hosted), FOTD, reveals, lightbox */
(function () {
  const REL = window.__REL || '';

  // ── Search over window.__MT_SEARCH (emitted by build.js as a script — no fetch, no CORS) ──
  let mini = null;
  function ensureIndex() {
    if (mini || !window.MiniSearch || !window.__MT_SEARCH) return mini;
    mini = new MiniSearch({
      fields: ['name', 'brief', 'tags', 'category', 'body'],
      storeFields: ['name', 'brief', 'category'],
      searchOptions: { boost: { name: 6, tags: 4, brief: 2 }, prefix: true, fuzzy: 0.2 },
    });
    mini.addAll(window.__MT_SEARCH);
    return mini;
  }

  function wireSearch(inputId, resultsId) {
    const input = document.getElementById(inputId);
    const box = document.getElementById(resultsId);
    if (!input || !box) return;
    let sel = -1;
    function render(results) {
      if (!results.length) { box.innerHTML = '<div class="sr-empty">No matches.</div>'; box.hidden = false; return; }
      box.innerHTML = results.slice(0, 10).map(r =>
        `<a class="sr-item" href="${REL}features/${r.id}.html"><span class="sr-name">${r.name}</span><span class="sr-cat">${r.category}</span><span class="sr-brief">${r.brief}</span></a>`).join('');
      box.hidden = false; sel = -1;
    }
    input.addEventListener('input', () => {
      const q = input.value.trim();
      if (!q) { box.hidden = true; return; }
      const m = ensureIndex();
      if (m) render(m.search(q));
    });
    input.addEventListener('keydown', e => {
      const items = box.querySelectorAll('.sr-item');
      if (e.key === 'ArrowDown') { sel = Math.min(sel + 1, items.length - 1); }
      else if (e.key === 'ArrowUp') { sel = Math.max(sel - 1, 0); }
      else if (e.key === 'Enter' && sel >= 0 && items[sel]) { location.href = items[sel].href; return; }
      else if (e.key === 'Escape') { box.hidden = true; input.blur(); return; }
      else return;
      e.preventDefault();
      items.forEach((it, i) => it.classList.toggle('sel', i === sel));
      if (items[sel]) items[sel].scrollIntoView({ block: 'nearest' });
    });
    document.addEventListener('click', e => { if (!input.contains(e.target) && !box.contains(e.target)) box.hidden = true; });
  }
  wireSearch('search', 'search-results');
  wireSearch('hero-search', 'hero-search-results');

  // "/" focuses search
  document.addEventListener('keydown', e => {
    if (e.key === '/' && !/input|textarea/i.test(document.activeElement.tagName)) {
      e.preventDefault();
      (document.getElementById('hero-search') || document.getElementById('search')).focus();
    }
  });

  // ── Categories dropdown ──
  const cats = document.querySelector('.nav-cats');
  if (cats) {
    cats.querySelector('.nav-cats-btn').addEventListener('click', e => { e.stopPropagation(); cats.classList.toggle('open'); });
    document.addEventListener('click', () => cats.classList.remove('open'));
  }

  // ── Scroll reveal ──
  const io = new IntersectionObserver(entries => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }, { threshold: 0.08 });
  document.querySelectorAll('.card, .catcard, .spot-ver, .module > h2, .fotd, .axischip').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = ((i % 8) * 45) + 'ms';
    io.observe(el);
  });

  // ── Feature of the day (window.__MT_FEATS; date-seeded; crossfade shuffle) ──
  const fotd = document.getElementById('fotd');
  if (fotd && window.__MT_FEATS) {
    const feats = window.__MT_FEATS;
    const day = new Date().toISOString().slice(0, 10);
    let h = 2166136261;
    for (const c of day) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); }
    let idx = Math.abs(h) % feats.length;
    function render(i) {
      const f = feats[i];
      return `<div class="fotd-inner">
        ${f.shot ? `<img class="fotd-img" src="${REL}img/${f.shot}" alt="${f.name}">` : ''}
        <div>
          <div class="fotd-cat">${f.icon} ${f.cat}</div>
          <h3>${f.name}</h3>
          <p>${f.brief}</p>
          <div class="fotd-actions">
            <a class="btn btn-primary" href="${REL}features/${f.id}.html">Learn more →</a>
            <button class="btn btn-ghost" id="fotd-shuffle"><span class="dice">🎲</span> Show me another</button>
          </div>
        </div></div>`;
    }
    function show(i, animate) {
      const swap = () => {
        fotd.innerHTML = render(i);
        document.getElementById('fotd-shuffle').addEventListener('click', () => {
          idx = (idx + 1 + Math.floor(Math.random() * (feats.length - 1))) % feats.length;
          show(idx, true);
        });
      };
      if (animate && fotd.firstElementChild) {
        fotd.firstElementChild.classList.add('swap');
        setTimeout(swap, 220);
      } else swap();
    }
    show(idx, false);
  }

  // ── Lightbox ──
  document.addEventListener('click', e => {
    const img = e.target.closest('img.lightboxable');
    if (!img) return;
    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = `<img src="${img.src}" alt="">`;
    lb.addEventListener('click', () => lb.remove());
    document.addEventListener('keydown', function esc(ev) { if (ev.key === 'Escape') { lb.remove(); document.removeEventListener('keydown', esc); } });
    document.body.appendChild(lb);
  });
})();
