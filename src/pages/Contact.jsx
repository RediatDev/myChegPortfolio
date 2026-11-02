import { useState } from 'react';
import Icon, { BrandIcon } from '../components/Icons.jsx';
import Reveal from '../components/Reveal.jsx';
import { PageHero, usePageTitle } from '../components/Common.jsx';
import { profile } from '../data/content.js';

export default function Contact() {
  usePageTitle('Contact');
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(profile.formspree, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('Request failed');
      e.target.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let’s <em>talk</em></>}
        lead="Whether it’s a research collaboration, a question about my work, or an opportunity — my inbox is open."
      />

      <section className="section">
        <div className="container contact">
          <Reveal className="contact__info">
            <a href={`mailto:${profile.email}`} className="card card--hover contact__item">
              <span className="focus__icon"><Icon name="mail" /></span>
              <div><span className="mono muted">Email</span><strong>{profile.email}</strong></div>
            </a>
            {profile.phones.map((p) => (
              <a key={p.href} href={p.href} className="card card--hover contact__item">
                <span className="focus__icon"><Icon name="phone" /></span>
                <div><span className="mono muted">{p.label}</span><strong>{p.display}</strong></div>
              </a>
            ))}
            <div className="card contact__item">
              <span className="focus__icon"><Icon name="pin" /></span>
              <div><span className="mono muted">Location</span><strong>{profile.location}</strong></div>
            </div>
            <div className="contact__socials">
              {profile.socials.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="btn btn--ghost"><BrandIcon name={s.name} /> {s.name}</a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="card contact__form-wrap">
            {status === 'sent' ? (
              <div className="contact__done">
                <span className="contact__done-icon"><Icon name="check" size={28} /></span>
                <h2>Message sent</h2>
                <p className="muted">Thank you for reaching out — I’ll get back to you soon.</p>
                <button className="btn btn--ghost" onClick={() => setStatus('idle')}>Send another</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="form">
                <h2>Send a message</h2>
                <div className="form__row">
                  <label className="field">
                    <span>Your name</span>
                    <input name="name" required autoComplete="name" placeholder="Jane Doe" />
                  </label>
                  <label className="field">
                    <span>Email address</span>
                    <input name="email" type="email" required autoComplete="email" placeholder="jane@university.edu" />
                  </label>
                </div>
                <label className="field">
                  <span>Subject</span>
                  <input name="subject" placeholder="Research collaboration" />
                </label>
                <label className="field">
                  <span>Message</span>
                  <textarea name="message" rows="6" required placeholder="Tell me a little about what you have in mind…" />
                </label>
                <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                {status === 'error' && <p className="form__error">Something went wrong. Please try again, or email me directly.</p>}
                <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : <>Send message <Icon name="send" /></>}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
