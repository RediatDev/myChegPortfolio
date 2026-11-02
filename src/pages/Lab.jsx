import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Icon from "../components/Icons.jsx";
import Reveal from "../components/Reveal.jsx";
import Lightbox from "../components/Lightbox.jsx";
import { CTA, PageHero, usePageTitle } from "../components/Common.jsx";
import { instruments, reactors, profile } from "../data/content.js";

export default function Lab() {
  usePageTitle("Lab experience");
  const [params, setParams] = useSearchParams();
  const tab = params.get("tab") === "reactors" ? "reactors" : "instruments";
  const [lb, setLb] = useState(null);

  const items = useMemo(
    () =>
      tab === "instruments"
        ? instruments.map((x) => ({
            src: x.image,
            title: x.name,
            caption: `${x.model} (${x.origin})`,
          }))
        : reactors.map((x) => ({
            src: x.image,
            title: x.name,
            caption: `${x.maker} · ${x.volume} · ${x.pressure} · ${x.temp} · ${x.material}`,
          })),
    [tab],
  );

  return (
    <>
      <PageHero
        eyebrow="Lab experience"
        title={
          <>
            Instruments &amp; reactors <em>I operate</em>
          </>
        }
        lead="Characterization and reaction experience gained at IIT Roorkee, the equipment behind every catalyst I make and every result I publish."
      >
        <div className="tabs" role="tablist" aria-label="Equipment type">
          <button
            role="tab"
            className="tab"
            aria-selected={tab === "instruments"}
            onClick={() => setParams({}, { replace: true })}
          >
            Analytical instruments
            <span className="count">{instruments.length}</span>
          </button>
          <button
            role="tab"
            className="tab"
            aria-selected={tab === "reactors"}
            onClick={() => setParams({ tab: "reactors" }, { replace: true })}
          >
            Reactors<span className="count">{reactors.length}</span>
          </button>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          {tab === "instruments" ? (
            <div className="grid grid-3" key="i">
              {instruments.map((x, i) => (
                <Reveal key={x.name} delay={(i % 3) * 70}>
                  <button
                    className="card card--hover tile"
                    onClick={() => setLb(i)}
                    aria-label={`View ${x.name} photo`}
                  >
                    <div className="tile__media">
                      <img src={x.image} alt={x.name} loading="lazy" />
                      <span className="chip tile__badge">{x.category}</span>
                      <span className="tile__zoom">
                        <Icon name="expand" size={16} />
                      </span>
                    </div>
                    <div className="tile__body">
                      <h3>{x.name}</h3>
                      <span className="tile__text">{x.full}</span>
                      <span className="tile__meta" style={{ marginTop: 6 }}>
                        {x.model} · {x.origin}
                      </span>
                      <span
                        className="tile__text muted"
                        style={{ fontSize: 14 }}
                      >
                        {x.use}
                      </span>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="grid grid-4" key="r">
              {reactors.map((x, i) => (
                <Reveal key={x.name} delay={(i % 4) * 60}>
                  <button
                    className="card card--hover tile"
                    onClick={() => setLb(i)}
                    aria-label={`View ${x.name} photo`}
                  >
                    <div
                      className="tile__media"
                      style={{ aspectRatio: "3 / 4" }}
                    >
                      <img src={x.image} alt={x.name} loading="lazy" />
                      <span className="chip tile__badge">{x.type}</span>
                      <span className="tile__zoom">
                        <Icon name="expand" size={16} />
                      </span>
                    </div>
                    <div className="tile__body">
                      <span className="tile__meta">{x.maker}</span>
                      <h3 style={{ fontSize: 19 }}>{x.name}</h3>
                      <dl className="specs">
                        <div>
                          <dt>Vol</dt>
                          <dd>{x.volume}</dd>
                        </div>
                        <div>
                          <dt>P max</dt>
                          <dd>{x.pressure}</dd>
                        </div>
                        <div>
                          <dt>T max</dt>
                          <dd>{x.temp}</dd>
                        </div>
                        <div>
                          <dt>Body</dt>
                          <dd>{x.material}</dd>
                        </div>
                      </dl>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA
        title="See where the work happens"
        text="Our research group at IIT Roorkee works on catalysis for energy and environment."
      />
      <div
        className="container"
        style={{ textAlign: "center", marginTop: -24, paddingBottom: 48 }}
      >
        <a
          href={profile.labSite}
          target="_blank"
          rel="noreferrer"
          className="link-arrow"
        >
          Visit the lab group website <Icon name="arrowUpRight" />
        </a>
      </div>

      <Lightbox
        items={items}
        index={lb}
        onClose={() => setLb(null)}
        onIndex={setLb}
      />
    </>
  );
}
