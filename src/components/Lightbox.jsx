import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Icon from './Icons.jsx';

// Full-screen image viewer with keyboard + button navigation.
// items: [{ src, title, caption }]
export default function Lightbox({ items, index, onClose, onIndex }) {
  const open = index !== null && index !== undefined;
  const go = useCallback((d) => onIndex((index + d + items.length) % items.length), [index, items.length, onIndex]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [open, go, onClose]);

  if (!open) return null;
  const item = items[index];
  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}>
      <button className="lightbox__close" onClick={onClose} aria-label="Close"><Icon name="close" /></button>
      {items.length > 1 && (
        <>
          <button className="lightbox__nav lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Previous"><Icon name="chevronLeft" /></button>
          <button className="lightbox__nav lightbox__nav--next" onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Next"><Icon name="chevronRight" /></button>
        </>
      )}
      <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <img key={item.src} src={item.src} alt={item.title} />
        <figcaption>
          <strong>{item.title}</strong>
          {item.caption && <span>{item.caption}</span>}
          <span className="mono lightbox__count">{index + 1} / {items.length}</span>
        </figcaption>
      </figure>
    </div>,
    document.body
  );
}
