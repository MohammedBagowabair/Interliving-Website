import { useCallback, useId, useRef, useState } from 'react'
import { asset, useI18n } from './i18n'
import { useMenu } from './hooks'
import { BIZ, type Content } from './content'
import { Arrow, Faq, Footer, Header, MapFigure, MobileBar, MobileMenu, PhoneIcon, Stars, WaIcon, waLink } from './ui'

function Brand({ small = false }: { small?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 40 40" className={small ? 'h-9 w-9' : 'h-10 w-10'} aria-hidden><rect width="40" height="40" rx="4" fill="rgb(var(--accentlt))" /><path d="M10 30V10h6v20zM20 30V18h10v12z" fill="rgb(var(--deep))" /></svg>
      <span className="leading-none"><span className="block font-display text-[20px] font-bold tracking-[-0.03em]">interliving</span><span className="mt-1 block font-mono text-[10.5px] uppercase tracking-[0.12em] text-ondeepm">Sunway Velocity · KL</span></span>
    </span>
  )
}

const img = (n: string, sizes: string, alt: string, cls: string, w = 960, h = 1200) => (
  <img src={asset(`images/${n}-640.webp`)} srcSet={`${asset(`images/${n}-640.webp`)} 640w, ${asset(`images/${n}-960.webp`)} 960w`} sizes={sizes} width={w} height={h} loading="lazy" decoding="async" alt={alt} className={cls} />
)

