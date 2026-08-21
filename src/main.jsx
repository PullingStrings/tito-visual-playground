import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Eye, EyeOff, Pause, Play } from 'lucide-react';
import contactUs from './assets/samsung/contact-us.png';
import repairHome from './assets/samsung/repair-home.png';
import unpacked from './assets/samsung/galaxy-unpacked.png';
import './styles.css';

const treatments = [
  {
    id: 'document',
    label: 'A / DOCUMENT',
    description: 'The restrained fallback. Preserve the complete interface when context matters more than drama.',
    className: 'treatment--document',
    status: 'FALLBACK',
  },
  {
    id: 'editorial',
    label: 'B / EDITORIAL CROP',
    description: 'Primary treatment. Keep the work truthful, crop toward the part of the journey that matters.',
    className: 'treatment--editorial',
    status: 'PRIMARY',
  },
];

const contextMeta = [
  ['ROLE', 'FRONT-END DEVELOPMENT'],
  ['CLIENT', 'SAMSUNG UK'],
  ['AGENCY', 'CHEIL'],
  ['PERIOD', '2020—2026'],
];

const secondaryMeta = [
  ['FOCUS', 'SUPPORT / REPAIR / COMMERCE'],
  ['TECH', 'REACT / TYPESCRIPT / AEM'],
];

const contributions = [
  'Built and evolved front-end journeys across high-traffic Samsung UK experiences.',
  'Translated complex support, repair and commerce requirements into clear interaction systems.',
  'Worked inside a large production ecosystem where accessibility, analytics and maintainability matter.',
];

function SectionHeader({ index, eyebrow, title, copy }) {
  return (
    <header className="section-header">
      <div className="section-index">{index}</div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {copy && <p className="section-copy">{copy}</p>}
      </div>
    </header>
  );
}

function ProjectSpecimen() {
  return (
    <article className="project-specimen">
      <div className="project-kicker">
        <span>01 / SELECTED WORK</span>
        <span>SAMSUNG UK / CHEIL</span>
      </div>

      <div className="project-heading-grid">
        <div>
          <h3 className="project-title">SAMSUNG SUPPORT</h3>
          <p className="project-subtitle">A CLEARER PATH TO HELP.</p>
          <p className="project-description">
            Front-end systems, interaction and support journeys for Samsung UK.
          </p>
        </div>
        <div className="project-number" aria-hidden="true">01</div>
      </div>

      <div className="project-media-shell">
        <div className="media-placeholder">PROJECT MEDIA / REAL IMAGE NEXT</div>
        <div className="project-interruption">
          <span>HELP /</span>
          <span>MADE</span>
          <span>CLEAR.</span>
        </div>
        <div className="media-accent" />
      </div>

      <div className="project-meta">
        <div><span>ROLE</span><strong>FRONT-END DEVELOPMENT</strong></div>
        <div><span>CLIENT</span><strong>SAMSUNG UK</strong></div>
        <div><span>YEAR</span><strong>2026</strong></div>
      </div>
      <div className="project-tech"><strong>REACT</strong><strong>TYPESCRIPT</strong><strong>AEM</strong></div>
      <div className="project-footer"><span>01 / 06</span><button>VIEW PROJECT <ArrowUpRight size={13} strokeWidth={1.8}/></button></div>
    </article>
  );
}

function ImageTreatment({ treatment, notesVisible }) {
  return (
    <article className={`image-treatment ${treatment.className}`}>
      <div className="treatment-heading">
        <div>
          <p className="eyebrow">{treatment.label}</p>
          <p>{treatment.description}</p>
        </div>
        <div className="treatment-status-wrap">
          <span className="treatment-state">{treatment.status}</span>
          <span className="treatment-status">CONTACT US / 2026</span>
        </div>
      </div>

      <div className="treatment-stage">
        <div className="treatment-number" aria-hidden="true">01</div>
        <div className="treatment-media">
          <img src={contactUs} alt="Samsung Contact Us page with three support options" />
          <div className="number-ghost" aria-hidden="true">01</div>
          <div className="treatment-edge" />
        </div>
        <div className="treatment-interruption">
          <span>HELP /</span><span>MADE</span><span>CLEAR.</span>
        </div>
      </div>

      {notesVisible && (
        <div className="treatment-notes">
          {treatment.id === 'document' && <><span>✓ full context</span><span>✓ restrained fallback</span><span>△ less visual focus</span></>}
          {treatment.id === 'editorial' && <><span>✓ primary treatment</span><span>✓ clear focus</span><span>✓ controlled number ghost</span></>}
        </div>
      )}
    </article>
  );
}

