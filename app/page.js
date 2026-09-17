'use client';

import { useEffect } from 'react';

const clients = [
  { i: 'SV', n: 'SIVOOK' },
  { i: 'SP', n: 'SwissPay' },
  { i: 'NC', n: 'NeuroCare' },
  { i: 'AS', n: 'After Sxtn' },
  { i: 'TK', n: 'Tracklo' },
  { i: 'RB', n: 'R&B Plumbing' },
  { i: 'GE', n: 'Global Express' },
];

const marqueeClients = [...clients, ...clients];

const services = [
  { no: '01', name: 'Web Design & Development', desc: 'Beautiful, fast websites built to convert visitors into customers — from a single landing page to a full site.' },
  { no: '02', name: 'App Development', desc: 'Custom web and mobile apps that turn your idea into a product people actually use.' },
  { no: '03', name: 'Prototyping', desc: 'Clickable prototypes for founders validating an idea, testing demand, and pitching with confidence before committing to full build costs.' },
  { no: '04', name: 'SEO & Copywriting', desc: 'Search-ready words that get you found — and read like a human wrote them, because one did.' },
  { no: '05', name: 'Quality Assurance', desc: 'Rigorous testing so what you launch works everywhere, for everyone, every time.' },
];

const work = [
  { name: 'The Vill Collective', status: 'Live', tags: ['Website', 'Community'], url: 'https://www.thevillcollective.org/', image: '/assets/the-vill-collective.svg' },
  { name: 'After Sxtn', status: 'Live', tags: ['Consumer app'], url: 'https://www.aftersxtn.com/', image: '/assets/AfterSxtn.png' },
  { name: 'SIVOOK', status: 'Completed', tags: ['Website', 'SEO'], url: 'https://www.sivook.co.uk/', image: '/assets/sivook.png' },
  { name: 'SwissPay Africa', status: 'Completed', tags: ['Website', 'SEO'], url: 'https://www.swisspay.africa/', image: '/assets/swisspay.png' },
  { name: 'NeuroCare AI', status: 'Completed', tags: ['Website'], url: 'https://neurocareai.co.uk/', image: '/assets/neurocare-ai.png' },
  { name: 'Global Express', status: 'Completed', tags: ['Website', 'Automation'], url: 'https://www.globalexpresstravelclinic.com/', image: '/assets/global-express.png' },
];

const products = [
  { name: 'After Sxtn', category: 'In-house · Consumer app', desc: 'A product we designed, built and launched entirely in-house — the clearest proof of what the studio can do end to end.', cta: 'Explore After Sxtn', stage: 'Live', image: '/assets/in-house-aftersxtn.png' },
];

const tiers = [
  {
    name: 'Launch Page',
    price: '£250',
    tag: 'Fastest',
    desc: "Perfect if you're just getting started and need a professional presence online, fast.",
    features: [
      'A beautiful one-page website or coming-soon page',
      'Looks great on phones, tablets and desktops',
      'Your domain name connected and fully set up',
      'Live within one week',
    ],
    goodFor: 'New businesses, product launches, events, and anyone who needs to be online yesterday.',
  },
  {
    name: 'Business Website',
    price: '£850',
    tag: 'Most chosen',
    desc: 'A proper home for your business that helps customers find you and get in touch.',
    features: [
      'Up to 5 pages (Home, About, Services, Contact and more)',
      'Contact forms that land straight in your inbox',
      'Search-engine basics done properly so Google can find you',
      'Google Analytics set up so you can see who’s visiting',
      'Domain and hosting fully configured',
    ],
    goodFor: 'Trades, clinics, studios, consultants and local businesses ready to look the part.',
  },
  {
    name: 'MVP / Web App',
    price: '£3,500',
    tag: 'Build with us',
    desc: 'Got a bigger idea? Let’s build the first working version of your product — without the agency price tag.',
    features: [
      'A custom web application built around your idea',
      'User accounts, databases and the features your product needs',
      'AI-accelerated development, so you launch in weeks, not months',
      'Deployed, live and ready for real users',
      'Guidance on what to build first (and what to skip for now)',
    ],
    goodFor: 'Founders who want to test an idea with real customers before investing heavily.',
  },
];

const addons = [
  { name: 'Care Plan — updates, backups & small monthly changes', price: '£60/mo' },
  { name: 'Extra website pages', price: '£120/page' },
  { name: 'Website copywriting', price: 'From £150' },
  { name: 'Monthly analytics report in plain English', price: '£75/mo' },
  { name: 'Logo and basic branding', price: 'From £200' },
];

