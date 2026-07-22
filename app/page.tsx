const reviews = [
  {
    name: "Verena Collmann",
    text: "Nach weniger als 24 Stunden war die Kaffeemaschine repariert zurück. Freundlich, hilfsbereit und zu einem super Preis.",
  },
  {
    name: "Michel Tutnixzursache",
    text: "Morgens gebracht, abends abgeholt: repariert, gereinigt und absolut fair. Freundlich, schnell und unkompliziert.",
  },
  {
    name: "Hendrik Paul",
    text: "Top Leistung und schnelle Reparatur. Herr Becker ist noch ein Mann mit Klasse.",
  },
  {
    name: "Ingo",
    text: "Bester Service für Kaffeemaschinen aller Art, seit vielen Jahren bewährt.",
  },
  {
    name: "Nicole Hartmann",
    text: "Samstags gebracht, montags fertig. Preis-Leistung top und eine echte Empfehlung für Mainz.",
  },
];

const services = [
  "Fehlerdiagnose bei Kaffeevollautomaten",
  "Reparatur gängiger Defekte",
  "Wartung, Reinigung und Pflege",
  "Service für private Geräte und Büroautomaten",
  "Beratung zur Wirtschaftlichkeit der Reparatur",
  "Terminannahme nach telefonischer Vereinbarung",
];

const brands = [
  "Jura",
  "Saeco",
  "DeLonghi",
  "Miele",
  "Bosch",
  "Siemens",
  "Krups",
  "Melitta",
  "Nivona",
  "Gaggia",
];