function MetadataExperiment() {
  return (
    <div className="metadata-experiment">
      <div className="metadata-context">
        {contextMeta.map(([label, value]) => (
          <div className="metadata-pair" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>

      <div className="metadata-secondary">
        {secondaryMeta.map(([label, value]) => (
          <div className="metadata-pair metadata-pair--secondary" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>

      <div className="metadata-contribution">
        <div className="metadata-contribution-heading">
          <span>CONTRIBUTION</span>
          <strong>WHAT I ACTUALLY MOVED FORWARD.</strong>
        </div>
        <ol>
          {contributions.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="metadata-rule">
        <span>THE RULE</span>
        <strong>Context first. Tech second. Contribution wins.</strong>
      </div>
    </div>
  );
}

function StressTest() {
  return (
    <div className="stress-grid">
      <figure className="stress-card stress-card--light">
        <img src={repairHome} alt="Samsung Repair homepage" />
        <figcaption><span>REPAIR</span><strong>Does the crop rule survive a stronger branded source?</strong></figcaption>
      </figure>
      <figure className="stress-card stress-card--dark">
        <img src={unpacked} alt="Galaxy Unpacked page" />
        <figcaption><span>CAMPAIGN</span><strong>Can Tito stay visible when Samsung gets loud?</strong></figcaption>
      </figure>
    </div>
  );
}

function App() {
  const [notesVisible, setNotesVisible] = useState(true);
  const [motion, setMotion] = useState(true);

  return (
    <main className={motion ? 'motion-on' : 'motion-off'}>
      <aside className="playground-controls" aria-label="Playground controls">
        <button onClick={() => setNotesVisible(v => !v)}>
          {notesVisible ? <EyeOff size={15}/> : <Eye size={15}/>} {notesVisible ? 'Hide notes' : 'Show notes'}
        </button>
        <button onClick={() => setMotion(v => !v)}>
          {motion ? <Pause size={15}/> : <Play size={15}/>} {motion ? 'Pause motion' : 'Enable motion'}
        </button>
      </aside>

      <section className="hero playground-section">
        <p className="eyebrow">00 / NORTH STAR</p>
        <h1><span>MAKE THE WORK CLEAR.</span><span>MAKE TITO WEIRD.</span></h1>
        <div className="hero-rule" />
        <p className="hero-copy">Digital Editorial — disciplined structure, expressive interruptions, real work.</p>
      </section>

      <section className="playground-section">
        <SectionHeader index="01" eyebrow="TYPOGRAPHY" title="CLEAR SYSTEM. DISTINCT DISPLAY VOICE." copy="Inter carries the information. Antonio carries the statement. League Gothic stays banked for rare louder moments." />
        <div className="type-grid">
          <div className="type-sample"><span>PRIMARY DISPLAY / ANTONIO</span><strong>TITO<br/>ZWANE</strong></div>
          <div className="type-sample type-sample--system"><span>SYSTEM / INTER</span><strong>Front-end systems.<br/>Editorial rhythm.<br/>Expressive interruption.</strong></div>
        </div>
      </section>

      <section className="playground-section project-language">
        <SectionHeader index="02" eyebrow="PROJECT LANGUAGE" title="EDITORIAL BY DEFAULT. EXPRESSIVE BY INTERRUPTION." copy="B sets the reading order. C gets one or two interruptions — not a pile-up." />
        <ProjectSpecimen />
      </section>

      <section className="playground-section colour-section">
        <SectionHeader index="03" eyebrow="COLOUR" title="ONE BASE. ONE SIGNAL." copy="Warm paper + ink stay fixed. Signal orange behaves like punctuation, not a wash over the whole portfolio." />
        <div className="palette">
          <div><i className="swatch swatch--paper"/><span>PAPER</span><code>#F3F0E8</code></div>
          <div><i className="swatch swatch--ink"/><span>INK</span><code>#111111</code></div>
          <div><i className="swatch swatch--orange"/><span>SIGNAL ORANGE</span><code>#FF4B12</code></div>
        </div>
      </section>

      <section className="playground-section image-section" id="step-4">
        <SectionHeader index="04" eyebrow="IMAGE TREATMENT" title="SHOW THE WORK TRUTHFULLY. CROP IT EDITORIALLY." copy="B is now the primary treatment. A stays as a restrained fallback. C is retired." />
        <div className="treatment-list">
          {treatments.map(t => <ImageTreatment key={t.id} treatment={t} notesVisible={notesVisible} />)}
        </div>
      </section>

      <section className="playground-section metadata-section" id="step-5">
        <SectionHeader index="05" eyebrow="METADATA / CONTENT HIERARCHY" title="CONTEXT FIRST. TECH SECOND. CONTRIBUTION WINS." copy="The metadata should help someone understand the work quickly, then get out of the way. Seniority is proved by contribution, not by a wall of technologies." />
        <MetadataExperiment />
      </section>

      <section className="playground-section stress-section">
        <SectionHeader index="05B" eyebrow="STRESS TEST" title="THE SYSTEM STILL HAS TO SURVIVE DIFFERENT SAMSUNG WORLDS." copy="After metadata, we keep applying the same image rule to functional journeys and visually loud campaigns before moving into motion." />
        <StressTest />
      </section>

      <footer className="playground-footer">
        <span>VISUAL PLAYGROUND / V2</span>
        <strong>MAKE THE WORK CLEAR. MAKE TITO WEIRD.</strong>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
