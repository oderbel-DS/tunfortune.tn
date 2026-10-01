---
interface Props { title: string; text: string; icon: string; badge?: string; soon?: boolean }
const { title, text, icon, badge, soon = false } = Astro.props;
const icons: Record<string, string> = {
  patrimoine: '<path d="M3 9.5 12 4l9 5.5M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"/>',
  immo: '<path d="M3 11 11 4.5l8 6.5M5 9.5V20h12v-9.5"/><path d="M9.5 20v-5h3v5"/><path d="M19.5 2.5v3M18 4h3" stroke-linecap="round"/>',
  simulation: '<path d="M4 20V4M4 20h16"/><path d="M7 16l4-5 3 3 5-7"/>',
  formulaire: '<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 11h7M9 14.5h7"/><path d="m9.5 18 1.5 1.5 3-3"/>',
  irpp: '<rect x="4" y="5" width="16" height="15" rx="1.5"/><path d="M4 9.5h16M8.5 3v4M15.5 3v4M9 17l6-5"/>',
};
---
<li class:list={['card', { soon }]}>
  <div class="visual" aria-hidden="true"><slot /></div>
  <div class="body">
    <p class="top">
      <span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" set:html={icons[icon]} /></span>
      {badge && <span class:list={['badge', { gold: badge === 'IA' }]}>{badge}</span>}
    </p>
    <h3>{title}</h3>
    <p class="text">{text}</p>
  </div>
</li>

<style>
  .card {
    flex: none; width: min(24.5rem, 82vw); scroll-snap-align: start;
    display: flex; flex-direction: column;
    background: #fff; border: 1px solid var(--line); border-radius: 20px; overflow: hidden;
    transition: transform 350ms cubic-bezier(.2,.7,.2,1), box-shadow 350ms ease, border-color 250ms ease;
  }
  .card:hover { transform: translateY(-6px); box-shadow: 0 30px 50px -30px rgba(11,18,32,0.35); border-color: #d9c79f; }
  .visual { background: var(--paper); border-bottom: 1px solid var(--line); padding: 22px; min-height: 12.5rem; display: grid; align-content: center; }
  .body { padding: 22px 24px 26px; }
  .top { display: flex; align-items: center; justify-content: space-between; margin: 0 0 14px; }
  .ico { display: grid; place-items: center; width: 2.6rem; height: 2.6rem; border-radius: 10px; color: var(--gold-ink); background: #f6efe0; border: 1px solid #e8d9b8; }
  .ico svg { width: 1.35rem; height: 1.35rem; }
  .badge { font-size: 0.7rem; font-weight: 600; padding: 0.3rem 0.6rem; border-radius: 999px; border: 1px dashed #b9c2cf; color: var(--muted); }
  .badge.gold { background: var(--gold); border: 0; color: var(--navy); font-weight: 700; }
  h3 { font-size: 1.85rem; margin: 0 0 0.5rem; }
  .text { font-size: 0.93rem; line-height: 1.65; color: var(--muted); margin: 0; }
  .soon { border-style: dashed; }
  .soon .visual { opacity: 0.75; }
</style>
