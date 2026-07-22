import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum des Elektromeisterbetriebs Michael Becker in Mainz.",
  alternates: {
    canonical: "/impressum",
  },
};

export default function ImpressumPage() {
  return (
    <main className="legal-main">
      <a className="back-link" href="/">
        Zurück zur Startseite
      </a>
      <p className="eyebrow">Rechtliches</p>
      <h1>Impressum</h1>

      <section className="legal-card" aria-label="Anbieterkennzeichnung">
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          Elektromeisterbetrieb Michael Becker
          <br />
          Meixlerstraße 9
          <br />
          55120 Mainz
          <br />
          Deutschland
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: <a href="tel:+496131215959">06131 - 21 59 59</a>
          <br />
          Fax: 06131 - 21 59 69
          <br />
          Mobil: <a href="tel:+491792929121">0179 - 29 29 121</a>
          <br />
          E-Mail:{" "}
          <a href="mailto:info@saeco-becker.de">info@saeco-becker.de</a>
        </p>

        <h2>Steuerliche Angaben</h2>
        <p>Steuernummer: 2600964508, Finanzamt Mainz Mitte</p>

        <h2>Verantwortlich für den Inhalt</h2>
        <p>
          Michael Becker
          <br />
          Meixlerstraße 9
          <br />
          55120 Mainz
        </p>

        <h2>Streitbeilegung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . Wir sind nicht verpflichtet und nicht bereit, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach
          den allgemeinen Gesetzen verantwortlich. Verpflichtungen zur Entfernung
          oder Sperrung der Nutzung von Informationen nach den allgemeinen
          Gesetzen bleiben unberührt.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Diese Website enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte
          übernehmen wir keine Gewähr.
        </p>
      </section>
    </main>
  );
}
