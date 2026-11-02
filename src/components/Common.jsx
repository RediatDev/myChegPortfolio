import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icons.jsx";
import Reveal from "./Reveal.jsx";
import { HexLattice } from "./MoleculeArt.jsx";

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} · Rediat Terefe`
      : "Rediat Terefe · Chemical Engineering Researcher";
  }, [title]);
}

export function PageHero({ eyebrow, title, lead, children }) {
  return (
    <section className="page-hero">
      <HexLattice className="page-hero__art" />
      <div className="container">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <Reveal as="h1" delay={80}>
          {title}
        </Reveal>
        {lead && (
          <Reveal as="p" className="lead" delay={160}>
            {lead}
          </Reveal>
        )}
        {children && (
          <Reveal delay={220} style={{ marginTop: 28 }}>
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, text, action }) {
  return (
    <Reveal className={`section-head ${action ? "section-head--row" : ""}`}>
      <div style={{ display: "grid", gap: 14 }}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
      {action}
    </Reveal>
  );
}

export function CTA({
  title = "Interested in collaborating?",
  text = "I’m open to research collaborations, research opportunities and conversations about catalysis, biomass waste and general waste  valorization and sustainable chemistry.",
}) {
  return (
    <section className="section section--tight">
      <div className="container">
        <Reveal className="cta">
          <HexLattice className="cta__art" />
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <Link to="/contact" className="btn">
            Get in touch <Icon name="arrow" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
