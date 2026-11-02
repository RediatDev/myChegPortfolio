import { useMemo, useState } from "react";
import Reveal from "../components/Reveal.jsx";
import PubItem from "../components/PubItem.jsx";
import { CTA, PageHero, usePageTitle } from "../components/Common.jsx";
import { publications } from "../data/content.js";

export default function Publications() {
  usePageTitle("Publications");
  const [filter, setFilter] = useState("All");
  const list = useMemo(
    () =>
      filter === "All"
        ? publications
        : publications.filter((p) => p.role === filter),
    [filter],
  );
  const years = [...new Set(list.map((p) => p.year))];
  const first = publications.filter((p) => p.role === "First author").length;

  return (
    <>
      <PageHero
        eyebrow="Publications"
        title={
          <>
            Peer-reviewed <em>research</em>
          </>
        }
        // lead={`${publications.length} journal articles in Elsevier journals on biomass conversion, furfural upgrading and methane tri-reforming — ${first} as first author.`}
        lead={`Peer-reviewed journal articles published in journals, focusing on biomass conversion, furfural upgrading, and methane tri-reforming.`}
      >
        <div className="tabs" role="tablist" aria-label="Filter publications">
          {["All", "First author", "Co-author"].map((f) => (
            <button
              key={f}
              role="tab"
              className="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
              <span className="count">
                {f === "All"
                  ? publications.length
                  : publications.filter((p) => p.role === f).length}
              </span>
            </button>
          ))}
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          {years.map((y) => (
            <div key={y} className="year-group">
              <Reveal className="year-group__label">
                <span className="mono">{y}</span>
              </Reveal>
              <div className="grid">
                {list
                  .filter((p) => p.year === y)
                  .map((p, i) => (
                    <Reveal key={p.doi} delay={i * 70}>
                      <PubItem
                        pub={p}
                        index={publications.length - publications.indexOf(p)}
                      />
                    </Reveal>
                  ))}
              </div>
            </div>
          ))}
          <Reveal
            as="p"
            className="muted"
            style={{ fontSize: 14, marginTop: 24 }}
          >
            * Corresponding author.
          </Reveal>
        </div>
      </section>

      <CTA
        title="Want to discuss a paper?"
        text="Happy to share data, answer questions on methodology, or explore follow-up collaborations."
      />
    </>
  );
}
