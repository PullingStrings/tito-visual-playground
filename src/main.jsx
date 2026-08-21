import React, { useLayoutEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Eye, EyeOff, Pause, Play } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import contactUs from './assets/samsung/contact-us.png';
import repairHome from './assets/samsung/repair-home.png';
import unpacked from './assets/samsung/galaxy-unpacked.png';
import './styles.css';
import './motion.css';

gsap.registerPlugin(ScrollTrigger);

const treatments=[{id:'document',label:'A / DOCUMENT',description:'The restrained fallback. Preserve the complete interface when context matters more than drama.',className:'treatment--document',status:'FALLBACK'},{id:'editorial',label:'B / EDITORIAL CROP',description:'Primary treatment. Keep the work truthful, crop toward the part of the journey that matters.',className:'treatment--editorial',status:'PRIMARY'}];
const contextMeta=[['ROLE','FRONT-END DEVELOPMENT'],['CLIENT','SAMSUNG UK'],['AGENCY','CHEIL'],['PERIOD','2020—2026']];
const secondaryMeta=[['FOCUS','SUPPORT / REPAIR / COMMERCE'],['TECH','REACT / TYPESCRIPT / AEM']];
const contributions=['Built and evolved front-end journeys across high-traffic Samsung UK experiences.','Translated complex support, repair and commerce requirements into clear interaction systems.','Worked inside a large production ecosystem where accessibility, analytics and maintainability matter.'];

function SectionHeader({index,eyebrow,title,copy}){return <header className="section-header"><div className="section-index">{index}</div><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy&&<p className="section-copy">{copy}</p>}</div></header>}
function ProjectSpecimen(){return <article className="project-specimen"><div className="project-kicker"><span>01 / SELECTED WORK</span><span>SAMSUNG UK / CHEIL</span></div><div className="project-heading-grid"><div><h3 className="project-title">SAMSUNG SUPPORT</h3><p className="project-subtitle">A CLEARER PATH TO HELP.</p><p className="project-description">Front-end systems, interaction and support journeys for Samsung UK.</p></div><div className="project-number" aria-hidden="true">01</div></div><div className="project-media-shell"><div className="media-placeholder">PROJECT MEDIA / REAL IMAGE NEXT</div><div className="project-interruption"><span>HELP /</span><span>MADE</span><span>CLEAR.</span></div><div className="media-accent"/></div><div className="project-meta"><div><span>ROLE</span><strong>FRONT-END DEVELOPMENT</strong></div><div><span>CLIENT</span><strong>SAMSUNG UK</strong></div><div><span>YEAR</span><strong>2026</strong></div></div><div className="project-tech"><strong>REACT</strong><strong>TYPESCRIPT</strong><strong>AEM</strong></div><div className="project-footer"><span>01 / 06</span><button>VIEW PROJECT <ArrowUpRight size={13}/></button></div></article>}
function ImageTreatment({treatment,notesVisible}){return <article className={`image-treatment ${treatment.className}`}><div className="treatment-heading"><div><p className="eyebrow">{treatment.label}</p><p>{treatment.description}</p></div><div className="treatment-status-wrap"><span className="treatment-state">{treatment.status}</span><span className="treatment-status">CONTACT US / 2026</span></div></div><div className="treatment-stage"><div className="treatment-number" aria-hidden="true">01</div><div className="treatment-media"><img src={contactUs} alt="Samsung Contact Us page with three support options"/><div className="number-ghost" aria-hidden="true">01</div><div className="treatment-edge"/></div><div className="treatment-interruption"><span>HELP /</span><span>MADE</span><span>CLEAR.</span></div></div>{notesVisible&&<div className="treatment-notes">{treatment.id==='document'?<><span>✓ full context</span><span>✓ restrained fallback</span></>:<><span>✓ primary treatment</span><span>✓ controlled number ghost</span></>}</div>}</article>}
function MetadataExperiment(){return <div className="metadata-experiment"><div className="metadata-context">{contextMeta.map(([l,v])=><div className="metadata-pair" key={l}><span>{l}</span><strong>{v}</strong></div>)}</div><div className="metadata-secondary">{secondaryMeta.map(([l,v])=><div className="metadata-pair metadata-pair--secondary" key={l}><span>{l}</span><strong>{v}</strong></div>)}</div><div className="metadata-contribution"><div className="metadata-contribution-heading"><span>CONTRIBUTION</span><strong>WHAT I ACTUALLY MOVED FORWARD.</strong></div><ol>{contributions.map((item,i)=><li key={item}><span>{String(i+1).padStart(2,'0')}</span><p>{item}</p></li>)}</ol></div><div className="metadata-rule"><span>THE RULE</span><strong>Context first. Tech second. Contribution wins.</strong></div></div>}

