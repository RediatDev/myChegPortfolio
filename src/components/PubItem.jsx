import { useState } from 'react';
import Icon from './Icons.jsx';

const ME = 'Rediat T.';

export function citation(p) {
  return `${p.authors.join(', ')} (${p.year}). ${p.title}. ${p.journal}. https://doi.org/${p.doi}`;
}

export default function PubItem({ pub, index, compact = false }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(citation(pub));
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* clipboard unavailable */ }
  };
  return (
    <article className={`pub card card--hover ${compact ? 'pub--compact' : ''}`}>
      <a className="pub__cover" href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true">
        <img src={pub.cover} alt="" loading="lazy" />
      </a>
      <div className="pub__body">
        <div className="pub__meta">
          {index !== undefined && <span className="mono pub__num">[{String(index).padStart(2, '0')}]</span>}
          <span className="mono">{pub.journal}</span>
          <span className="pub__dot" />
          <span className="mono">{pub.date}</span>
          {pub.role && <span className={`chip ${pub.role === 'First author' ? 'chip--accent' : ''}`} style={{ height: 24, fontSize: 12 }}>{pub.role}</span>}
        </div>
        <h3><a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer">{pub.title}</a></h3>
        {!compact && (
          <p className="pub__authors">
            {pub.authors.map((a, i) => (
              <span key={a}>
                {a.startsWith(ME) ? <strong>{a}</strong> : a}
                {i < pub.authors.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
        )}
        <div className="pub__actions">
          <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer" className="link-arrow">Read paper <Icon name="arrowUpRight" /></a>
          {!compact && (
            <button className="pub__copy" onClick={copy} aria-live="polite">
              <Icon name={copied ? 'check' : 'copy'} size={15} /> {copied ? 'Copied' : 'Copy citation'}
            </button>
          )}
          <span className="mono muted pub__doi">doi:{pub.doi}</span>
        </div>
      </div>
    </article>
  );
}