const docHtml = `
<div style="background:var(--bg);color:var(--ink);font-family:'Schibsted Grotesk',system-ui,sans-serif;overflow-x:hidden">
  <header class="site-header" style="position:fixed;top:0;left:0;right:0;z-index:50;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);background:color-mix(in srgb, var(--bg) 92%, rgba(255,255,255,0.96));border-bottom:1px solid var(--line)">
    <div class="site-header-inner" style="max-width:1200px;margin:0 auto;padding:16px 24px;display:flex;align-items:center;justify-content:space-between;gap:24px">
      <a href="#top" style="display:flex;align-items:center;text-decoration:none">
        <img src="/assets/kaido-wordmark-evergreen.png" alt="Kaido Co" style="height:26px;width:auto;display:block"/>
      </a>
      <nav class="site-nav" style="align-items:center;gap:30px;font-size:15px;font-weight:500">
        <a href="#work" style="text-decoration:none;opacity:0.85">Work</a>
        <a href="#products" style="text-decoration:none;opacity:0.85">Products</a>
        <a href="#services" style="text-decoration:none;opacity:0.85">Services</a>
        <a href="#pricing" style="text-decoration:none;opacity:0.85">Pricing</a>
        <a href="#studio" style="text-decoration:none;opacity:0.85">Studio</a>
      </nav>
      <a class="site-cta" href="#contact" style="text-decoration:none;font-size:14px;font-weight:600;padding:10px 18px;background:var(--ink);color:var(--bg);border-radius:999px">Let's talk</a>
    </div>
  </header>

  <main id="top">
    <section data-reveal style="max-width:1200px;margin:0 auto;padding:clamp(56px,9vw,120px) 24px clamp(40px,6vw,72px)">
      <div style="font-family:'JetBrains Mono',monospace;font-size:13px;letter-spacing:0.14em;text-transform:uppercase;color:var(--muted);margin-bottom:28px;display:flex;align-items:center;gap:12px">
        <span style="width:8px;height:8px;background:var(--accent);border-radius:2px;display:inline-block;transform:rotate(45deg)"></span>
        Design & product studio — Reading, UK
      </div>
      <h1 style="margin:0;font-size:clamp(40px,7vw,88px);line-height:0.98;letter-spacing:-0.03em;font-weight:700;max-width:16ch">We design, build and ship <span style="color:var(--accent)">— for clients and ourselves.</span></h1>
      <p style="margin:32px 0 0;font-size:clamp(17px,2vw,21px);line-height:1.5;color:var(--muted);max-width:56ch">Kaido Co helps non-tech founders get seen online through beautiful websites, custom apps and SEO-led copy — and pours the very same craft into products we build in-house.</p>
      <div style="display:flex;flex-wrap:wrap;gap:14px;margin-top:40px">
        <a href="#work" style="text-decoration:none;font-size:15px;font-weight:600;padding:15px 26px;background:var(--accent);color:var(--accent-ink);border-radius:999px">See the work</a>
        <a href="#products" style="text-decoration:none;font-size:15px;font-weight:600;padding:15px 26px;background:transparent;color:var(--ink);border:1px solid var(--ink);border-radius:999px">Meet our products</a>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:clamp(28px,5vw,72px);margin-top:clamp(48px,7vw,88px);padding-top:32px;border-top:1px solid var(--line)">
        <div>
          <div style="font-size:clamp(28px,3.5vw,40px);font-weight:700;letter-spacing:-0.02em">9+</div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:var(--muted);margin-top:6px">Projects delivered</div>
        </div>
        <div>
          <div style="font-size:clamp(28px,3.5vw,40px);font-weight:700;letter-spacing:-0.02em">1</div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:var(--muted);margin-top:6px">In-house product</div>
        </div>
        <div>
          <div style="font-size:clamp(28px,3.5vw,40px);font-weight:700;letter-spacing:-0.02em">5</div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:var(--muted);margin-top:6px">Web · App · Prototype · SEO · QA</div>
        </div>
      </div>
    </section>

    <section data-reveal style="padding:20px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);overflow:hidden">
      <div style="max-width:1200px;margin:0 auto 16px;padding:0 24px;font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:var(--muted)">Trusted by founders & small businesses</div>
      <div style="overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)">
        <div style="display:flex;gap:14px;width:max-content;animation:kaidoMarquee var(--marquee-dur) linear infinite">
          ${marqueeClients.map((c) => `
            <div style="display:flex;align-items:center;gap:12px;padding:12px 22px;border:1px solid var(--line);border-radius:999px;background:var(--panel);white-space:nowrap">
              <span style="width:30px;height:30px;border-radius:8px;background:var(--ink);color:var(--bg);display:grid;place-items:center;font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:500">${c.i}</span>
              <span style="font-size:16px;font-weight:600;letter-spacing:-0.01em">${c.n}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section id="studio" data-reveal style="max-width:1200px;margin:0 auto;padding:clamp(64px,9vw,120px) 24px">
      <div style="font-family:'JetBrains Mono',monospace;font-size:13px;letter-spacing:0.14em;text-transform:uppercase;color:var(--muted);margin-bottom:22px">Two sides, one studio</div>
      <h2 style="margin:0 0 clamp(40px,5vw,64px);font-size:clamp(30px,4.6vw,56px);line-height:1.05;letter-spacing:-0.025em;font-weight:700;max-width:20ch">The studio that builds for clients — and backs itself.</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px">
        <div style="border:1px solid var(--line);border-radius:20px;padding:clamp(28px,3.5vw,44px);background:var(--panel);display:flex;flex-direction:column">
          <div style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:var(--accent);margin-bottom:18px">◆ Client work</div>
          <h3 style="margin:0 0 14px;font-size:clamp(22px,2.6vw,30px);letter-spacing:-0.02em;font-weight:700">We partner with founders to launch.</h3>
          <p style="margin:0 0 24px;font-size:16px;line-height:1.55;color:var(--muted)">From a rough idea to a site that converts — websites, apps and search-ready content, built to make your business impossible to miss.</p>
          <div style="margin-top:auto;display:flex;flex-wrap:wrap;gap:8px">
            <span style="font-size:13px;padding:7px 13px;border:1px solid var(--line);border-radius:999px">Websites</span>
            <span style="font-size:13px;padding:7px 13px;border:1px solid var(--line);border-radius:999px">Apps</span>
            <span style="font-size:13px;padding:7px 13px;border:1px solid var(--line);border-radius:999px">SEO</span>
            <span style="font-size:13px;padding:7px 13px;border:1px solid var(--line);border-radius:999px">QA</span>
          </div>
        </div>
        <div style="border:1px solid var(--line);border-radius:20px;padding:clamp(28px,3.5vw,44px);background:var(--ink);color:var(--bg);display:flex;flex-direction:column">
          <div style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:var(--accent);margin-bottom:18px">◆ Our products</div>
          <h3 style="margin:0 0 14px;font-size:clamp(22px,2.6vw,30px);letter-spacing:-0.02em;font-weight:700">When we spot a gap, we build it.</h3>
          <p style="margin:0 0 24px;font-size:16px;line-height:1.55;opacity:0.72">After Sxtn is made with the exact standard we bring to your work — proof we practise what we ship.</p>
          <div style="margin-top:auto;display:flex;flex-wrap:wrap;gap:8px">
            <span style="font-size:13px;padding:7px 13px;border:1px solid rgba(244,240,233,0.22);border-radius:999px">After Sxtn</span>
          </div>
        </div>
      </div>
    </section>

    <section id="services" data-reveal style="border-top:1px solid var(--line)">
      <div style="max-width:1200px;margin:0 auto;padding:clamp(64px,9vw,120px) 24px">
        <div style="display:flex;flex-wrap:wrap;align-items:end;justify-content:space-between;gap:20px;margin-bottom:clamp(40px,5vw,64px)">
          <div>
            <div style="font-family:'JetBrains Mono',monospace;font-size:13px;letter-spacing:0.14em;text-transform:uppercase;color:var(--muted);margin-bottom:22px">What we do</div>
            <h2 style="margin:0;font-size:clamp(30px,4.6vw,56px);line-height:1.05;letter-spacing:-0.025em;font-weight:700;max-width:16ch">Everything to get your business seen.</h2>
          </div>
          <a href="#contact" style="text-decoration:none;font-size:15px;font-weight:600;padding:13px 22px;border:1px solid var(--ink);border-radius:999px;white-space:nowrap">Start a project</a>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0;border-top:1px solid var(--line)">
          ${services.map((s) => `
            <div style="padding:clamp(28px,3vw,40px) clamp(24px,2vw,32px);border-bottom:1px solid var(--line);border-right:1px solid var(--line);display:flex;flex-direction:column;min-height:240px">
              <div style="font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--accent);margin-bottom:auto">${s.no}</div>
              <h3 style="margin:20px 0 12px;font-size:clamp(20px,2.2vw,25px);letter-spacing:-0.02em;font-weight:700;line-height:1.1">${s.name}</h3>
              <p style="margin:0;font-size:15px;line-height:1.5;color:var(--muted)">${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section id="work" data-reveal style="border-top:1px solid var(--line)">
      <div style="max-width:1200px;margin:0 auto;padding:clamp(64px,9vw,120px) 24px">
        <div style="display:flex;flex-wrap:wrap;align-items:end;justify-content:space-between;gap:20px;margin-bottom:clamp(40px,5vw,56px)">
          <div>
            <div style="font-family:'JetBrains Mono',monospace;font-size:13px;letter-spacing:0.14em;text-transform:uppercase;color:var(--muted);margin-bottom:22px">Selected work</div>
            <h2 style="margin:0;font-size:clamp(30px,4.6vw,56px);line-height:1.05;letter-spacing:-0.025em;font-weight:700;max-width:16ch">Real businesses, shipped.</h2>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:clamp(20px,2.5vw,32px)">
          ${work.map((w) => `
            <a href="${w.url}" target="_blank" rel="noreferrer noopener" style="text-decoration:none;display:flex;flex-direction:column;gap:16px;">
              <div style="position:relative;aspect-ratio:4/3;border-radius:16px;border:1px solid var(--line);background-color:var(--panel);display:grid;place-items:center;overflow:hidden">
                ${w.image ? `<img src="${w.image}" alt="${w.name} logo" style="max-width:100%;max-height:100%;object-fit:contain;"/>` : ''}
                <span style="position:absolute;top:12px;left:12px;font-family:'JetBrains Mono',monospace;font-size:11px;padding:5px 11px;border-radius:999px;background:var(--ink);color:var(--bg)">${w.status}</span>
              </div>
              <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px">
                <div>
                  <h3 style="margin:0 0 8px;font-size:20px;letter-spacing:-0.02em;font-weight:700">${w.name}</h3>
                  <div style="display:flex;flex-wrap:wrap;gap:6px">
                    ${w.tags.map((t) => `<span style="font-size:12px;padding:4px 10px;border:1px solid var(--line);border-radius:999px;color:var(--muted)">${t}</span>`).join('')}
                  </div>
                </div>
                <span style="font-size:20px;color:var(--muted);line-height:1">↗</span>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <section id="products" style="background:var(--prod-bg);color:var(--prod-ink)">
      <div style="max-width:1200px;margin:0 auto;padding:clamp(64px,9vw,120px) 24px">
        <div style="font-family:'JetBrains Mono',monospace;font-size:13px;letter-spacing:0.14em;text-transform:uppercase;color:var(--accent);margin-bottom:22px">Built by Kaido Co</div>
        <h2 style="margin:0 0 16px;font-size:clamp(30px,4.6vw,56px);line-height:1.05;letter-spacing:-0.025em;font-weight:700;max-width:18ch">Product we made — and stand behind.</h2>
        <p style="margin:0 0 clamp(44px,5vw,64px);font-size:clamp(17px,2vw,20px);line-height:1.5;color:var(--prod-muted);max-width:52ch">The same team, the same craft. One product born in-house at the studio.</p>
        <div style="display:flex;flex-direction:column;gap:clamp(24px,3vw,40px)">
          ${products.map((p) => `
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:clamp(24px,3vw,48px);align-items:center;border:1px solid var(--prod-line);border-radius:24px;padding:clamp(24px,3vw,44px);background:color-mix(in srgb,var(--prod-ink) 4%,transparent)">
              <div>
                <div style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:var(--accent);margin-bottom:16px">${p.category}</div>
                <h3 style="margin:0 0 14px;font-size:clamp(26px,3vw,38px);letter-spacing:-0.025em;font-weight:700">${p.name}</h3>
                <p style="margin:0 0 26px;font-size:16px;line-height:1.55;color:var(--prod-muted);max-width:44ch">${p.desc}</p>
                <div style="display:flex;flex-wrap:wrap;gap:12px">
                  <a href="#contact" style="text-decoration:none;font-size:14px;font-weight:600;padding:12px 22px;background:var(--accent);color:var(--accent-ink);border-radius:999px">${p.cta}</a>
                  <span style="font-family:'JetBrains Mono',monospace;font-size:12px;padding:12px 0;color:var(--prod-muted)">${p.stage}</span>
                </div>
              </div>
              <div style="aspect-ratio:16/10;border-radius:16px;border:1px solid var(--prod-line);background-color:color-mix(in srgb,var(--prod-ink) 6%,transparent);background-image:repeating-linear-gradient(45deg,var(--prod-line) 0 11px,transparent 11px 22px);display:grid;place-items:center;overflow:hidden">
                ${p.image ? `<img src="${p.image}" alt="${p.name} screenshot" style="width:100%;height:100%;object-fit:contain;"/>` : `<span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:var(--prod-muted);background:var(--prod-bg);padding:6px 12px;border-radius:999px;border:1px solid var(--prod-line)">▦ ${p.name} — screens</span>`}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section id="pricing" style="border-top:1px solid var(--line)">
      <div style="max-width:1200px;margin:0 auto;padding:clamp(64px,9vw,120px) 24px">
        <div style="font-family:'JetBrains Mono',monospace;font-size:13px;letter-spacing:0.14em;text-transform:uppercase;color:var(--muted);margin-bottom:22px">Pricing</div>
        <h2 style="margin:0 0 20px;font-size:clamp(30px,4.6vw,56px);line-height:1.03;letter-spacing:-0.03em;font-weight:700;max-width:16ch">Simple, honest pricing.</h2>
        <p style="margin:0 0 10px;font-size:clamp(17px,2vw,20px);line-height:1.5;color:var(--muted);max-width:60ch">No confusing quotes. No hidden fees. Just clear packages designed to get your idea online — whether that's a single page or a full product.</p>
        <p style="margin:0 0 clamp(44px,5vw,64px);font-size:15px;line-height:1.55;color:var(--muted);max-width:60ch">Every price is a starting point. Once we chat about what you need, you'll get a fixed quote before any work begins — so there are no surprises.</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:clamp(20px,2vw,24px)">
          ${tiers.map((t) => `
            <div style="display:flex;flex-direction:column;border:1px solid var(--line);border-radius:20px;padding:clamp(26px,2.6vw,36px);background:var(--panel)">
              <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:18px">
                <h3 style="margin:0;font-size:clamp(19px,2vw,23px);letter-spacing:-0.02em;font-weight:700">${t.name}</h3>
                <span style="font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:var(--accent);border:1px solid var(--accent);border-radius:999px;padding:5px 10px;white-space:nowrap">${t.tag}</span>
              </div>
              <div style="display:flex;align-items:baseline;gap:8px;margin-bottom:16px">
                <span style="font-size:14px;color:var(--muted)">From</span>
                <span style="font-size:clamp(34px,4vw,44px);font-weight:700;letter-spacing:-0.03em">${t.price}</span>
              </div>
              <p style="margin:0 0 24px;font-size:15px;line-height:1.5;color:var(--muted)">${t.desc}</p>
              <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:26px">
                ${t.features.map((f) => `
                  <div style="display:flex;align-items:flex-start;gap:11px;font-size:15px;line-height:1.4">
                    <span style="flex:none;width:18px;height:18px;margin-top:2px;border-radius:999px;background:var(--accent);color:var(--accent-ink);display:grid;place-items:center;font-size:11px;font-weight:700">✓</span>
                    <span>${f}</span>
                  </div>
                `).join('')}
              </div>
              <div style="margin-top:auto;padding-top:20px;border-top:1px solid var(--line)">
                <div style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:0.06em;text-transform:uppercase;color:var(--accent);margin-bottom:8px">Great for</div>
                <p style="margin:0;font-size:14px;line-height:1.5;color:var(--muted)">${t.goodFor}</p>
                <a href="#contact" style="display:block;text-align:center;text-decoration:none;font-size:15px;font-weight:600;padding:13px 20px;background:var(--accent);color:var(--accent-ink);border-radius:999px">Start with ${t.name}</a>
              </div>
            </div>
          `).join('')}
        </div>
        <div style="margin-top:clamp(20px,2vw,24px);border:1px solid var(--line);border-radius:20px;background:var(--ink);color:var(--bg);overflow:hidden">
          <div style="padding:clamp(24px,2.6vw,32px) clamp(24px,2.6vw,36px) 8px">
            <div style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:var(--accent);margin-bottom:6px">Add-ons</div>
            <p style="margin:0;font-size:15px;line-height:1.5;color:rgba(244,240,233,0.7)">Bolt any of these onto a package whenever you need them.</p>
          </div>
          <div style="padding:8px clamp(24px,2.6vw,36px) clamp(20px,2vw,28px)">
            ${addons.map((a) => `
              <div style="display:flex;align-items:center;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--prod-line)">
                <span style="font-size:15px;line-height:1.4">${a.name}</span>
                <span style="font-family:'JetBrains Mono',monospace;font-size:15px;font-weight:500;white-space:nowrap;color:var(--bg)">${a.price}</span>
              </div>
            `).join('')}
          </div>
        </div>
        <div style="margin-top:clamp(44px,5vw,64px);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:24px;padding:clamp(28px,3vw,40px);border:1px dashed var(--muted);border-radius:20px">
          <div style="max-width:52ch">
            <h3 style="margin:0 0 10px;font-size:clamp(20px,2.4vw,28px);letter-spacing:-0.02em;font-weight:700">Not sure which one you need?</h3>
            <p style="margin:0;font-size:16px;line-height:1.55;color:var(--muted)">That's completely normal — most people aren't. That's exactly why we start with a free, no-pressure chat. Tell us about your idea and we'll tell you honestly what you need (and what you don't).</p>
          </div>
          <a href="#contact" style="text-decoration:none;font-size:15px;font-weight:600;padding:15px 26px;background:var(--accent);color:var(--accent-ink);border-radius:999px;white-space:nowrap">Book a free chat</a>
        </div>
      </div>
    </section>

    <section style="border-bottom:1px solid var(--line)">
      <div style="max-width:1000px;margin:0 auto;padding:clamp(64px,9vw,120px) 24px;text-align:center">
        <div style="font-family:'JetBrains Mono',monospace;font-size:13px;letter-spacing:0.14em;text-transform:uppercase;color:var(--accent);margin-bottom:28px">◆ Client, in their words</div>
        <blockquote style="margin:0;font-size:clamp(24px,3.4vw,42px);line-height:1.2;letter-spacing:-0.02em;font-weight:600">"Kaido Co listened before they built. They turned our scattered ideas into a website that actually converts."</blockquote>
        <div style="margin-top:32px;font-size:16px;color:var(--muted)">Sarah L — Founder</div>
      </div>
    </section>

    <section id="contact" style="max-width:1200px;margin:0 auto;padding:clamp(64px,9vw,120px) 24px;background:#E6FAEF;border-radius:36px;border:1px solid rgba(41,135,86,0.18);color:#092F2E">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:clamp(40px,6vw,80px)">
        <div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:13px;letter-spacing:0.14em;text-transform:uppercase;color:#235047;margin-bottom:22px">Contact</div>
          <h2 style="margin:0 0 20px;font-size:clamp(30px,4.6vw,56px);line-height:1.02;letter-spacing:-0.03em;font-weight:700;color:#092F2E">Ready to get your business seen?</h2>
          <p style="margin:0 0 32px;font-size:clamp(17px,2vw,20px);line-height:1.5;color:#31514B;max-width:44ch">Clear brief or just a rough idea — we'd love to hear it. We reply within two working days.</p>
          <div style="display:flex;align-items:center;gap:12px;font-family:'JetBrains Mono',monospace;font-size:13px;color:#31514B">
            <span style="width:8px;height:8px;border-radius:999px;background:var(--accent);display:inline-block"></span>
            Two working days — typical response
          </div>
        </div>
        <form action="https://formspree.io/f/mnjerqbj" method="POST" style="display:flex;flex-direction:column;gap:16px;background:#ffffff;border-radius:28px;padding:28px;box-shadow:0 24px 60px rgba(0,0,0,0.08)">
          <input type="hidden" name="_subject" value="New enquiry from Kaido Co website" />
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
            <label style="display:flex;flex-direction:column;gap:8px;font-size:13px;font-weight:600">Name
              <input name="name" type="text" placeholder="Your name" style="font-family:inherit;font-size:15px;padding:14px 16px;border:1px solid var(--line);border-radius:12px;background:var(--panel);color:var(--ink);outline:none" required />
            </label>
            <label style="display:flex;flex-direction:column;gap:8px;font-size:13px;font-weight:600">Email
              <input name="email" type="email" placeholder="you@company.com" style="font-family:inherit;font-size:15px;padding:14px 16px;border:1px solid var(--line);border-radius:12px;background:var(--panel);color:var(--ink);outline:none" required />
            </label>
          </div>
          <label style="display:flex;flex-direction:column;gap:8px;font-size:13px;font-weight:600">Service
            <select name="service" style="font-family:inherit;font-size:15px;padding:14px 16px;border:1px solid var(--line);border-radius:12px;background:var(--panel);color:var(--ink);outline:none">
              <option>Website Design & Development</option>
              <option>App Development</option>
              <option>SEO & Copywriting</option>
              <option>Quality Assurance</option>
              <option>Other</option>
            </select>
          </label>
          <label style="display:flex;flex-direction:column;gap:8px;font-size:13px;font-weight:600">Tell us about your project
            <textarea name="message" rows="4" placeholder="A few lines on what you're building..." style="font-family:inherit;font-size:15px;padding:14px 16px;border:1px solid var(--line);border-radius:12px;background:var(--panel);color:var(--ink);outline:none;resize:vertical" required></textarea>
          </label>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
            <label style="display:flex;flex-direction:column;gap:8px;font-size:13px;font-weight:600">Budget
              <select name="budget" style="font-family:inherit;font-size:15px;padding:14px 16px;border:1px solid var(--line);border-radius:12px;background:var(--panel);color:var(--ink);outline:none">
                <option>Under £750</option>
                <option>£750–£1,500</option>
                <option>£1,500–£3,500</option>
                <option>£3,500+</option>
                <option>I'm not sure yet</option>
              </select>
            </label>
            <label style="display:flex;flex-direction:column;gap:8px;font-size:13px;font-weight:600">Timeline
              <select name="timeline" style="font-family:inherit;font-size:15px;padding:14px 16px;border:1px solid var(--line);border-radius:12px;background:var(--panel);color:var(--ink);outline:none">
                <option>Next month</option>
                <option>1–2 months</option>
                <option>3+ months</option>
                <option>Flexible / not sure</option>
              </select>
            </label>
          </div>
          <button
            type="submit"
            style="font-family:inherit;font-size:15px;font-weight:600;padding:16px 20px;border:none;border-radius:14px;background:var(--ink);color:var(--bg);cursor:pointer;transition:transform .2s ease, background .2s ease"
            onmouseover="this.style.background='#1B423D';this.style.transform='translateY(-1px)'"
            onmouseout="this.style.background='var(--ink)';this.style.transform='translateY(0)'"
          >Send message</button>
        </form>
      </div>
    </section>

    <footer style="border-top:1px solid var(--line);background:var(--panel)">
      <div style="max-width:1200px;margin:0 auto;padding:clamp(48px,6vw,72px) 24px 40px">
        <div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:32px;align-items:flex-start">
          <div style="max-width:32ch">
            <a href="#top" style="display:inline-flex;align-items:center;text-decoration:none;margin-bottom:16px">
              <img src="/assets/kaido-wordmark-evergreen.png" alt="Kaido Co" style="height:26px;width:auto;display:block" />
            </a>
            <p style="margin:0;font-size:15px;line-height:1.5;color:var(--muted)">A design & product studio for non-tech founders. Websites, apps and SEO — plus a few products of our own.</p>
          </div>
          <div style="display:flex;gap:clamp(32px,5vw,72px);flex-wrap:wrap">
            <div style="display:flex;flex-direction:column;gap:12px">
              <div style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);margin-bottom:2px">Studio</div>
              <a href="#work" style="text-decoration:none;font-size:15px">Work</a>
              <a href="#services" style="text-decoration:none;font-size:15px">Services</a>
              <a href="#contact" style="text-decoration:none;font-size:15px">Contact</a>
            </div>
            <div style="display:flex;flex-direction:column;gap:12px">
              <div style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);margin-bottom:2px">Products</div>
              <a href="#products" style="text-decoration:none;font-size:15px">After Sxtn</a>
            </div>
          </div>
        </div>
        <div style="margin-top:clamp(40px,5vw,64px);padding-top:24px;border-top:1px solid var(--line);display:flex;flex-wrap:wrap;gap:12px;justify-content:space-between;font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--muted)">
          <span>© 2026 Kaido Co — Reading, UK</span>
          <span>Built the way we'd build yours.</span>
        </div>
      </div>
    </footer>
  </main>
</div>
`;

export default function HomePage() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: docHtml }} />;
}