function MotionExperiment({motion,index='01',title='SAMSUNG SUPPORT',subtitle='A CLEARER PATH TO HELP.',image=contactUs,alt='Samsung Contact Us interface',mirror=false,campaign=false,interruption=['HELP /','MADE','CLEAR.']}){
 const root=useRef(null);
 useLayoutEffect(()=>{
   if(!motion||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
   const ctx=gsap.context(()=>{
     const q=gsap.utils.selector(root);
     const origin=mirror?'22% 27%':'78% 27%';
     const startNumberX=mirror?-120:120;
     const midNumberX=mirror?82:-82;
     const finalNumberX=mirror?58:-58;
     const interruptionStartX=mirror?150:-150;
     const mediaMidX=mirror?-18:18;
     const interruptionMidX=mirror?-18:18;

     gsap.set(q('.choreo__title'),{yPercent:112});
     gsap.set(q('.choreo__media'),campaign?{y:0,scale:1}:{y:72,scale:.95});
     gsap.set(q('.choreo__media-inner'),{clipPath:`circle(14px at ${origin})`});
     gsap.set(q('.choreo__dot'),{scale:1,opacity:1});
     gsap.set(q('.choreo__accent'),{scaleY:campaign?1:.15});

     if(campaign){
       gsap.set(q('.choreo__interruption'),{x:0,y:0,rotation:0,opacity:1});
       gsap.set(q('.choreo__number'),{x:0,y:0,rotation:0,scale:1,opacity:1});
       gsap.set(q('.choreo__ghost'),{opacity:0});
     }else{
       gsap.set(q('.choreo__interruption'),{x:interruptionStartX,y:90,rotation:mirror?3:-3});
       gsap.set(q('.choreo__number'),{x:startNumberX,y:-36,rotation:mirror?-2:2,scale:.92});
     }

     const tl=gsap.timeline({defaults:{ease:'none'},scrollTrigger:{trigger:root.current,start:'top top+=8%',end:'+=1800',scrub:1.1,pin:q('.choreo__pin')[0],anticipatePin:1,invalidateOnRefresh:true}});

     if(campaign){
       tl.to(q('.choreo__title'),{yPercent:0,duration:.14},.04)
         .to(q('.choreo__media-inner'),{clipPath:`circle(42px at ${origin})`,duration:.08},.08)
         .to(q('.choreo__media-inner'),{clipPath:`circle(150px at ${origin})`,duration:.14},.16)
         .to(q('.choreo__media-inner'),{clipPath:`circle(360px at ${origin})`,duration:.18},.30)
         .to(q('.choreo__dot'),{opacity:0,duration:.08},.39)
         .to(q('.choreo__media-inner'),{clipPath:`circle(140% at ${origin})`,duration:.20},.45)
         .to(q('.choreo__media'),{x:mediaMidX,y:-18,duration:.24},.54)
         .to(q('.choreo__number'),{x:mirror?62:-62,y:74,opacity:.45,duration:.28},.50)
         .to(q('.choreo__ghost'),{opacity:.16,duration:.18},.48)
         .to(q('.choreo__ghost'),{opacity:.28,duration:.22},.64)
         .to(q('.choreo__number'),{x:mirror?96:-96,y:104,opacity:0,duration:.24},.68)
         .to(q('.choreo__media'),{x:0,y:0,duration:.18},.84)
         .to(q('.choreo__ghost'),{opacity:.28,duration:.12},.84);
     }else{
       tl.to(q('.choreo__title'),{yPercent:0,duration:.12},0)
         .to(q('.choreo__number'),{x:mirror?52:-52,y:58,rotation:0,scale:1,duration:.74},0)
         .to(q('.choreo__media'),{y:12,scale:1,duration:.18},.08)
         .to(q('.choreo__dot'),{scale:1.15,duration:.06},.10)
         .to(q('.choreo__media-inner'),{clipPath:`circle(36px at ${origin})`,duration:.08},.10)
         .to(q('.choreo__media-inner'),{clipPath:`circle(140px at ${origin})`,duration:.14},.18)
         .to(q('.choreo__media-inner'),{clipPath:`circle(340px at ${origin})`,duration:.16},.32)
         .to(q('.choreo__dot'),{opacity:0,duration:.08},.40)
         .to(q('.choreo__accent'),{scaleY:1,duration:.12},.44)
         .to(q('.choreo__media-inner'),{clipPath:`circle(140% at ${origin})`,duration:.18},.48)
         .to(q('.choreo__media'),{y:-22,x:mediaMidX,duration:.22},.58)
         .to(q('.choreo__number'),{x:midNumberX,y:92,duration:.22},.58)
         .to(q('.choreo__interruption'),{x:0,y:0,rotation:0,duration:.18},.62)
         .to(q('.choreo__interruption'),{x:interruptionMidX,y:-8,duration:.18},.78)
         .to(q('.choreo__media'),{x:0,y:0,duration:.18},.86)
         .to(q('.choreo__number'),{x:finalNumberX,y:56,rotation:0,scale:1,duration:.18},.86)
         .to(q('.choreo__interruption'),{x:0,y:0,rotation:0,duration:.18},.86);
     }
   },root);
   return()=>ctx.revert();
 },[motion,mirror,campaign]);
 return <div className={`choreo ${mirror?'choreo--mirror':''} ${campaign?'choreo--campaign':''}`} ref={root}><div className="choreo__pin"><div className="choreo__kicker"><span>{index} / LIVE STRESS TEST</span><span>GSAP / SCRUBBED / PINNED</span></div><div className="choreo__title-wrap"><h3 className="choreo__title">{title}</h3></div><p className="choreo__subtitle">{subtitle}</p><div className="choreo__stage"><div className="choreo__number" aria-hidden="true">{index}</div><div className="choreo__media"><div className="choreo__media-inner"><img src={image} alt={alt}/><div className="choreo__ghost" aria-hidden="true">{index}</div><div className="choreo__accent"/></div><div className="choreo__dot" aria-hidden="true"/></div><div className="choreo__interruption">{interruption.map(line=><span key={line}>{line}</span>)}</div></div></div><div className="choreo__captions"><div className="choreo__caption"><span>01 / SAME GRAMMAR</span><p>{campaign?'The opening starts as a graphic poster. The project then emerges through the same Signal reveal language.':'Signal reveal, parallax separation and editorial resolve stay consistent across projects.'}</p></div><div className="choreo__caption"><span>02 / DIRECTIONAL RHYTHM</span><p>{campaign?'The solid 02 gives way to the transparent 02 as the media crosses the number plane.':'This project establishes the right-biased version of the system.'}</p></div><div className="choreo__caption"><span>03 / RESOLVE</span><p>{campaign?'The paper interruption stays anchored throughout while the final frame becomes media + ghost number, not a mirrored template.':'The quieter support UI gives the orange system more room to speak.'}</p></div></div></div>
}

function StressTest(){return <div className="stress-grid"><figure className="stress-card stress-card--light"><img src={repairHome} alt="Samsung Repair homepage"/><figcaption><span>REPAIR</span><strong>Does the crop rule survive a stronger branded source?</strong></figcaption></figure><figure className="stress-card stress-card--dark"><img src={unpacked} alt="Galaxy Unpacked page"/><figcaption><span>CAMPAIGN</span><strong>Can Tito stay visible when Samsung gets loud?</strong></figcaption></figure></div>}
function App(){const[notesVisible,setNotesVisible]=useState(true);const[motion,setMotion]=useState(true);return <main className={motion?'motion-on':'motion-off'}><aside className="playground-controls"><button onClick={()=>setNotesVisible(v=>!v)}>{notesVisible?<EyeOff size={15}/>:<Eye size={15}/>} {notesVisible?'Hide notes':'Show notes'}</button><button onClick={()=>setMotion(v=>!v)}>{motion?<Pause size={15}/>:<Play size={15}/>} {motion?'Pause motion':'Enable motion'}</button></aside><section className="hero playground-section"><p className="eyebrow">00 / NORTH STAR</p><h1><span>MAKE THE WORK CLEAR.</span><span>MAKE TITO WEIRD.</span></h1><div className="hero-rule"/><p className="hero-copy">Digital Editorial — disciplined structure, expressive interruptions, real work.</p></section><section className="playground-section"><SectionHeader index="01" eyebrow="TYPOGRAPHY" title="CLEAR SYSTEM. DISTINCT DISPLAY VOICE." copy="Inter carries the information. Antonio carries the statement. League Gothic stays banked for rare louder moments."/><div className="type-grid"><div className="type-sample"><span>PRIMARY DISPLAY / ANTONIO</span><strong>TITO<br/>ZWANE</strong></div><div className="type-sample type-sample--system"><span>SYSTEM / INTER</span><strong>Front-end systems.<br/>Editorial rhythm.<br/>Expressive interruption.</strong></div></div></section><section className="playground-section project-language"><SectionHeader index="02" eyebrow="PROJECT LANGUAGE" title="EDITORIAL BY DEFAULT. EXPRESSIVE BY INTERRUPTION." copy="B sets the reading order. C gets one or two interruptions — not a pile-up."/><ProjectSpecimen/></section><section className="playground-section colour-section"><SectionHeader index="03" eyebrow="COLOUR" title="ONE BASE. ONE SIGNAL." copy="Warm paper + ink stay fixed. Signal orange behaves like punctuation, not a wash over the whole portfolio."/><div className="palette"><div><i className="swatch swatch--paper"/><span>PAPER</span><code>#F3F0E8</code></div><div><i className="swatch swatch--ink"/><span>INK</span><code>#111111</code></div><div><i className="swatch swatch--orange"/><span>SIGNAL ORANGE</span><code>#FF4B12</code></div></div></section><section className="playground-section image-section"><SectionHeader index="04" eyebrow="IMAGE TREATMENT" title="SHOW THE WORK TRUTHFULLY. CROP IT EDITORIALLY." copy="B is now the primary treatment. A stays as a restrained fallback. C is retired."/><div className="treatment-list">{treatments.map(t=><ImageTreatment key={t.id} treatment={t} notesVisible={notesVisible}/>)}</div></section><section className="playground-section metadata-section"><SectionHeader index="05" eyebrow="METADATA / CONTENT HIERARCHY" title="CONTEXT FIRST. TECH SECOND. CONTRIBUTION WINS." copy="The metadata should help someone understand the work quickly, then get out of the way."/><MetadataExperiment/></section><section className="playground-section motion-section" id="step-6"><SectionHeader index="06" eyebrow="MOTION SYSTEM / STRESS TEST" title="SAME FAMILY. DIFFERENT RESOLVE." copy="01 resolves into the base Editorial Crop. 02 starts as a graphic poster, then the media emerges and the solid number passes into the transparent number layer."/><MotionExperiment motion={motion}/><MotionExperiment motion={motion} index="02" title="GALAXY UNPACKED" subtitle="LOUDER SOURCE. QUIETER SYSTEM." image={unpacked} alt="Galaxy Unpacked campaign page" mirror campaign interruption={['NEW /','ERA','OPEN.']}/></section><section className="playground-section stress-section"><SectionHeader index="06B" eyebrow="STATIC CROSS-CHECK" title="THE SYSTEM STILL HAS TO SURVIVE DIFFERENT SAMSUNG WORLDS." copy="The animated 01 / 02 test now sits above this static comparison so we can judge motion and source-art direction separately."/><StressTest/></section><footer className="playground-footer"><span>VISUAL PLAYGROUND / V9</span><strong>MAKE THE WORK CLEAR. MAKE TITO WEIRD.</strong></footer></main>}
createRoot(document.getElementById('root')).render(<App/>);
