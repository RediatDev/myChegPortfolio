import { Link } from 'react-router-dom';
import Icon from '../components/Icons.jsx';
import Reveal from '../components/Reveal.jsx';
import { CTA, PageHero, SectionHead, usePageTitle } from '../components/Common.jsx';
import { about, profile, education, skills, languages, learning, conferences, hobbies } from '../data/content.js';

const learnIcons = ['cpu', 'atom', 'hex'];

export default function About() {
  usePageTitle('About');
  return (
    <>
      <PageHero eyebrow="About me" title={<>Transforming nature’s resources <em>through science</em></>} />

      <section className="section">
        <div className="container about-grid">
          <Reveal className="about-photo">
            <img src={profile.portraitFormal} alt="Rediat Terefe" />
            <div className="about-facts card">
              <div><span className="mono muted">Based in</span><strong>Roorkee, India</strong></div>
              <div><span className="mono muted">From</span><strong>Addis Ababa, Ethiopia</strong></div>
              <div><span className="mono muted">Supervisor</span><strong>Prof. Prakash Biswas</strong></div>
            </div>
          </Reveal>
          <div className="about-copy">
            {about.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 60} className={i === 0 ? 'lead' : ''}>{p}</Reveal>
            ))}
            <Reveal as="p" delay={200} className="about-personal">{about.personal}</Reveal>
            <Reveal delay={240} className="hero__actions">
              <a href={profile.cv} target="_blank" rel="noreferrer" className="btn btn--primary"><Icon name="download" /> Download CV</a>
              <Link to="/contact" className="btn btn--ghost">Say hello</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="Qualification" title="Education" />
          <ol className="timeline">
            {education.map((e, i) => (
              <Reveal as="li" key={e.degree} delay={i * 80} className="timeline__item">
                <div className="timeline__marker"><img src={e.logo} alt="" /></div>
                <div className="card timeline__card">
                  <div className="timeline__head">
                    <div>
                      <h3>{e.degree}</h3>
                      <p className="muted">{e.school} · {e.place}</p>
                    </div>
                    <div className="timeline__side">
                      <span className="chip chip--accent mono">{e.period}</span>
                      {e.grade && <span className="mono muted" style={{ fontSize: 13 }}>{e.grade}</span>}
                    </div>
                  </div>
                  <p>{e.detail}</p>
                  <p className="mono muted" style={{ fontSize: 13 }}>Supervisor — {e.supervisor}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Toolkit" title="Research & technical skills" />
          <div className="grid grid-2">
            {skills.map((s, i) => (
              <Reveal key={s.group} delay={i * 70} className="card skill">
                <h3>{s.group}</h3>
                <div className="chips">{s.items.map((x) => <span key={x} className="chip">{x}</span>)}</div>
              </Reveal>
            ))}
          </div>
          <Reveal className="card langs" delay={120}>
            <span className="mono muted langs__label"><Icon name="globe" size={16} /> Languages</span>
            {languages.map((l) => (
              <span key={l.name} className="langs__item"><strong>{l.name}</strong> <span className="muted">{l.level}</span></span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Learning + conferences */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="Always learning" title="Current learning focus" text="Where computation meets the reactor — the tools I’m adding to my experimental work." />
          <div className="grid grid-3">
            {learning.map((l, i) => (
              <Reveal key={l.title} delay={i * 80} className="card card--hover focus">
                <span className="focus__icon"><Icon name={learnIcons[i]} size={24} /></span>
                <h3>{l.title}</h3>
                <p>{l.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="confs" delay={100}>
            <h3 className="confs__title">Conferences &amp; academic travel</h3>
            {conferences.map((c) => (
              <div key={c.name} className="confs__row">
                <strong>{c.name}</strong>
                <span>{c.detail}</span>
                <span className="mono muted">{c.place}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Hobbies */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Beyond the lab" title="Hobbies" />
          <div className="grid grid-3">
            {hobbies.map((h, i) => {
              const inner = (
                <>
                  <img src={h.image} alt="" loading="lazy" />
                  <div className="hobby__body">
                    <h3>{h.title}</h3>
                    <p>{h.text}</p>
                    <span className="hobby__go"><Icon name={h.to ? 'arrow' : 'arrowUpRight'} size={18} /></span>
                  </div>
                </>
              );
              return (
                <Reveal key={h.title} delay={i * 80}>
                  {h.to
                    ? <Link to={h.to} className="hobby">{inner}</Link>
                    : <a href={h.link} target="_blank" rel="noreferrer" className="hobby">{inner}</a>}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
