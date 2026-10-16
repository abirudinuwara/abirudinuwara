/* Additional real projects for the existing portfolio's Projects grid. */
(() => {
  const entries = [
    {
      title: 'CivicPulse',
      category: 'UI / UX DESIGN · FIGMA',
      description: 'A civic-focused digital interface concept exploring clear information architecture, intuitive navigation, accessible visual hierarchy and consistent layouts. The Figma design presents the interface and its visual direction.',
      url: 'https://www.figma.com/design/BCsOm3Lkg4j56FyzZZoOvd/CivicPulse-_-Abiru-Dinuwara?node-id=1-2444',
      action: 'View Figma design',
      art: 'civic'
    },
    {
      title: 'Readify',
      category: 'WEB DEVELOPMENT · HTML / CSS / JAVASCRIPT',
      description: 'A reading companion that brings book discovery and personal reading tools together. Browse and filter books, get genre-based recommendations, track pages read, save reading selections and enjoy background audio while reading.',
      url: 'https://abirudinuwara.github.io/Readiyf/',
      action: 'Explore live website',
      art: 'readify'
    }
  ];
  const styles = document.createElement('style');
  styles.textContent = `
    .projects-cards > .ad-added-project {
      position: relative; display: flex; flex-direction: column; min-width: 0;
      border: 1px solid rgba(120,151,168,.38); border-radius: 3px;
      background: #0f202a; color:#f1f8fb; overflow:hidden; text-decoration:none;
      transition:transform .25s ease,border-color .25s ease,box-shadow .25s ease;
    }
    .projects-cards > .ad-added-project:hover,
    .projects-cards > .ad-added-project:focus-visible {
      transform:translateY(-5px); border-color:#90dfe8; box-shadow:0 18px 40px rgba(0,0,0,.2);
    }
    .ad-added-project .ad-art{height:clamp(180px,24vw,310px);position:relative;overflow:hidden;display:grid;place-items:center}
    .ad-added-project .ad-art::after{content:'';position:absolute;inset:0;opacity:.25;background-image:linear-gradient(#b9faff25 1px,transparent 1px),linear-gradient(90deg,#b9faff25 1px,transparent 1px);background-size:24px 24px}
    .ad-added-project .ad-art.civic{background:linear-gradient(140deg,#10364b,#0f7482)}
    .ad-added-project .ad-art.readify{background:linear-gradient(140deg,#251b54,#8161d1)}
    .ad-added-project .ad-device{position:relative;z-index:1;width:72%;height:67%;background:#f3f7fb;border:7px solid #d8e6ed;border-radius:10px;box-shadow:16px 15px 0 #0003;overflow:hidden}
    .ad-added-project .ad-device-bar{height:17%;background:#c5dce5;display:flex;gap:5px;align-items:center;padding-left:11px}
    .ad-added-project .ad-device-bar i{width:6px;height:6px;background:#3f8d9c;border-radius:50%}
    .ad-added-project .ad-device-body{display:grid;grid-template-columns:24% 1fr;gap:10px;padding:13px;height:83%}
    .ad-added-project .ad-device-body b{background:#d2e8ec;border-radius:4px}
    .ad-added-project .ad-device-main{display:grid;grid-template-rows:35% 1fr;gap:10px}
    .ad-added-project .ad-device-main i{display:block;background:#d2e8ec;border-radius:4px}
    .ad-added-project .ad-books{position:relative;z-index:1;display:flex;align-items:end;justify-content:center;gap:12px;transform:rotate(-8deg)}
    .ad-added-project .ad-books i{display:block;width:54px;height:120px;border-radius:5px 9px 9px 5px;background:#f6c57e;border-left:8px solid #eaa25e;box-shadow:9px 9px 0 #0002}
    .ad-added-project .ad-books i:nth-child(2){height:165px;background:#b4e7e7;border-color:#5faabf}
    .ad-added-project .ad-books i:nth-child(3){height:140px;background:#f5a8cb;border-color:#dc7aa9}
    .ad-added-project .ad-content{padding:27px 28px 30px;background:#10232f;display:flex;flex-direction:column;gap:12px;flex:1}
    .ad-added-project .ad-category{font:700 10px/1.5 ui-monospace,Consolas,monospace;letter-spacing:.1em;color:#88e0df}
    .ad-added-project h3{font:700 clamp(24px,2.5vw,33px)/1.15 Inter,Arial,sans-serif;letter-spacing:-.04em;margin:0;color:#fff}
    .ad-added-project p{font:400 14px/1.75 Inter,Arial,sans-serif;color:#c1d2db;margin:0}
    .ad-added-project .ad-action{margin-top:auto;padding-top:14px;color:#9de6e3;font:700 13px/1.4 Inter,Arial,sans-serif}
    .ad-added-project:focus-visible{outline:3px solid #9de6e3;outline-offset:3px}
    @media(max-width:640px){.ad-added-project .ad-art{height:220px}.ad-added-project .ad-content{padding:24px}}
    @media(prefers-reduced-motion:reduce){.ad-added-project{transition:none!important}}
  `;
  document.head.appendChild(styles);
  const art = (type) => type === 'civic'
    ? '<div class="ad-device" aria-hidden="true"><div class="ad-device-bar"><i></i><i></i><i></i></div><div class="ad-device-body"><b></b><div class="ad-device-main"><i></i><i></i></div></div></div>'
    : '<div class="ad-books" aria-hidden="true"><i></i><i></i><i></i></div>';
  function insertCards(grid) {
    if (grid.querySelector('[data-ad-project]')) return;
    const frag = document.createDocumentFragment();
    for (const item of entries) {
      const card = document.createElement('a');
      card.className = 'ad-added-project';
      card.dataset.adProject = item.art;
      card.href = item.url;
      card.target = '_blank';
      card.rel = 'noopener noreferrer';
      card.innerHTML = '<div class="ad-art ' + item.art + '">' + art(item.art) + '</div><div class="ad-content"><span class="ad-category"></span><h3></h3><p></p><span class="ad-action"></span></div>';
      card.querySelector('.ad-category').textContent = item.category;
      card.querySelector('h3').textContent = item.title;
      card.querySelector('p').textContent = item.description;
      card.querySelector('.ad-action').textContent = item.action + ' ↗';
      frag.appendChild(card);
    }
    grid.prepend(frag);
  }
  const apply = () => {
    const grid = document.querySelector('.projects-cards');
    if (grid) insertCards(grid);
  };
  apply();
  const observer = new MutationObserver(apply);
  observer.observe(document.documentElement,{childList:true,subtree:true});
})();