function Hero({ waHi }: { waHi: string }) {
  const { c } = useI18n<Content>()
  const H = c.hero
  return (
    <section id="top" className="border-b border-ink/10">
      <div className="mx-auto grid max-w-[1320px] gap-8 px-5 pb-12 pt-8 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:pb-16 lg:pt-14">
        <div className="flex flex-col lg:col-span-6">
          <p className="font-mono text-[12.5px] uppercase tracking-[0.1em] text-accentink">{H.kicker}</p>
          <h1 className="mt-5 font-display text-[clamp(2.7rem,11.5vw,5.6rem)] font-bold leading-[0.92] tracking-[-0.045em]">{H.h1a} <span className="text-accentink">{H.h1b}</span></h1>
          <p className="mt-6 max-w-[32rem] text-[17px] leading-relaxed text-muted">{H.sub}</p>
          <div className="mt-8 grid grid-cols-[1fr_auto] gap-3 sm:flex">
            <a href="#contact" className="tap inline-flex h-[56px] items-center justify-center gap-2 rounded-[6px] bg-accent px-7 text-[16px] font-semibold text-onaccent transition hover:brightness-110">{H.cta}<Arrow /></a>
            <a href={`tel:${BIZ.tel}`} className="tap inline-flex h-[56px] items-center justify-center gap-2 rounded-[6px] border border-ink/20 px-5 text-[16px] font-semibold transition hover:border-ink"><PhoneIcon className="h-[18px] w-[18px]" /><span className="sr-only sm:not-sr-only">{H.cta2}</span></a>
          </div>
          <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-8 font-mono text-[13px] text-muted">
            <a href={BIZ.maps} target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:text-ink"><span className="font-display text-[22px] font-bold text-ink">{BIZ.google}</span><Stars value={4.2} />{H.rating}</a>
            <a href={waHi} target="_blank" rel="noopener" className="inline-flex min-h-[44px] items-center gap-2 hover:text-ink"><WaIcon className="h-4 w-4" />{BIZ.phone}</a>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="grid grid-cols-6 grid-rows-[auto_auto] gap-3">
            <figure className="col-span-6 lg:col-span-4 lg:row-span-2">
              <picture>
                <source media="(min-width: 1024px)" srcSet={asset('images/hero-1400.webp')} />
                <img src={asset('images/hero-m-480.webp')} srcSet={`${asset('images/hero-m-480.webp')} 480w, ${asset('images/hero-m-720.webp')} 720w`} sizes="(min-width:1024px) 420px, 100vw" width={720} height={900} alt="" fetchPriority="high" decoding="async" className="aspect-[4/3] h-full w-full rounded-[6px] object-cover lg:aspect-auto" />
              </picture>
            </figure>
            <figure className="hidden lg:col-span-2 lg:block">{img('il-kitchen', '200px', '', 'aspect-[4/5] w-full rounded-[6px] object-cover')}</figure>
            <figure className="hidden lg:col-span-2 lg:block">{img('il-deco', '200px', '', 'aspect-[4/5] w-full rounded-[6px] object-cover')}</figure>
          </div>
          <p className="mt-2 font-mono text-[11px] text-muted">{H.illus}</p>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const { c } = useI18n<Content>()
  const S = c.services
  return (
    <section id="services" className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:py-24">
      <div className="grid gap-4 lg:grid-cols-12">
        <p className="font-mono text-[12.5px] uppercase tracking-[0.1em] text-accentink lg:col-span-3">{S.kicker}</p>
        <h2 className="h2 lg:col-span-9">{S.title}</h2>
      </div>
      <ol className="mt-10 border-t border-ink lg:ml-[25%]">
        {S.items.map(([n, t, d]) => (
          <li key={n} className="grid grid-cols-[3rem_1fr] gap-x-4 gap-y-1 border-b border-ink/15 py-6 sm:grid-cols-[4rem_1fr_1.2fr] sm:items-baseline">
            <span className="font-mono text-[13px] text-accentink">{n}</span>
            <h3 className="font-display text-[clamp(1.5rem,4vw,2.1rem)] font-bold leading-tight tracking-[-0.03em]">{t}</h3>
            <p className="col-start-2 text-[16px] leading-relaxed text-muted sm:col-start-3">{d}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 max-w-xl text-[15px] text-muted lg:ml-[25%]">{S.note}</p>
    </section>
  )
}

function Start() {
  const { c } = useI18n<Content>()
  const S = c.start
  return (
    <section id="start" className="on-deep bg-deep text-ondeep">
      <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-4 lg:grid-cols-12">
          <p className="font-mono text-[12.5px] uppercase tracking-[0.1em] text-accentlt lg:col-span-3">{S.kicker}</p>
          <h2 className="h2 lg:col-span-9">{S.title}</h2>
        </div>
        <ol className="mt-10 grid gap-px overflow-hidden rounded-[6px] bg-ondeep/15 md:grid-cols-3 lg:ml-[25%]">
          {S.steps.map(([t, d], i) => (
            <li key={t} className="bg-deep p-6 sm:p-7">
              <span className="font-mono text-[13px] text-accentlt">0{i + 1}/03</span>
              <h3 className="mt-6 font-display text-[23px] font-bold leading-tight tracking-[-0.02em]">{t}</h3>
              <p className="mt-2 text-[15.5px] leading-relaxed text-ondeepm">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Ideas() {
  const { c } = useI18n<Content>()
  const I = c.ideas
  const names = ['il-kitchen', 'il-open', 'il-deco', 'il-shelf', 'il-living', 'il-bed']
  return (
    <section id="ideas" className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div><p className="font-mono text-[12.5px] uppercase tracking-[0.1em] text-accentink">{I.kicker}</p><h2 className="h2 mt-3">{I.title}</h2></div>
        <p className="max-w-xs font-mono text-[12.5px] text-muted">{I.note}</p>
      </div>
      <div className="rail -mx-5 mt-10 flex gap-3 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 lg:grid-cols-6" tabIndex={0} role="region" aria-label={I.title}>
        {names.map((n, i) => <figure key={n} className="w-[62%] shrink-0 md:w-auto">{img(n, '(min-width:1024px) 210px, (min-width:768px) 31vw, 62vw', I.alts[i], 'aspect-[4/5] w-full rounded-[6px] object-cover')}</figure>)}
      </div>
    </section>
  )
}

function Visit() {
  const { c } = useI18n<Content>()
  const V = c.visit
  return (
    <section id="visit" className="bg-soft">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:py-24">
        <div className="lg:col-span-5">
          <p className="font-mono text-[12.5px] uppercase tracking-[0.1em] text-accentink">{V.kicker}</p>
          <h2 className="h2 mt-3">{V.title}</h2>
          <p className="mt-4 text-[16.5px] leading-relaxed text-muted">{V.sub}</p>
          <dl className="mt-8 grid gap-6 border-t border-ink/15 pt-6">
            <div><dt className="font-mono text-[12px] uppercase tracking-[0.1em] text-accentink">{V.address}</dt><dd className="mt-1.5 text-[16.5px] leading-relaxed">{BIZ.address}<br /><a href={BIZ.maps} target="_blank" rel="noopener" className="inline-flex min-h-[44px] items-center font-semibold text-accentink underline underline-offset-4">{V.maps}</a></dd></div>
            <div><dt className="font-mono text-[12px] uppercase tracking-[0.1em] text-accentink">{V.phone}</dt><dd className="mt-1.5"><a href={`tel:${BIZ.tel}`} className="font-display text-[30px] font-bold tracking-[-0.03em]">{BIZ.phone}</a></dd></div>
          </dl>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
          <figure>
            {img('velocity', '(min-width:1024px) 380px, (min-width:640px) 45vw, 92vw', V.photo, 'aspect-[3/2] w-full rounded-[6px] object-cover sm:aspect-[4/5]', 960, 720)}
            <figcaption className="mt-2 font-mono text-[11px] text-muted"><a href={BIZ.velCredit} target="_blank" rel="noopener" className="hover:underline">{V.photo}. {V.credit}</a></figcaption>
          </figure>
          <MapFigure href={BIZ.directions} alt={V.mapAlt} pin={c.a11y.pin} credit={V.mapCredit} cta={c.directions} osm={BIZ.osm} img={asset} />
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const { c } = useI18n<Content>()
  const F = c.form
  const id = useId()
  const [t, setT] = useState(0)
  const [p, setP] = useState(0)
  const [a, setA] = useState('')
  const [m, setM] = useState('')
  const text = F.build({ t: F.types[t], p: F.props[p], a: a.trim(), m: m.trim() })
  const field = 'mt-2 block w-full rounded-[6px] border border-ink/20 bg-paper px-4 text-[16px] focus:border-accent focus:outline-none'
  const label = 'font-mono text-[12px] uppercase tracking-[0.08em] text-muted'
  return (
    <section id="contact" className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-[12.5px] uppercase tracking-[0.1em] text-accentink">{F.kicker}</p>
          <h2 className="h2 mt-3">{F.title}</h2>
          <p className="mt-4 text-[16.5px] leading-relaxed text-muted">{F.sub}</p>
        </div>
        <form className="grid gap-6 rounded-[6px] border border-ink/15 bg-white/60 p-5 sm:p-8 lg:col-span-8" onSubmit={(e) => { e.preventDefault(); window.open(waLink(BIZ.wa, text), '_blank', 'noopener') }}>
          <fieldset>
            <legend className={label}>{F.type}</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {F.types.map((x, i) => <label key={x} className={`tap inline-flex cursor-pointer items-center rounded-full border px-4 text-[15px] transition ${t === i ? 'border-accent bg-accent text-onaccent' : 'border-ink/20 hover:border-ink'}`}><input type="radio" name={`${id}t`} className="sr-only" checked={t === i} onChange={() => setT(i)} />{x}</label>)}
            </div>
          </fieldset>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block"><span className={label}>{F.prop}</span><select value={p} onChange={(e) => setP(+e.target.value)} className={`${field} h-[50px]`}>{F.props.map((x, i) => <option key={x} value={i}>{x}</option>)}</select></label>
            <label className="block"><span className={label}>{F.area}</span><input value={a} onChange={(e) => setA(e.target.value)} placeholder={F.areaPh} className={`${field} h-[50px]`} /></label>
          </div>
          <label className="block"><span className={label}>{F.msg}</span><textarea value={m} onChange={(e) => setM(e.target.value)} placeholder={F.msgPh} rows={3} className={`${field} py-3`} /></label>
          <details className="rounded-[6px] bg-soft/70 px-4 py-3 text-[14px]"><summary className="cursor-pointer font-mono text-[12px] uppercase tracking-[0.08em] text-muted">{F.preview}</summary><pre className="mt-2 whitespace-pre-wrap font-sans text-[14.5px]">{text}</pre></details>
          <div>
            <button type="submit" className="tap inline-flex h-[56px] w-full items-center justify-center gap-2 rounded-[6px] bg-accent px-7 text-[16px] font-semibold text-onaccent transition hover:brightness-110 sm:w-auto"><WaIcon className="h-[18px] w-[18px]" />{F.send}</button>
            <p className="mt-3 text-[13px] text-muted">{F.hint}</p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default function App() {
  const { c } = useI18n<Content>()
  const [open, setOpen] = useState(false)
  const btnRef = useRef<HTMLButtonElement>(null)
  const close = useCallback(() => setOpen(false), [])
  useMenu(open, close, btnRef)
  const waHi = waLink(BIZ.wa, c.form.build({ t: c.form.types[3], p: c.form.props[0], a: '', m: '' }))
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-onaccent">{c.a11y.skip}</a>
      <Header brand={<Brand />} nav={c.nav} langLabel={c.langLabel} langAria={c.langAria} cta={c.cta} ctaHref={waHi} menuOpen={open} onMenu={() => setOpen((o) => !o)} btnRef={btnRef} a11y={{ main: c.a11y.main, menuOpen: c.a11y.menuOpen, menuClose: c.a11y.menuClose }} />
      {open && (
        <MobileMenu nav={c.nav} close={close} label={c.a11y.mobile}>
          <a href="#contact" onClick={close} className="tap inline-flex h-[52px] items-center justify-center gap-2 rounded-[6px] bg-accentlt font-semibold text-deep">{c.hero.cta}<Arrow /></a>
          <div className="grid grid-cols-2 gap-3">
            <a href={waHi} target="_blank" rel="noopener" className="tap inline-flex items-center justify-center gap-2 rounded-[6px] border border-ondeep/25 font-semibold"><WaIcon className="h-4 w-4" />WhatsApp</a>
            <a href={`tel:${BIZ.tel}`} className="tap inline-flex items-center justify-center gap-2 rounded-[6px] border border-ondeep/25 font-semibold"><PhoneIcon className="h-4 w-4" />{c.call}</a>
          </div>
        </MobileMenu>
      )}
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero waHi={waHi} />
        <Services />
        <Start />
        <Ideas />
        <Visit />
        <Contact />
        <section id="faq" className="border-t border-ink/10">
          <div className="mx-auto grid max-w-[1320px] gap-8 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
            <h2 className="h2 lg:col-span-4">{c.faq.title}</h2>
            <Faq items={c.faq.items} className="lg:col-span-8" />
          </div>
        </section>
      </main>
      <Footer brand={<Brand small />} name={BIZ.name} address={BIZ.address} mapsHref={BIZ.maps} mapsLabel={c.visit.maps} nav={c.nav} t={c.footer}
        reach={<ul><li><a href={`tel:${BIZ.tel}`} className="inline-flex min-h-[40px] items-center hover:text-accentlt">{BIZ.phone}</a></li><li><a href={waHi} target="_blank" rel="noopener" className="inline-flex min-h-[40px] items-center gap-2 hover:text-accentlt"><WaIcon className="h-4 w-4" />WhatsApp</a></li></ul>} />
      <MobileBar label={c.a11y.bar} items={[{ href: '#contact', label: c.barCta, icon: 'wa', primary: true }, { href: `tel:${BIZ.tel}`, label: c.call, icon: 'phone' }, { href: BIZ.directions, label: c.directions, icon: 'pin', ext: true }]} />
    </>
  )
}
