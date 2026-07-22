import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung des Elektromeisterbetriebs Michael Becker in Mainz.",
  alternates: {
    canonical: "/datenschutz",
  },
};

export default function DatenschutzPage() {
  return (
    <main className="legal-main">
      <a className="back-link" href="/">
        Zurück zur Startseite
      </a>
      <p className="eyebrow">Datenschutz</p>
      <h1>Datenschutzerklärung</h1>

      <section className="legal-card">
        <h2>1. Verantwortlicher</h2>
        <p>
          Elektromeisterbetrieb Michael Becker
          <br />
          Meixlerstraße 9
          <br />
          55120 Mainz
          <br />
          Deutschland
        </p>
        <p>
          Telefon: <a href="tel:+496131215959">06131 - 21 59 59</a>
          <br />
          E-Mail:{" "}
          <a href="mailto:info@saeco-becker.de">info@saeco-becker.de</a>
        </p>

        <h2>2. Allgemeine Hinweise</h2>
        <p>
          Personenbezogene Daten werden auf dieser Website nur verarbeitet,
          soweit dies zur Bereitstellung eines funktionsfähigen,
          nutzerfreundlichen und sicheren Internetauftritts erforderlich ist oder
          Sie selbst Kontakt aufnehmen.
        </p>

        <h2>3. Server-Logfiles</h2>
        <p>
          Beim Aufruf dieser Website werden durch den Hosting-Anbieter technisch
          erforderliche Daten verarbeitet. Dazu können Browsertyp,
          Betriebssystem, Referrer-URL, aufgerufene Seite, Uhrzeit des Zugriffs
          und IP-Adresse gehören. Die Verarbeitung erfolgt auf Grundlage von Art.
          6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der sicheren
          und stabilen Bereitstellung der Website.
        </p>

        <h2>4. Kontaktaufnahme</h2>
        <p>
          Wenn Sie per Telefon oder E-Mail Kontakt aufnehmen, werden Ihre Angaben
          zur Bearbeitung der Anfrage verarbeitet. Rechtsgrundlage ist Art. 6
          Abs. 1 lit. b DSGVO, sofern die Anfrage auf einen Vertrag oder
          vorvertragliche Maßnahmen gerichtet ist, andernfalls Art. 6 Abs. 1
          lit. f DSGVO.
        </p>

        <h2>5. Keine Cookies, kein Tracking</h2>
        <p>
          Diese Website setzt keine Analyse-Cookies, keine Werbe-Cookies und
          keine eingebetteten Tracking-Dienste ein. Externe Dienste werden nicht
          automatisch geladen.
        </p>

        <h2>6. Externe Links</h2>
        <p>
          Links zu externen Angeboten, etwa zur Routenplanung, öffnen erst nach
          Ihrer aktiven Auswahl. Für die Datenverarbeitung auf externen Websites
          ist der jeweilige Anbieter verantwortlich.
        </p>

        <h2>7. Ihre Rechte</h2>
        <p>
          Sie haben nach Maßgabe der DSGVO das Recht auf Auskunft, Berichtigung,
          Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie
          Widerspruch gegen bestimmte Verarbeitungen. Außerdem haben Sie das
          Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
        </p>

        <h2>8. Speicherdauer</h2>
        <p>
          Personenbezogene Daten werden gelöscht, sobald der Zweck der
          Verarbeitung entfällt und keine gesetzlichen Aufbewahrungspflichten
          entgegenstehen.
        </p>

        <h2>9. Stand</h2>
        <p>Diese Datenschutzerklärung wurde zuletzt am 22. Juli 2026 aktualisiert.</p>
      </section>
    </main>
  );
}
