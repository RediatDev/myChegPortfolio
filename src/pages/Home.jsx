import { Link } from "react-router-dom";
import Icon from "../components/Icons.jsx";
import Reveal from "../components/Reveal.jsx";
import PubItem from "../components/PubItem.jsx";
import { CTA, SectionHead, usePageTitle } from "../components/Common.jsx";
import { FuranMolecule, HexLattice } from "../components/MoleculeArt.jsx";
import {
  profile,
  stats,
  focusAreas,
  publications,
  instruments,
  reactors,
  education,
} from "../data/content.js";

export default function Home() {
  usePageTitle(null);
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <HexLattice className="hero__lattice" />
        <div className="container hero__grid">
          <div className="hero__copy">
            <Reveal>
              <span className="eyebrow">Ph.D. Scholar · IIT Roorkee</span>
              {/* <span className="eyebrow">Ph.D. Scholar · IIT Roorkee</span> */}
            </Reveal>
            <Reveal as="h1" delay={80} className="hero__title">
              Excited to explore how <em>Chemistry </em> fuels{" "}
              <em>Engineering </em>
              solutions for a more sustainable future
            </Reveal>
            {/* &amp; chemicals. */}
            <Reveal as="p" delay={160} className="lead hero__lead">
              I’m <strong>Rediat Terefe</strong>, a chemical engineering
              researcher. {profile.heroIntro}
            </Reveal>
            <Reveal delay={240} className="hero__actions">
              <Link to="/research" className="btn btn--primary">
                Explore my research <Icon name="arrow" />
              </Link>
              <a
                href={profile.cv}
                className="btn btn--ghost"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="download" /> Download CV
              </a>
            </Reveal>
          </div>

          <Reveal delay={150} className="hero__visual">
            <div className="hero__ring" aria-hidden="true" />
            <div className="hero__portrait">
              <img src={profile.portrait} alt="Portrait of Rediat Terefe" />
            </div>
            <FuranMolecule className="hero__molecule" />
            <div className="hero__badge card">
              <span className="hero__badge-icon">
                <Icon name="flask" size={18} />
              </span>
              {/* <div>
                <strong>Furfural → Furfuryl alcohol</strong>
                <span>MOF-derived Ni catalysts</span>
              </div> */}
            </div>
          </Reveal>
        </div>

        <div className="container">
          <Reveal className="stats" delay={300}>
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Focus */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Research focus"
            title="Production of furan intermediates and their upgrading to valuable chemicals"
            text="My work spans the full catalyst lifecycle designing materials, proving them in the reactor, and optimizing conditions for real-world yield."
            action={
              <Link to="/research" className="link-arrow">
                See Ph.D. objectives <Icon name="arrow" />
              </Link>
            }
          />
          <div className="grid grid-3">
            {focusAreas.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 90}
                className="card card--hover focus"
              >
                <span className="focus__icon">
                  <Icon name={f.icon} size={24} />
                </span>
                <span className="mono focus__num">0{i + 1}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead
            eyebrow="Latest publications"
            title="Recent work in print"
            action={
              <Link to="/publications" className="link-arrow">
                All publications <Icon name="arrow" />
              </Link>
            }
          />
          <div className="grid">
            {publications.slice(0, 3).map((p, i) => (
              <Reveal key={p.doi} delay={i * 80}>
                <PubItem pub={p} compact />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lab teaser */}
      <section className="section">
        <div className="container lab-teaser">
          <div>
            <SectionHead
              eyebrow="Hands-on experience"
              title="Operating and Analysis"
              text={`I have independently operated ${instruments.length} analytical instruments and ${reactors.length} batch, flow and microwave reactors from catalyst characterization to high-pressure hydrogenation.`}
            />
            <Reveal className="chips" delay={80}>
              {instruments.map((x) => (
                <span key={x.name} className="chip">
                  {x.name}
                </span>
              ))}
            </Reveal>
            <Reveal
              className="hero__actions"
              delay={140}
              style={{ marginTop: 32 }}
            >
              <Link to="/lab" className="btn btn--primary">
                Instruments &amp; reactors operated <Icon name="arrow" />
              </Link>
              <a
                href={profile.labSite}
                target="_blank"
                rel="noreferrer"
                className="btn btn--ghost"
              >
                Visit our lab <Icon name="arrowUpRight" />
              </a>
            </Reveal>
          </div>
          <Reveal className="lab-mosaic" delay={120}>
            <img
              src={instruments[0].image}
              alt="XRD instrument"
              loading="lazy"
            />
            <img
              src={reactors[3].image}
              alt="250 mL high-pressure reactor"
              loading="lazy"
            />
            <img
              src={instruments[1].image}
              alt="FE-SEM instrument"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* Journey */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead
            eyebrow="Journey"
            title="Addis Ababa → Jimma → Roorkee"
            action={
              <Link to="/about" className="link-arrow">
                More about me <Icon name="arrow" />
              </Link>
            }
          />
          <div className="grid grid-3">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 90} className="card journey">
                <div className="journey__top">
                  <img src={e.logo} alt="" />
                  <span className="mono muted">{e.period}</span>
                </div>
                <h3>{e.degree}</h3>
                <p className="muted">{e.school}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
