import { useEffect, useRef, useState } from 'react';
import { ArrowDownLeft, ArrowLeft, ArrowUpLeft, ChevronLeft, ChevronRight, Instagram, Mail, Menu, Send, X } from 'lucide-react';
import { site as sourceSite, selectedWork as sourceWork, featuredProject as sourceProject, studies as sourceStudies, services as sourceServices, process as sourceProcess } from './content';
import './styles.css';
import { LanguageProvider, useLanguage } from './i18n';
const navLinks = [{
  href: '#work',
  label: 'Selected work'
}, {
  href: '#studies',
  label: 'Design studies'
}, {
  href: '#services',
  label: 'Services & process'
}, {
  href: '#about',
  label: 'About Studio 7'
}];
const waMessage = 'שלום אלישבע, אשמח לשמוע על שירותי התכנון והעיצוב של Studio 7';
function WhatsAppIcon({
  size = 21
}) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3 20.6l1.5-4.9a8.5 8.5 0 1 1 16-3.9Z" /><path d="M8 7.7c-.4.1-1 1-.9 2.1.1 2.2 2.7 5.4 5.6 6.6 1.9.8 3.2.6 3.7-.1l.6-1.3c.1-.3-.1-.5-.5-.7l-1.8-.8c-.3-.1-.5.1-.8.5l-.5.6c-1.3-.5-2.9-2-3.5-3.3l.5-.7c.2-.3.3-.5.1-.9l-.8-1.9c-.2-.3-.5-.3-.7-.2Z" /></svg>;
}
function SectionTitle({
  index,
  eyebrow,
  title,
  sub
}) {
  const {
    t,
    translate,
    language,
    setLanguage
  } = useLanguage();
  return <div className="section-heading"><div><span className="tiny-label">{index}{t("/")}{eyebrow}</span><h2>{title}</h2></div>{sub && <p>{sub}</p>}</div>;
}
function Header({
  menuOpen,
  setMenuOpen,
  scrollContact
}) {
  const {
    t,
    translate,
    language,
    setLanguage
  } = useLanguage();
  return <header className="site-header"><div className="site-header-inner container"><a href="#home" className="logo-link" aria-label={t("Studio 7 \u05E2\u05DE\u05D5\u05D3 \u05D4\u05D1\u05D9\u05EA")} onClick={() => setMenuOpen(false)}><img src="/assets/studio7-logo.png" alt="STUDIO 7" /></a><nav className={menuOpen ? 'menu active' : 'menu'} aria-label={t("\u05E0\u05D9\u05D5\u05D5\u05D8 \u05E8\u05D0\u05E9\u05D9")}>{navLinks.map(item => <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{t(item.label)}</a>)}<a className="mobile-only" href="#contact" onClick={() => setMenuOpen(false)}>{t("Contact")}</a></nav><button type="button" className="language-switch" onClick={() => setLanguage(language === 'he' ? 'en' : 'he')} aria-label={language === 'he' ? 'Switch to English' : t("\u05DE\u05E2\u05D1\u05E8 \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA")}><span lang="he" aria-current={language === 'he' ? 'true' : undefined}>{t("HE")}</span><span aria-hidden="true">{t("/")}</span><span lang="en" aria-current={language === 'en' ? 'true' : undefined}>{t("EN")}</span></button><button className="nav-contact" onClick={scrollContact}>{t("\u05D4\u05E9\u05D0\u05E8\u05EA \u05E4\u05E8\u05D8\u05D9\u05DD")}<ArrowUpLeft size={16} /></button><button aria-label={menuOpen ? t("\u05E1\u05D2\u05D5\u05E8 \u05EA\u05E4\u05E8\u05D9\u05D8") : t("\u05E4\u05EA\u05D7 \u05EA\u05E4\u05E8\u05D9\u05D8")} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="menu-button">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button></div></header>;
}
function Lightbox({
  images,
  index: initialIndex,
  onClose
}) {
  const {
    t,
    translate,
    language,
    setLanguage
  } = useLanguage();
  const [index, setIndex] = useState(initialIndex);
  const ref = useRef(null);
  useEffect(() => {
    const prev = document.activeElement;
    const old = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    ref.current?.focus();
    const key = e => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIndex(i => (i - 1 + images.length) % images.length);
      if (e.key === 'ArrowLeft') setIndex(i => (i + 1) % images.length);
    };
    document.addEventListener('keydown', key);
    return () => {
      document.removeEventListener('keydown', key);
      document.body.style.overflow = old;
      prev?.focus?.();
    };
  }, [images, onClose]);
  return <div className="lightbox" role="dialog" aria-modal="true" aria-label={t("\u05EA\u05E6\u05D5\u05D2\u05D4 \u05DE\u05D5\u05D2\u05D3\u05DC\u05EA")} ref={ref} tabIndex="-1"><button className="lightbox-close" aria-label={t("\u05E1\u05D2\u05D9\u05E8\u05D4")} onClick={onClose}><X size={25} /></button><div className="lightbox-stage"><button aria-label={t("\u05EA\u05DE\u05D5\u05E0\u05D4 \u05E7\u05D5\u05D3\u05DE\u05EA")} onClick={() => setIndex(i => (i - 1 + images.length) % images.length)}><ChevronRight /></button><img src={images[index].src} alt={images[index].alt} /><button aria-label={t("\u05EA\u05DE\u05D5\u05E0\u05D4 \u05D4\u05D1\u05D0\u05D4")} onClick={() => setIndex(i => (i + 1) % images.length)}><ChevronLeft /></button></div><div className="lightbox-foot"><span>{index + 1}{t("/")}{images.length}</span><span>{images[index].alt}</span></div></div>;
}
function WorkModal({
  onClose,
  onPhoto
}) {
  const {
    t,
    translate,
    language,
    setLanguage
  } = useLanguage();
  const selectedWork = translate(sourceWork);
  const [tab, setTab] = useState('after');
  const ref = useRef(null);
  const images = tab === 'after' ? selectedWork.after : selectedWork.before;
  useEffect(() => {
    const old = document.body.style.overflow;
    const prev = document.activeElement;
    document.body.style.overflow = 'hidden';
    ref.current?.focus();
    const key = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', key);
    return () => {
      document.body.style.overflow = old;
      window.removeEventListener('keydown', key);
      prev?.focus?.();
    };
  }, [onClose]);
  return <div className="work-modal-backdrop" onClick={onClose} role="presentation"><article className="work-modal" role="dialog" aria-modal="true" aria-labelledby="work-title" tabIndex="-1" ref={ref} onClick={e => e.stopPropagation()}><div className="modal-top"><span className="tiny-label">{t("SELECTED WORK / COMPLETED")}</span><button onClick={onClose} aria-label={t("\u05E1\u05D2\u05D5\u05E8 \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8")}><X size={24} /></button></div><div className="modal-content"><span className="eyebrow">{t("\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05E9\u05D1\u05D5\u05E6\u05E2")}</span><h2 id="work-title">{selectedWork.title}</h2><p className="modal-intro">{selectedWork.description}</p><div className="photo-switch" role="group" aria-label={t("\u05E6\u05E4\u05D9\u05D9\u05D4 \u05D1\u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05DC\u05E4\u05E0\u05D9 \u05D5\u05D0\u05D7\u05E8\u05D9")}><button className={tab === 'after' ? 'active' : ''} aria-pressed={tab === 'after'} onClick={() => setTab('after')}>{t("\u05D0\u05D7\u05E8\u05D9 \u05D4\u05E9\u05D9\u05E4\u05D5\u05E5")}</button><button className={tab === 'before' ? 'active' : ''} aria-pressed={tab === 'before'} onClick={() => setTab('before')}>{t("\u05DC\u05E4\u05E0\u05D9 \u05D4\u05E9\u05D9\u05E4\u05D5\u05E5")}</button></div><div className="modal-gallery">{images.map((img, i) => <button key={img.src} type="button" onClick={() => onPhoto(images, i)} aria-label={t("\u05D4\u05D2\u05D3\u05DC\u05EA \u05EA\u05DE\u05D5\u05E0\u05D4: ") + img.alt}><img src={img.src} alt={img.alt} loading="lazy" /></button>)}</div><div className="video-area"><div><span className="tiny-label">{t("PROJECT FILM")}</span><h3>{t("\u05E1\u05D9\u05D5\u05E8 \u05E7\u05E6\u05E8 \u05D1\u05EA\u05D5\u05E6\u05D0\u05D4")}</h3></div><video controls playsInline preload="none" poster={selectedWork.poster} src={selectedWork.video}>{t("\u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05D0\u05D9\u05E0\u05D5 \u05EA\u05D5\u05DE\u05DA \u05D1\u05D4\u05E4\u05E2\u05DC\u05EA \u05D4\u05D5\u05D5\u05D9\u05D3\u05D0\u05D5.")}</video></div></div></article></div>;
}
function ContactForm({
  onMissing
}) {
  const {
    t,
    translate,
    language,
    setLanguage
  } = useLanguage();
  const site = translate(sourceSite);
  const [fields, setFields] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const change = (field, value) => setFields(f => ({
    ...f,
    [field]: value
  }));
  async function submit(e) {
    e.preventDefault();
    setError('');
    const text = [[t("שם: "),fields.name],[t("טלפון: "),fields.phone],[t("אימייל: "),fields.email],[t("סוג הפרויקט"),t(fields.type || "")],[t("הודעה: "),fields.message]].map(([label,value])=>label+" "+value).join("\n");
    if (site.contact.formspreeId) {
      setStatus('sending');
      try {
        const response = await fetch(`https://formspree.io/f/${site.contact.formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(fields)
        });
        if (!response.ok) throw new Error('Not sent');
        setStatus('sent');
        setFields({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
      } catch {
        setStatus('idle');
        setError(t("\u05D4\u05E9\u05DC\u05D9\u05D7\u05D4 \u05E0\u05DB\u05E9\u05DC\u05D4. \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05E6\u05E8\u05D5 \u05E7\u05E9\u05E8 \u05D1\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4."));
      }
    } else if (site.contact.email) {
      const subject = encodeURIComponent(t("\u05E4\u05E0\u05D9\u05D9\u05D4 \u05DE\u05D0\u05EA\u05E8 Studio 7 \u2014 ") + fields.name);
      location.href = `mailto:${site.contact.email}?subject=${subject}&body=${encodeURIComponent(text)}`;
    } else onMissing();
  }
  return <form onSubmit={submit} className="contact-form"><div className="contact-fields"><label>{t("\u05E9\u05DD \u05DE\u05DC\u05D0")}<input required maxLength={80} placeholder={t("\u05D0\u05D9\u05DA \u05E7\u05D5\u05E8\u05D0\u05D9\u05DD \u05DC\u05DA?")} value={fields.name} onChange={e => change('name', e.target.value)} /></label><label>{t("\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF")}<input required type="tel" maxLength={25} placeholder="050-0000000" value={fields.phone} onChange={e => change('phone', e.target.value)} /></label><label>{t("\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC")}<input required type="email" maxLength={150} placeholder="name@email.com" value={fields.email} onChange={e => change('email', e.target.value)} /></label><label>{t("\u05E1\u05D5\u05D2 \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8")}<select defaultValue="" onChange={e => change('type', e.target.value)}><option value="">{t("\u05D1\u05D7\u05E8\u05D5 \u05E0\u05D5\u05E9\u05D0")}</option><option value="שיפוץ דירה">{t("\u05E9\u05D9\u05E4\u05D5\u05E5 \u05D3\u05D9\u05E8\u05D4")}</option><option value="בית פרטי">{t("\u05D1\u05D9\u05EA \u05E4\u05E8\u05D8\u05D9")}</option><option value="חלל בודד">{t("\u05D7\u05DC\u05DC \u05D1\u05D5\u05D3\u05D3")}</option><option value="אחר">{t("\u05D0\u05D7\u05E8")}</option></select></label><label className="full">{t("\u05E1\u05E4\u05E8\u05D5 \u05E7\u05E6\u05EA \u05E2\u05DC \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8")}<textarea rows={3} maxLength={1600} placeholder={t("\u05E0\u05E9\u05DE\u05D7 \u05DC\u05E9\u05DE\u05D5\u05E2 \u05DE\u05D4 \u05EA\u05E8\u05E6\u05D5 \u05DC\u05EA\u05DB\u05E0\u05DF...")} value={fields.message} onChange={e => change('message', e.target.value)} /></label></div>{error && <p role="alert" className="form-error">{error}</p>}{status === 'sent' ? <p role="status" className="form-success">{t("\u05EA\u05D5\u05D3\u05D4, \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4 \u05E0\u05E9\u05DC\u05D7\u05D4!")}</p> : <button type="submit" className="form-send" disabled={status === 'sending'}>{status === 'sending' ? t("\u05E9\u05D5\u05DC\u05D7\u05D9\u05DD...") : t("\u05E9\u05DC\u05D9\u05D7\u05EA \u05E4\u05E0\u05D9\u05D9\u05D4")} <Send size={17} /></button>}{!site.contact.formspreeId && site.contact.email && <p className="form-note">{t("\u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05D9\u05D5\u05E2\u05D1\u05E8\u05D5 \u05DC\u05D4\u05D5\u05D3\u05E2\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05D7\u05D3\u05E9\u05D4. \u05D9\u05E9 \u05DC\u05DC\u05D7\u05D5\u05E5 \u05E2\u05DC \u05E9\u05DC\u05D9\u05D7\u05D4 \u05D1\u05EA\u05D5\u05DB\u05E0\u05EA \u05D4\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05DB\u05D3\u05D9 \u05DC\u05D4\u05E9\u05DC\u05D9\u05DD \u05D0\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4.")}</p>}</form>;
}
function StudioApp() {
  const {
    t,
    translate,
    language,
    setLanguage
  } = useLanguage();
  const site = translate(sourceSite);
  const selectedWork = translate(sourceWork);
  const featuredProject = translate(sourceProject),
    studies = translate(sourceStudies),
    services = translate(sourceServices),
    process = translate(sourceProcess);
  const [menuOpen, setMenuOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [missing, setMissing] = useState('');
  const scrollContact = () => {
    setMenuOpen(false);
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const whatsapp = () => {
    const num = site.contact.whatsapp.replace(/\D/g, '');
    if (num) window.open(`https://wa.me/${num}?text=${encodeURIComponent(t(waMessage))}`, '_blank', 'noopener,noreferrer');else setMissing(t("\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4 \u05E2\u05D3\u05D9\u05D9\u05DF \u05DC\u05D0 \u05D4\u05D5\u05D2\u05D3\u05E8. \u05D9\u05E9 \u05DC\u05E2\u05D3\u05DB\u05DF \u05D0\u05D5\u05EA\u05D5 \u05DC\u05E4\u05E0\u05D9 \u05E4\u05E8\u05E1\u05D5\u05DD \u05D4\u05D0\u05EA\u05E8."));
  };
  useEffect(() => {
    const key = e => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', key);
    return () => document.removeEventListener('keydown', key);
  }, []);
  return <><a href="#main" className="skip-link">{t("\u05D3\u05DC\u05D2\u05D5 \u05DC\u05EA\u05D5\u05DB\u05DF")}</a><Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollContact={scrollContact} /><main id="main"><section id="home" className="hero"><div className="container hero-grid"><div className="hero-text"><span className="tiny-label">{t("STUDIO 7 \xB7 ARCHITECTURE & INTERIOR DESIGN")}</span><h1>{t("\u05EA\u05DB\u05E0\u05D5\u05DF \u05DE\u05D3\u05D5\u05D9\u05E7.")}<br /><em>{t("\u05D7\u05DC\u05DC\u05D9\u05DD \u05E2\u05DD \u05D0\u05D5\u05E4\u05D9.")}</em></h1><p className="hero-tagline">{site.tagline}</p><p className="hero-summary">{t("\u05D0\u05D3\u05E8\u05D9\u05DB\u05DC\u05D5\u05EA \u05D5\u05E2\u05D9\u05E6\u05D5\u05D1 \u05E4\u05E0\u05D9\u05DD \u05DC\u05D7\u05DC\u05DC\u05D9\u05DD \u05E4\u05E8\u05D8\u05D9\u05D9\u05DD, \u05DE\u05E1\u05D7\u05E8\u05D9\u05D9\u05DD \u05D5\u05E6\u05D9\u05D1\u05D5\u05E8\u05D9\u05D9\u05DD \u2014 \u05DE\u05EA\u05D5\u05DA \u05D4\u05E7\u05E9\u05D1\u05D4 \u05DC\u05E6\u05E8\u05DB\u05D9\u05DD, \u05DE\u05D7\u05E9\u05D1\u05D4 \u05E2\u05DC \u05D4\u05D7\u05DC\u05DC \u05D5\u05D3\u05D9\u05D5\u05E7 \u05D1\u05E4\u05E8\u05D8\u05D9\u05DD.")}</p><a href="#studies" className="text-arrow">{t("\u05DC\u05D2\u05DC\u05D5\u05EA \u05D0\u05EA \u05D4\u05E2\u05D1\u05D5\u05D3\u05D5\u05EA")}<ArrowDownLeft size={20} /></a></div><div className="hero-visual"><img src={studies[0].image} alt={studies[0].alt} fetchPriority="high" /><div className="image-chip">{t("\u05EA\u05DB\u05E0\u05D5\u05DF \u05D5\u05E2\u05D9\u05E6\u05D5\u05D1 \u05E4\u05E0\u05D9\u05DD")}<span>{t("\xB7 \u05D4\u05D3\u05DE\u05D9\u05D4")}</span></div></div></div><div className="container hero-foot"><span>{t("ARCHITECTURE \xB7 INTERIORS \xB7 DETAILS")}</span><span>{t("SCROLL TO EXPLORE")}<ArrowDownLeft size={13} /></span></div></section>
    <section className="intro-statement container"><span className="tiny-label">{t("THE STUDIO PHILOSOPHY")}</span><p>{t("\u05D7\u05DC\u05DC \u05D8\u05D5\u05D1 \u05DE\u05EA\u05D7\u05D9\u05DC \u05D1\u05D4\u05D1\u05E0\u05D4 \u05E2\u05DE\u05D5\u05E7\u05D4.")}<br /><em>{t("\u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05DE\u05E2\u05E0\u05D9\u05E7\u05D9\u05DD \u05DC\u05D5 \u05DE\u05E9\u05DE\u05E2\u05D5\u05EA.")}</em></p><span className="small-seven">{t("S / 7")}</span></section>
    <section id="studies" className="section studies-section"><div className="container"><SectionTitle index="01" eyebrow="DESIGN STUDIES" title={featuredProject.title} sub={`${featuredProject.subtitle} · ${featuredProject.status}`} /><div className="studies-grid">{studies.map((study, i) => <button type="button" className={`study-tile study-${i}`} key={study.id} onClick={() => setLightbox({
              images: studies.map(s => ({
                src: s.image,
                alt: s.alt
              })),
              index: i
            })} aria-label={t("\u05D4\u05E6\u05D2\u05EA \u05D4\u05D3\u05DE\u05D9\u05D4: ") + study.title}><img loading="lazy" src={study.image} alt={study.alt} /><div className="study-bottom"><div><span>{t("\u05DE\u05D1\u05D8 \u05D0\u05DC \u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05E2\u05D9\u05E6\u05D5\u05D1 \xB7 \u05D4\u05D3\u05DE\u05D9\u05D4")}</span><h3>{study.title}</h3></div><span className="study-expand"><ArrowUpLeft size={20} /></span></div></button>)}</div><p className="studies-footnote">{featuredProject.description}</p></div></section>
    <section id="work" className="section work-section"><div className="container"><SectionTitle index="02" eyebrow="SELECTED WORK" title={t("\u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05E9\u05D1\u05D5\u05E6\u05E2\u05D5")} sub={t("\u05DE\u05D1\u05D8 \u05E2\u05DC \u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05E9\u05D1\u05D5\u05E6\u05E2\u05D5 \u05D1\u05E4\u05D5\u05E2\u05DC. \u05DC\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05D7\u05D3\u05E8 \u05D4\u05E8\u05D7\u05E6\u05D4 \u05D2\u05DC\u05E8\u05D9\u05D9\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05DC\u05E4\u05E0\u05D9 \u05D5\u05D0\u05D7\u05E8\u05D9 \u05D5\u05E1\u05E8\u05D8\u05D5\u05DF \u05E7\u05E6\u05E8.")} /><div className="selected-card"><button className="selected-photo" onClick={() => setWorkOpen(true)} aria-label={t("\u05D4\u05E6\u05D2\u05EA \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05D7\u05D9\u05D3\u05D5\u05E9 \u05D7\u05D3\u05E8 \u05D4\u05E8\u05D7\u05E6\u05D4")}><img src={selectedWork.cover} alt={t("\u05D7\u05D3\u05E8 \u05D4\u05E8\u05D7\u05E6\u05D4 \u05DC\u05D0\u05D7\u05E8 \u05D7\u05D9\u05D3\u05D5\u05E9 \u05D9\u05E1\u05D5\u05D3\u05D9")} loading="lazy" /><span className="selected-chip">{t("COMPLETED PROJECT")}</span></button><div className="selected-details"><span className="tiny-label">{t("01 / COMPLETED WORK")}</span><h3>{selectedWork.title}</h3><p>{selectedWork.description}</p><button className="underlined-action" onClick={() => setWorkOpen(true)}>{t("\u05DC\u05D2\u05DC\u05E8\u05D9\u05D4 \u05D5\u05DC\u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05DC\u05E4\u05E0\u05D9 \u05D5\u05D0\u05D7\u05E8\u05D9")}<ArrowUpLeft size={18} /></button></div></div></div></section>
    <section id="services" className="section services-section"><div className="container"><SectionTitle index="03" eyebrow="SERVICES & PROCESS" title={t("\u05EA\u05D4\u05DC\u05D9\u05DA \u05E2\u05DD \u05DE\u05D7\u05E9\u05D1\u05D4")} sub={t("\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9 \u05D4\u05E1\u05D8\u05D5\u05D3\u05D9\u05D5 \u05D5\u05D4\u05D3\u05E8\u05DA \u05E9\u05D1\u05D4 \u05E8\u05E2\u05D9\u05D5\u05DF \u05D4\u05D5\u05E4\u05DA \u05DC\u05EA\u05DB\u05E0\u05D5\u05DF \u05D1\u05E8\u05D5\u05E8 \u05D5\u05DC\u05D1\u05D9\u05E6\u05D5\u05E2 \u05DE\u05D3\u05D5\u05D9\u05E7.")} /><div className="services-layout"><div className="services-list">{services.map(s => <div className="service" key={s.number}><span>{s.number}</span><div><h3>{s.name}</h3><p>{s.description}</p></div><small>{s.en}</small></div>)}</div><div className="service-aside"><span className="tiny-label">{t("THE PROCESS")}</span><h3>{t("\u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD")}<br />{t("\u05D1\u05E9\u05D9\u05D7\u05D4.")}</h3><p>{t("\u05E9\u05DC\u05D1\u05D9 \u05E2\u05D1\u05D5\u05D3\u05D4 \u05E2\u05D9\u05E7\u05E8\u05D9\u05D9\u05DD, \u05D4\u05DE\u05D5\u05EA\u05D0\u05DE\u05D9\u05DD \u05DC\u05D4\u05D9\u05E7\u05E3 \u05D5\u05DC\u05D0\u05D5\u05E4\u05D9 \u05E9\u05DC \u05DB\u05DC \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8.")}</p><ol>{process.map(s => <li key={s.number}><span>{s.number}</span>{s.name}</li>)}</ol></div></div></div></section>
    <section id="about" className="section about-section"><div className="container about-grid"><div className="about-mark"><img src="/assets/studio7-logo.png" alt={t("\u05E1\u05DE\u05DC Studio 7")} /><span>{site.tagline}</span></div><div className="about-copy"><span className="tiny-label">{t("04 / ABOUT STUDIO 7")}</span><h2>{t("\u05D4\u05D9\u05DB\u05E8\u05D5\u05EA \u05E2\u05DD")}<br /><em>{t("\u05D0\u05DC\u05D9\u05E9\u05D1\u05E2.")}</em></h2><p>{site.about}</p><p>{site.aboutApproach}</p><div className="about-signed">{t("\u05D0\u05DC\u05D9\u05E9\u05D1\u05E2")}<span>{t("STUDIO 7")}</span></div><button onClick={scrollContact} className="underlined-action">{t("\u05D1\u05D5\u05D0\u05D5 \u05E0\u05D3\u05D1\u05E8 \u05E2\u05DC \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05E9\u05DC\u05DB\u05DD")}<ArrowUpLeft size={17} /></button></div></div></section>
    <section id="contact" className="section contact-section"><div className="container contact-grid"><div className="contact-text"><span className="tiny-label">{t("05 / GET IN TOUCH")}</span><h2>{t("\u05E0\u05D9\u05E6\u05D5\u05E8 \u05D9\u05D7\u05D3")}<br /><em>{t("\u05DE\u05E9\u05D4\u05D5 \u05D0\u05D9\u05E9\u05D9.")}</em></h2><p>{t("\u05D9\u05E9 \u05DC\u05DB\u05DD \u05D7\u05DC\u05DC \u05E9\u05DE\u05D7\u05DB\u05D4 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9? \u05D4\u05E9\u05D0\u05D9\u05E8\u05D5 \u05E4\u05E8\u05D8\u05D9\u05DD \u05D5\u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1\u05E9\u05D9\u05D7\u05D4.")}</p><div className="contact-direct"><span>{t("\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC")}</span>{site.contact.email ? <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> : <span className="pending-detail">{t("\u05E4\u05E8\u05D8\u05D9 \u05D4\u05E7\u05E9\u05E8 \u05D9\u05E2\u05D5\u05D3\u05DB\u05E0\u05D5 \u05D1\u05E7\u05E8\u05D5\u05D1")}</span>}{site.contact.instagram && <a href={site.contact.instagram} rel="noopener noreferrer" target="_blank" className="insta"><Instagram size={17} /> {site.contact.instagramHandle}</a>}<span className="contact-phone"><a href={`tel:${site.contact.localPhone.replace(/\D/g, '')}`}>{site.contact.localPhone}</a></span></div></div><div className="contact-panel"><span className="tiny-label">{t("TELL US ABOUT YOUR PROJECT")}</span><h3>{t("\u05D4\u05E9\u05D0\u05E8\u05EA \u05E4\u05E8\u05D8\u05D9\u05DD")}</h3><ContactForm onMissing={() => setMissing(t("\u05D8\u05D5\u05E4\u05E1 \u05D4\u05D4\u05EA\u05E7\u05E9\u05E8\u05D5\u05EA \u05E2\u05D3\u05D9\u05D9\u05DF \u05DC\u05D0 \u05DE\u05D7\u05D5\u05D1\u05E8 \u05DC\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05D0\u05D5 \u05DC\u05E9\u05D9\u05E8\u05D5\u05EA \u05E9\u05DC\u05D9\u05D7\u05EA \u05D8\u05E4\u05E1\u05D9\u05DD. \u05D9\u05E9 \u05DC\u05D4\u05D2\u05D3\u05D9\u05E8 \u05D6\u05D0\u05EA \u05DC\u05E4\u05E0\u05D9 \u05E4\u05E8\u05E1\u05D5\u05DD \u05D4\u05D0\u05EA\u05E8."))} /></div></div></section></main>
    <footer className="site-footer"><div className="container"><a href="#home" className="footer-logo"><img src="/assets/studio7-logo.png" alt="Studio 7" /></a><span>{site.tagline}</span><small>{t("\xA9")}{new Date().getFullYear()}{t("STUDIO 7")}</small></div></footer>
    <aside className="floating-actions" aria-label={t("\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8 \u05DE\u05D4\u05D9\u05E8")}><button type="button" className="float-wa" onClick={whatsapp} aria-label={t("WhatsApp \u2013 \u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8")}><WhatsAppIcon size={22} /><span>{t("WhatsApp")}</span></button><button type="button" className="float-lead" onClick={scrollContact} aria-label={t("\u05DE\u05E2\u05D1\u05E8 \u05DC\u05D8\u05D5\u05E4\u05E1 \u05D4\u05E9\u05D0\u05E8\u05EA \u05E4\u05E8\u05D8\u05D9\u05DD")}><Mail size={20} /><span>{t("\u05D4\u05E9\u05D0\u05E8\u05EA \u05E4\u05E8\u05D8\u05D9\u05DD")}</span></button></aside>
    {missing && <div className="notice-backdrop" role="presentation" onClick={() => setMissing('')}><div className="notice" role="alertdialog" aria-modal="true" onClick={e => e.stopPropagation()}><button onClick={() => setMissing('')} aria-label={t("\u05E1\u05D2\u05D5\u05E8")}><X size={21} /></button><h3>{t("\u05DC\u05E4\u05E0\u05D9 \u05D4\u05E4\u05E8\u05E1\u05D5\u05DD")}</h3><p>{missing}</p><button className="notice-ok" onClick={() => setMissing('')}>{t("\u05D4\u05D1\u05E0\u05EA\u05D9")}</button></div></div>}
    {workOpen && <WorkModal onClose={() => setWorkOpen(false)} onPhoto={(images, index) => setLightbox({
      images,
      index
    })} />}
    {lightbox && <Lightbox key={`${lightbox.images.length}-${lightbox.index}`} images={lightbox.images} index={lightbox.index} onClose={() => setLightbox(null)} />}
  </>;
}
export default function App() {
  return <LanguageProvider><StudioApp /></LanguageProvider>;
}
