import { useEffect, useRef, useState } from 'react';

// Shared, rAF-throttled scroll check. Unlike a bare IntersectionObserver, this also
// reveals elements that were skipped past during a fast scroll or an anchor jump.
// Map of element -> callback that marks it as revealed.
const pending = new Map();
let ticking = false;

function check() {
  ticking = false;
  const limit = window.innerHeight * 0.92;
  pending.forEach((reveal, el) => {
    if (!el.isConnected) { pending.delete(el); return; }
    if (el.getBoundingClientRect().top < limit) {
      reveal();
      pending.delete(el);
    }
  });
  if (!pending.size) stop();
}
function onScroll() {
  if (!ticking) { ticking = true; requestAnimationFrame(check); }
}
let listening = false;
function start() {
  if (listening) return;
  listening = true;
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
}
function stop() {
  listening = false;
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('resize', onScroll);
}

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const ref = useRef(null);
  // Visibility is kept in React state (not added to the DOM by hand), so when a parent
  // re-renders with a new className — e.g. an accordion toggling "is-open" — the
  // element stays visible instead of losing its "is-in" class.
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    pending.set(el, () => setShown(true));
    start();
    onScroll();
    return () => pending.delete(el);
  }, [shown]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'is-in' : ''} ${className}`}
      style={{ ...style, '--d': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