const faqs = [
  {
    question: "Muss ich vorher anrufen?",
    answer:
      "Ja. Die Annahme erfolgt nach telefonischer Vereinbarung, damit Diagnose, Abgabe und Abholung gut planbar bleiben.",
  },
  {
    question: "Welche Marken werden repariert?",
    answer:
      "Viele gängige Hersteller, darunter Jura, Saeco, DeLonghi, Miele, Bosch, Siemens und weitere Marken nach Absprache.",
  },
  {
    question: "Lohnt sich eine Reparatur überhaupt noch?",
    answer:
      "Das wird im persönlichen Gespräch und nach Sichtung des Geräts realistisch eingeschätzt. Ziel ist eine faire Lösung statt unnötiger Kosten.",
  },
  {
    question: "Gibt es feste Öffnungszeiten?",
    answer:
      "Nein. Termine werden telefonisch vereinbart. Dadurch kann sich Herr Becker konzentriert um Reparaturen und Abholungen kümmern.",
  },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Elektromeisterbetrieb Michael Becker",
    image: "https://www.saeco-becker.de/images/coffee-set-on-sackcloth-near-coffee-beans-sm.jpg",
    url: "https://www.saeco-becker.de",
    telephone: "+496131215959",
    email: "info@saeco-becker.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Meixlerstraße 9",
      postalCode: "55120",
      addressLocality: "Mainz",
      addressCountry: "DE",
    },
    priceRange: "fair",
    foundingDate: "1986",
    description:
      "Elektromeisterbetrieb in Mainz mit Reparaturservice für Kaffeevollautomaten seit 1991.",
    areaServed: ["Mainz", "Wiesbaden", "Rheinhessen"],
    openingHours: "Mo-Su nach telefonischer Vereinbarung",
    makesOffer: [
      {
        "@type": "Service",
        name: "Reparatur von Kaffeevollautomaten",
      },
      {
        "@type": "Service",
        name: "Wartung und Reinigung von Kaffeevollautomaten",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="site-header">
        <a className="brand" href="#start" aria-label="Zur Startseite">
          <span className="brand-mark">MB</span>
          <span>
            <strong>Michael Becker</strong>
            <small>Elektromeisterbetrieb</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Hauptnavigation">
          <a href="#leistungen">Leistungen</a>
          <a href="#ablauf">Ablauf</a>
          <a href="#bewertungen">Bewertungen</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <a className="nav-call" href="tel:+496131215959">
          06131 - 21 59 59
        </a>

        <details className="mobile-menu">
          <summary aria-label="Menü öffnen">
            <span></span>
            <span></span>
            <span></span>
          </summary>
          <nav aria-label="Mobile Navigation">
            <a href="#leistungen">Leistungen</a>
            <a href="#ablauf">Ablauf</a>
            <a href="#bewertungen">Bewertungen</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </details>
      </header>

      <main id="start">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true">
            <img
              src="/images/coffee-beans-workbench.jpg"
              alt=""
              fetchPriority="high"
            />
          </div>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <p className="eyebrow">Meisterbetrieb in Mainz seit 1986</p>
            <h1 id="hero-title">
              Kaffeevollauto­maten repariert mit Erfahrung, Ruhe und Meisterhand.
            </h1>
            <p className="hero-copy">
              Michael Becker repariert seit 1991 Kaffeevollautomaten vieler
              gängiger Hersteller. Persönlich, fair und nach telefonischer
              Vereinbarung in Mainz-Mombach.
            </p>
            <div className="hero-actions" aria-label="Schnellkontakt">
              <a className="button primary" href="tel:+491792929121">
                Mobil anrufen
              </a>
              <a className="button secondary" href="mailto:info@saeco-becker.de">
                E-Mail senden
              </a>
            </div>
          </div>
          <aside className="hero-card" aria-label="Kurzinfos">
            <span>Reparaturservice seit</span>
            <strong>1991</strong>
            <p>Für Jura, Saeco, DeLonghi, Miele, Bosch und weitere Marken.</p>
          </aside>
        </section>

        <section className="trust-strip" aria-label="Vertrauensmerkmale">
          <div>
            <strong>38+ Jahre</strong>
            <span>Elektromeisterbetrieb</span>
          </div>
          <div>
            <strong>Persönlich</strong>
            <span>direkter Kontakt zum Fachmann</span>
          </div>
          <div>
            <strong>Nach Termin</strong>
            <span>Annahme und Abholung abgestimmt</span>
          </div>
          <div>
            <strong>Fair</strong>
            <span>reparieren, wenn es sinnvoll ist</span>
          </div>
        </section>

        <section className="section intro-grid">
          <div>
            <p className="eyebrow">Was Besucher sofort wissen müssen</p>
            <h2>Wenn der Kaffee ausfällt, zählt eine schnelle, ehrliche Einschätzung.</h2>
          </div>
          <div className="lead-panel">
            <p>
              Ob kein Kaffee mehr fließt, die Maschine undicht ist, das Mahlwerk
              streikt oder eine Reinigung überfällig ist: Hier geht es um
              fachgerechte Reparatur statt Austausch auf Verdacht.
            </p>
          </div>
        </section>

        <section className="section split" id="leistungen">
          <div className="section-heading sticky-heading">
            <p className="eyebrow">Leistungen</p>
            <h2>Konzentriert auf Kaffeevollautomaten.</h2>
            <p>
              Ein klarer Spezialservice für Geräte, die im Alltag zuverlässig
              funktionieren müssen.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service}>
                <span aria-hidden="true"></span>
                <h3>{service}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section brand-section" aria-labelledby="brands-title">
          <div className="section-heading centered">
            <p className="eyebrow">Viele gängige Hersteller</p>
            <h2 id="brands-title">Markenerfahrung, die man nicht googeln muss.</h2>
          </div>
          <div className="brand-logos" aria-label="Originalgrafiken der bestehenden Website">
            <img src="/images/jura.png" alt="Jura" />
            <img src="/images/miele.png" alt="Miele" />
            <img src="/images/saeco.png" alt="Saeco" />
          </div>
          <div className="brand-cloud" aria-label="Weitere Marken">
            {brands.map((brand) => (
              <span key={brand}>{brand}</span>
            ))}
          </div>
        </section>

        <section className="section process-section" id="ablauf">
          <div className="section-heading centered">
            <p className="eyebrow">Ablauf</p>
            <h2>Einfacher Weg zurück zum guten Kaffee.</h2>
          </div>
          <div className="process-grid">
            <article>
              <span>01</span>
              <h3>Anrufen</h3>
              <p>Problem kurz schildern und einen passenden Termin vereinbaren.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Gerät bringen</h3>
              <p>Der Automat wird vor Ort geprüft und realistisch eingeschätzt.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Reparatur klären</h3>
              <p>Wenn die Reparatur sinnvoll ist, wird sie fachgerecht umgesetzt.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Wieder genießen</h3>
              <p>Abholen, anschließen und den ersten Kaffee wieder ruhig trinken.</p>
            </article>
          </div>
        </section>

        <section className="section review-section" id="bewertungen">
          <div className="review-intro">
            <p className="eyebrow">5-Sterne-Stimmen</p>
            <h2>Empfohlen von Menschen, die ihren Kaffee schnell zurück wollten.</h2>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <figure className="review-card" key={review.name}>
                <div aria-label="5 von 5 Sternen" className="stars">
                  ★★★★★
                </div>
                <blockquote>{review.text}</blockquote>
                <figcaption>{review.name}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section faq-contact" id="kontakt">
          <div className="faq-list" aria-labelledby="faq-title">
            <p className="eyebrow">Antworten</p>
            <h2 id="faq-title">Häufige Fragen</h2>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>

          <aside className="contact-panel" aria-labelledby="contact-title">
            <p className="eyebrow">Kontakt</p>
            <h2 id="contact-title">Termin telefonisch vereinbaren.</h2>
            <div className="contact-actions">
              <a href="tel:+491792929121">0179 - 29 29 121</a>
              <a href="tel:+496131215959">06131 - 21 59 59</a>
              <a href="mailto:info@saeco-becker.de">info@saeco-becker.de</a>
            </div>
            <address>
              Elektromeisterbetrieb Michael Becker
              <br />
              Meixlerstraße 9
              <br />
              55120 Mainz
            </address>
            <p className="hours">Öffnungszeiten: nach telefonischer Vereinbarung</p>
            <a
              className="button map"
              href="https://goo.gl/maps/5QQtcqCbkEFHG3MQ7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Route öffnen
            </a>
          </aside>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>Michael Becker</strong>
          <span>Elektromeisterbetrieb · Reparaturservice für Kaffeevollautomaten</span>
        </div>
        <nav aria-label="Rechtliches">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
        </nav>
      </footer>
    </>
  );
}
