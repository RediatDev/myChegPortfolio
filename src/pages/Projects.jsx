import { useMemo, useState } from "react";
import Icon from "../components/Icons.jsx";
import Reveal from "../components/Reveal.jsx";
import Lightbox from "../components/Lightbox.jsx";
import { CTA, PageHero, usePageTitle } from "../components/Common.jsx";
import { projects } from "../data/content.js";

export default function Projects() {
  usePageTitle("Projects");
  const cats = ["All", ...new Set(projects.map((p) => p.category))];
  const [cat, setCat] = useState("All");
  const [lb, setLb] = useState(null);
  const list = useMemo(
    () =>
      cat === "All" ? projects : projects.filter((p) => p.category === cat),
    [cat],
  );
  const items = list.map((p) => ({
    src: p.image,
    title: p.title,
    caption: p.tag,
  }));

  return (
    <>
      <PageHero
        eyebrow="Side projects · Web development"
        title={
          <>
            Apps I’ve <em>built</em>
          </>
        }
        lead="I’ve always been curious about how real-world systems are built in software. In my free time I learn new concepts and apply them to projects that solve practical problems on my own and with friends."
      >
        <div className="tabs" role="tablist" aria-label="Filter projects">
          {cats.map((c) => (
            <button
              key={c}
              role="tab"
              className="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
            >
              {c}
              <span className="count">
                {c === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === c).length}
              </span>
            </button>
          ))}
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="grid grid-3" key={cat}>
            {list.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 70}>
                <article className="card card--hover tile project">
                  <button
                    className="tile__media project__media"
                    onClick={() => setLb(i)}
                    aria-label={`Enlarge ${p.title} screenshot`}
                  >
                    <span className="project__bar" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </span>
                    <img
                      src={p.image}
                      alt={`${p.title} screenshot`}
                      loading="lazy"
                    />
                    <span className="tile__zoom">
                      <Icon name="expand" size={16} />
                    </span>
                  </button>
                  <div className="tile__body project__body">
                    <div>
                      <span className="tile__meta">{p.category}</span>
                      <h3>{p.title}</h3>
                      <span className="tile__text">{p.tag}</span>
                    </div>
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-btn"
                        aria-label={`Open ${p.title}`}
                      >
                        <Icon name="arrowUpRight" size={18} />
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Need a web app for your lab or team?"
        text="I enjoy building practical tools — booking systems, lab management, research group sites. Let’s talk."
      />
      <Lightbox
        items={items}
        index={lb}
        onClose={() => setLb(null)}
        onIndex={setLb}
      />
    </>
  );
}
