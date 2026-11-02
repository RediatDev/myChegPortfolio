import { useState } from 'react';
import Icon from '../components/Icons.jsx';
import Reveal from '../components/Reveal.jsx';
import Lightbox from '../components/Lightbox.jsx';
import { CTA, PageHero, usePageTitle } from '../components/Common.jsx';
import { awards } from '../data/content.js';

export default function Awards() {
  usePageTitle('Awards');
  const [lb, setLb] = useState(null);
  const items = awards.map((a) => ({ src: a.image, title: a.title, caption: `${a.org} · ${a.date}` }));
  const [feature, ...rest] = awards;

  return (
    <>
      <PageHero
        eyebrow="Honours"
        title={<>Awards &amp; <em>recognition</em></>}
        lead="Recognition for research and presentation, from undergraduate research competitions at Jimma University to Research Scholars’ Day at IIT Roorkee."
      />

      <section className="section">
        <div className="container">
          <Reveal className="card award-feature">
            <button className="award-feature__media" onClick={() => setLb(0)} aria-label={`View ${feature.title}`}>
              <img src={feature.image} alt={feature.title} />
            </button>
            <div className="award-feature__body">
              <span className="chip chip--accent"><Icon name="award" size={15} />&nbsp;Most recent</span>
              <h2>{feature.title}</h2>
              <p className="lead">{feature.text}</p>
              <span className="mono muted">{feature.org} · {feature.date}</span>
            </div>
          </Reveal>

          <div className="grid grid-2" style={{ marginTop: 24 }}>
            {rest.map((a, i) => (
              <Reveal key={a.title} delay={(i % 2) * 80}>
                <button className="card card--hover tile award" onClick={() => setLb(i + 1)} aria-label={`View ${a.title}`}>
                  <div className="tile__media award__media">
                    <img src={a.image} alt={a.title} loading="lazy" />
                    <span className="tile__zoom"><Icon name="expand" size={16} /></span>
                  </div>
                  <div className="tile__body">
                    <span className="tile__meta">{a.org} · {a.date}</span>
                    <h3>{a.title}</h3>
                    <span className="tile__text">{a.text}</span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Lightbox items={items} index={lb} onClose={() => setLb(null)} onIndex={setLb} />
    </>
  );
}
