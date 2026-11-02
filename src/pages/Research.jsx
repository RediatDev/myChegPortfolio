import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icons.jsx";
import Reveal from "../components/Reveal.jsx";
import {
  CTA,
  PageHero,
  SectionHead,
  usePageTitle,
} from "../components/Common.jsx";
import { research, profile } from "../data/content.js";

function Objective({ o, i }) {
  const [open, setOpen] = useState(i === 0);
  return (
    <Reveal
      delay={i * 60}
      className={`card objective ${open ? "is-open" : ""}`}
    >
      <button
        className="objective__head"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="objective__num">{i + 1}</span>
        <span className="objective__title">
          <h3>{o.title}</h3>
          <span className="muted">{o.summary}</span>
        </span>
        {o.status && (
          <span className="chip chip--accent objective__status">
            {o.status}
          </span>
        )}
        <span className="objective__chev">
          <Icon name="chevronDown" />
        </span>
      </button>
      <div className="objective__panel">
        <div>
          <ol className="steps">
            {o.steps.map((s, k) => (
              <li key={s}>
                <span className="mono">{String(k + 1).padStart(2, "0")}</span>
                {s}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Reveal>
  );
}

export default function Research() {
  usePageTitle("Research");
  return (
    <>
      <PageHero
        eyebrow="Ph.D. research"
        title={
          <>
            From <em>teff straw</em> to valuable chemicals
          </>
        }
        lead="Agricultural residues are an abundant, under-used carbon source. My doctoral work develops heterogeneous catalysts that convert them into furan intermediates  and upgrade those intermediates into fuels and chemicals."
      />

      <section className="section">
        <div className="container">
          <Reveal className="thesis card">
            <span className="mono thesis__label">Thesis title</span>
            <blockquote>“{research.thesis}”</blockquote>
            <div className="thesis__foot">
              <span>
                <span className="muted">Supervisor</span> &nbsp;
                {research.supervisor}
              </span>
              <span>
                <span className="muted">Department</span> &nbsp;Chemical
                Engineering, IIT Roorkee
              </span>
            </div>
          </Reveal>

          <Reveal className="pathway" delay={100} aria-label="Research pathway">
            {[
              "Biomass (teff straw)",
              "Furfural",
              "Furfuryl alcohol",
              "Fuels & chemicals",
            ].map((s, i, arr) => (
              <div key={s} className="pathway__step">
                <span className="pathway__node">{s}</span>
                {i < arr.length - 1 && (
                  <span className="pathway__arrow">
                    <Icon name="arrow" />
                  </span>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead
            eyebrow="Objectives"
            title="Four work packages"
            text="Each objective follows the same rigorous arc: prepare and characterize the catalyst, design the experiments, optimize, and prove stability."
          />
          <div className="objectives">
            {research.objectives.map((o, i) => (
              <Objective key={o.title} o={o} i={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2 research-extra">
          <div>
            <SectionHead eyebrow="Collaborations" title="Beyond biomass" />
            <div className="grid">
              {research.collaborations.map((c, i) => (
                <Reveal key={c.title} delay={i * 80} className="card mini">
                  <h3>{c.title}</h3>
                  <p className="muted">{c.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <SectionHead eyebrow="Looking ahead" title="Future interests" />
            <Reveal as="ul" className="future">
              {research.future.map((f) => (
                <li key={f}>
                  <Icon name="arrow" size={18} />
                  {f}
                </li>
              ))}
            </Reveal>
            <Reveal className="hero__actions" style={{ marginTop: 28 }}>
              <Link to="/publications" className="btn btn--primary">
                Read the papers <Icon name="arrow" />
              </Link>
              <a
                href={profile.labSite}
                className="btn btn--ghost"
                target="_blank"
                rel="noreferrer"
              >
                Our lab group <Icon name="arrowUpRight" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
