"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { push as Menu } from "react-burger-menu";
import Hamburger from "hamburger-react";

import email from "@/app/json/email.json";
import animationSearch from "@/app/json/animation_lngkmgdc.json";
import padlock from "@/app/json/padlock.json";
import paintPalette from "@/app/json/paint-palette.json";
import robot from "@/app/json/robot.json";
import search from "@/app/json/search.json";
import Image from "next/image";
import backImg from "@/app/images/background.png";
import QAanimation from "@/app/json/QAanimation.json";

export default function Home() {
  const [state, handleSubmit] = useForm("xrgwowoj");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div id="page-wrap">
      {/* hier kommt hamburger hin */}
      {/* Rechtschreibung kontrolliert */}
      <section className="hero-section">
        <div className="hero-section-content">
          <h1>Erstellen Sie Ihre Traumwebsite mit uns</h1>
          <p>Ihre All-in-One-Lösung für beeindruckende Websites</p>
          <a
            href="#message-section"
            className="hbtn hb-border-left-br2 gesprächButton"
          >
            Vereinbaren Sie Beratungsgespräch
          </a>
        </div>
        <div className="hero-section-img">
          <Image src={backImg} alt="websites" />
        </div>
      </section>
      {/* Rechtschreibung kontrolliert */}
      <section className="description-section">
        <div className="description-section-header">
          <h1 className="underlined">Websiten leicht gemacht</h1>
          <ul>
            <li>
              Ihre persönliche Kontaktperson steht Ihnen jederzeit zur Verfügung
            </li>
            <li>Günstiger Preis für hochwertige Produkte</li>
            <li>Das ewige Warten ist vorbei</li>
            <li>kostenlose Beratung</li>
          </ul>
        </div>
        <div className="description-section-steps">
          <div className="description-section-step">
            <div className="step">
              <div>
                <h1>1</h1>
              </div>
              <h1>Vorstellung</h1>
            </div>
            <p>
              Wir lernen Sie und Ihre Firma in einem Beratungsgespräch besser
              kennen und können so Ihre Website optimal an Sie und Ihre Firma
              anpassen
            </p>
            <ul>
              <li>
                Geben Sie uns einen Überblick über Ihr Projekt und Ihre Wünsche.
              </li>
              <li>Kostenlose Beratung</li>
              <li>Keine Vorkenntnise nötig</li>
            </ul>
          </div>
          <div className="description-section-step">
            <div className="step">
              <div>
                <h1>2</h1>
              </div>
              <h1>Entwicklung</h1>
            </div>
            <p>Wir erstellen und kümmern uns um Ihre Website.</p>
            <ul>
              <li>Anpassung an alle Displaygrößen</li>
              <li>Online Vorschau Ihrer Website</li>
              <li>Umsätzung von Änderungswünschen</li>
            </ul>
          </div>
          <div className="description-section-step">
            <div className="step">
              <div>
                <h1>3</h1>
              </div>
              <h1>Letzte Schritte</h1>
            </div>
            <p>
              Hier werden von unseren Experten letzte Schritte zum einrichten
              Ihrer Website vorgenommen.
            </p>
            <ul>
              <li>Auswahl Ihrer persönlichen Domain oder Domain-umzug</li>
              <li>SSL-Zertifikat</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Rechtschreibung kontrolliert */}
      <section className="animation-section">
        <div className="animation-section-container">
          <div>
            <h2>Immernoch auf der Suche nach der perfekten Website?</h2>
            <p>
              {" "}
              kein Problem <span>hier</span> bist du richtig{" "}
            </p>
          </div>

          <Player
            src={animationSearch}
            background="transparent"
            speed={1}
            style={{ width: "50rem", aspectRatio: 1 }}
            autoplay
            loop
          ></Player>
        </div>
      </section>
      {/* Rechtschreibung kontrolliert */}
      <section className="explenation-section">
        <div className="explenation-section-boxes">
          <div className="explenation-section-box">
            <svg
              className="svg1"
              width="69"
              height="91"
              viewBox="0 0 69 91"
              fill="none"
            >
              <rect width="69" height="91" fill="#F5F5F5" />
              <g id="Frame 1">
                <rect width="69" height="91" fill="#F0F0F1" />
                <g id="Group 1" filter="url(#filter0_d_0_1)">
                  <rect
                    id="Rectangle-1"
                    x="12"
                    y="10"
                    width="44"
                    height="73"
                    fill="#F0F0F1"
                  />
                  <g id="Group 2">
                    <rect
                      id="Rectangle-2"
                      x="13"
                      y="18"
                      width="20"
                      height="32"
                      fill="#BEBCC9"
                    />
                    <rect
                      id="Rectangle-3"
                      x="13"
                      y="18"
                      width="20"
                      height="32"
                      fill="#BCC1BB"
                    />
                  </g>
                  <rect
                    id="Rectangle-4"
                    x="13"
                    y="59"
                    width="41"
                    height="18"
                    fill="#C9C2C2"
                  />
                </g>
                <g id="non-Responsive-things">
                  <rect
                    id="Rectangle 3_2"
                    x="35"
                    y="43"
                    width="20"
                    height="25"
                    fill="#D9D9D9"
                  />
                  <ellipse
                    id="Ellipse 1"
                    cx="53"
                    cy="36.5"
                    rx="1"
                    ry="3.5"
                    fill="#D9D9D9"
                  />
                </g>
                <rect
                  id="Rectangle 5"
                  x="21"
                  y="12"
                  width="26"
                  height="3"
                  rx="1"
                  fill="#3dcece"
                />
                <rect
                  id="Rectangle 6"
                  x="23"
                  y="80"
                  width="23"
                  height="1"
                  rx="0.5"
                  fill="#3dcece"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_0_1"
                  x="8"
                  y="10"
                  width="52"
                  height="81"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_0_1"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_0_1"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <h3>Responsiv</h3>
          </div>
          <div className="explenation-section-box">
            <Player
              src={padlock}
              background="transparent"
              speed={parseInt("2")}
              style={{ width: "4rem", aspectRatio: 1 }}
              hover
            ></Player>
            <h3>SSL-Zertifikat</h3>
          </div>

          <div className="explenation-section-box">
            <Player
              src={robot}
              background="transparent"
              speed={2}
              style={{ width: "4rem", aspectRatio: 1 }}
              hover
            ></Player>
            <h3>Zusammenarbeit mit KI</h3>
          </div>

          <div className="explenation-section-box">
            <Player
              src={paintPalette}
              background="transparent"
              speed={2}
              style={{ width: "4rem", aspectRatio: 1 }}
              hover
            ></Player>
            <h3>Individuelle Designs</h3>
          </div>

          <div id="vorteile" className="explenation-section-box">
            <Player
              src={search}
              background="transparent"
              speed={2}
              style={{ width: "4rem", aspectRatio: 1 }}
              hover
            ></Player>
            <h3>SEO</h3>
          </div>
        </div>
        <h2 className="underlined">Warum Wir ?</h2>
      </section>

      <section className="why-we-section">
        <div className="why-we-section-boxes">
          <div className="why-we-section-box">
            <h2>Erfahrung und Expertise</h2>
            <p>
              Wir verfügen über eine langjährige Erfahrung und umfangreiche
              Expertise im Verkauf von Websites. Unsere Fachkenntnisse
              ermöglichen es uns, unseren Kunden professionelle Beratung und
              maßgeschneiderte Lösungen anzubieten.
            </p>
          </div>
          <div className="why-we-section-box">
            <h2>Große Auswahl</h2>
            <p>
              Wir bieten eine große Auswahl an Websites in verschiedenen Nischen
              und Branchen an. Egal, ob Sie nach einer E-Commerce-Website, einer
              Blog-Website oder einer Affiliate-Marketing-Website suchen, wir
              haben die richtige Lösung für Sie.
            </p>
          </div>
          <div className="why-we-section-box">
            <h2>Qualitätssicherung</h2>
            <p>
              Wir legen großen Wert auf Qualität und stellen sicher, dass jede
              Website, die wir anbieten, von hoher Qualität ist. Unsere Websites
              sind benutzerfreundlich, gut gestaltet und mit den neuesten
              Technologien ausgestattet.
            </p>
          </div>
          <div className="why-we-section-box">
            <h2>Kundenservice</h2>
            <p>
              Wir sind stolz darauf, unseren Kunden einen ausgezeichneten
              Kundenservice zu bieten. Wir stehen Ihnen bei Fragen und Problemen
              jederzeit zur Verfügung und stellen sicher, dass Sie mit Ihrem
              Kauf zufrieden sind.
            </p>
          </div>
          <div className="why-we-section-box">
            <h2>Niedrige Preise</h2>
            <p>
              Wir bieten unsere Websites zu wettbewerbsfähigen Preisen an, ohne
              dabei an Qualität zu sparen. Unsere Preise sind transparent und
              fair, und wir arbeiten eng mit unseren Kunden zusammen, um ihre
              Bedürfnisse und Ihr Budget zu erfüllen.
            </p>
          </div>
        </div>
      </section>

      <section id="FAQ" className="häufige-fragen-section">
        <div className="häufige-fragen-section-trenner">
          <h1 className="underlined">Häufig gestellte Fragen</h1>
        </div>

        <div className="accordionContainer">
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Was ist Responsivität und warum ist es so wichtig ?"
              subtitle="Responsivität bezieht sich auf die Fähigkeit..."
              title="Was ist Responsivität und warum ist es so wichtig ?"
            >
              <div className="accordionContent">
                <p>
                  Responsivität bezieht sich auf die Fähigkeit einer Website,
                  sich an verschiedene Bildschirmgrößen und Geräte anzupassen.
                  Wenn eine Website responsiv ist, wird sie automatisch so
                  angepasst, dass sie auf Desktop-Computern, Laptops, Tablets
                  und Smartphones gut lesbar und benutzerfreundlich bleibt.{" "}
                  <br />
                </p>
                <h3 className="underlined">
                  Warum ist Responsivität so wichtig für eine Website?
                </h3>
                <ul>
                  <li>
                    Bessere Benutzererfahrung: Eine responsive Website bietet
                    eine bessere Benutzererfahrung für Besucher auf
                    verschiedenen Geräten. Wenn die Website nicht für mobile
                    Geräte optimiert ist, kann es für Nutzer schwierig sein, auf
                    wichtige Inhalte zuzugreifen oder die Website zu navigieren.
                    Dies kann zu einer schlechten Nutzererfahrung führen und
                    Besucher abschrecken.
                  </li>
                  <li>
                    Höhere Suchmaschinen-Rankings: Suchmaschinen wie Google
                    bevorzugen responsive Websites und geben ihnen ein höheres
                    Ranking in den Suchergebnissen. Eine responsive Website wird
                    als benutzerfreundlicher angesehen, was sich positiv auf das
                    Ranking auswirkt.
                  </li>
                  <li>
                    Größere Reichweite: Eine responsive Website erreicht ein
                    größeres Publikum, da sie auf verschiedenen Geräten und
                    Bildschirmgrößen gut lesbar ist. Dies kann dazu beitragen,
                    dass Ihre Website mehr Besucher anzieht und Ihre Reichweite
                    erhöht.
                  </li>
                  <li>
                    Zukunftsorientierung: Da immer mehr Menschen mobile Geräte
                    zur Nutzung des Internets verwenden, wird die Responsivität
                    zu einem immer wichtigeren Faktor für eine erfolgreiche
                    Website. Wenn Ihre Website nicht responsiv ist, kann sie in
                    Zukunft veraltet und unbrauchbar werden.
                  </li>
                </ul>
                <p>
                  Insgesamt ist die Responsivität einer Website ein wichtiger
                  Faktor für eine erfolgreiche Online-Präsenz. Es ermöglicht
                  Besuchern, die Website auf verschiedenen Geräten und
                  Bildschirmgrößen zu nutzen und bietet eine bessere
                  Benutzererfahrung. Darüber hinaus verbessert es das Ranking in
                  Suchmaschinen und erhöht die Reichweite der Website.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem
              key="2"
              aria-label="Was bringt Ihnen das SSL-Zertifikat"
              subtitle="Das SSL-Zertifikat schützt die Daten..."
              title="Was bringt Ihnen das SSL-Zertifikat"
            >
              <div className="accordionContent">
                <p>
                  Das SSL-Zertifikat schützt die Daten, die zwischen dem Browser
                  des Nutzers und dem Webserver ausgetauscht werden, indem es
                  die Informationen verschlüsselt, bevor sie über das Internet
                  übertragen werden. Dadurch wird verhindert, dass Hacker oder
                  andere unautorisierte Personen die Daten abfangen oder stehlen
                  können.
                </p>
                <p>
                  Ein SSL-Zertifikat ist insbesondere für Websites wichtig, auf
                  denen vertrauliche Informationen wie Kreditkarteninformationen
                  oder persönliche Daten eingegeben werden müssen. Durch die
                  Verwendung eines SSL-Zertifikats können Website-Besitzer das
                  Vertrauen ihrer Kunden stärken und ihnen zeigen, dass ihre
                  Daten sicher und geschützt sind.
                </p>
                <p>
                  Wenn eine Website ein SSL-Zertifikat besitzt, wird dies in der
                  Regel durch ein grünes Schlosssymbol in der Adressleiste des
                  Browsers angezeigt. Außerdem beginnt die URL der Website mit
                  &quot;https://&quot; anstelle von &quot;http://&quot;.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem
              key="3"
              aria-label="Vorteile von KI"
              subtitle="Die Zusammenarbeit mit künstlichen Intiligenzen..."
              title="Vorteile von KI"
            >
              <div className="accordionContent">
                <p>
                  Die Zusammenarbeit mit künstlichen Intiligenzen, macht es uns
                  einfacher Ihre Website schneller und besser als andere
                  Unternehmen zu Perfektionieren. Zusammen mit diversen
                  künstlichen Intiligenzen und der Erfahrung unserer
                  Programmierer können wir Ihnen das optimale Produkt
                  entgegenbringen.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem
              key="4"
              aria-label=" Was ist SEO ? Warum ist es nicht mehr Wegzudenken ?"
              subtitle="Ihre website bei
            Google ganz oben anzeigen zu lasssen..."
              title=" Was ist SEO ? Warum ist es nicht mehr Wegzudenken ?"
            >
              <div className="accordionContent">
                <h3 className="underlined">
                  Sie wollen möglichst viele Kunden auf Ihrer website ? Wir
                  haben die Lösung!
                </h3>
                <p>
                  Durch verschiedene Methoden, ist es uns möglich Ihre website
                  bei Google ganz oben anzeigen zu lasssen.
                </p>
                <p>
                  SEO steht für Search Engine Optimization und bezieht sich auf
                  die Praktiken, die verwendet werden, um die Positionierung
                  einer Website in den Suchmaschinenergebnissen zu verbessern.
                  Das Ziel von SEO ist es, Ihre Website auf den oberen
                  Positionen der Suchmaschinenergebnisse zu platzieren, um mehr
                  Besucher auf Ihre website zu bringen.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="animation-section">
        <div className="animation-section-container2">
          <Player
            src={QAanimation}
            background="transparent"
            speed={1}
            style={{ width: "50rem", aspectRatio: 1 }}
            autoplay
            loop
          ></Player>
          <div>
            <h2>Hast du noch offene Fragen ?</h2>
            <p>
              {" "}
              kein Problem du kannst uns eine Nachricht schreiben, wir werden
              uns in kürzester zeit darum kümmern
            </p>
          </div>
        </div>
      </section>

        <div id="angebote" className="message-section-trenner">
          <h1 className="underlined">Angebote</h1>
        </div>
        
      <section className="pricing-sec">
        <div className="pricing-div second-div">
          <h2>Standard-Paket</h2>
          <p>
            Genau das richtige wenn es von der Funktionalität her passen soll
          </p>
          <ul>
            <li>Beratungsgespräch</li>
            <li>Wunschdomain</li>
            <li>Schneller Support</li>
            <li>Social Media Verlinkungen</li>
            <li>Integrierte Karte</li>
            <li>Kontaktformular</li>
            <li>1 Seite &#10132 Homepages/Visitenkarten</li>
          </ul>
          <a
            href="index.html#form"
            id="example"
            className="hbtn hb-border-bottom-br4"
          >
            149.99&#8364; Aufwärts
          </a>
        </div>

        <div className="pricing-div ">
          <div className="favourite">
            <h3>
              Am Beliebtesten <span style={{ color: "red" }}>10%</span>{" "}
            </h3>
          </div>
          <h2>Business-Paket</h2>
          <p>Beschreibung</p>
          <ul>
            <li>Beratungsgespräch</li>
            <li>Wunschdomain</li>
            <li>Schneller Support</li>
            <li>Social Media Verlinkungen</li>
            <li>Integrierte Karte</li>
            <li>Kontaktformular</li>
            <li>Bis zu 4 Seiten &#10132 Homepage + 3 Unterseiten</li>
            <li>4 Lizensbilder</li>
          </ul>
          <a
            href="index.html#form"
            id="example"
            className="hbtn hb-border-bottom-br4"
          >
            {" "}
            <s style={{ color: "orange" }}>650</s> 579.99&#8364; Aufwärts
          </a>
        </div>

        <div className="pricing-div ">
          <h2>Premium-Paket</h2>
          <p>Beschreibung</p>
          <ul>
            <li>Beratungsgespräch</li>
            <li>Wunschdomain</li>
            <li>Schneller Support</li>
            <li>Social Media Verlinkungen</li>
            <li>Integrierte Karte</li>
            <li>Kontaktformular</li>
            <li>
              Ab 7 Seiten &#10132 Homepage +{" "}
              <span style={{ color: "red" }}>x</span> Unterseiten
            </li>
            <li>8 Lizensbilder</li>
            <li>Logodesign</li>
          </ul>
          <a
            href="index.html#form"
            id="example"
            className="hbtn hb-border-bottom-br4"
          >
            {" "}
            1249.99&#8364; Aufwärts
          </a>
        </div>
      </section>

      <section id="message-section" className="message-section">
        <div className="message-section-trenner">
          <Player
            className="contact-svg"
            src={email}
            background="transparent"
            speed={1}
            style={{ width: "4rem", aspectRatio: 1 }}
            hover
          ></Player>
          <h1 className="underlined">Kontaktaufnahme</h1>
          <Player
            className="contact-svg"
            src={email}
            background="transparent"
            speed={1}
            style={{ width: "4rem", aspectRatio: 1 }}
            hover
          ></Player>
        </div>
        <form action=""></form>
      </section>

      <section id="form" className="kontakt-sec increase-size">
        <form
          onSubmit={handleSubmit}
          className="kontakt-form makeChildrenVisible"
        >
          <input type="text" name="Vorname" placeholder="Vorname" id="" />
          <input type="text" name="Name" placeholder="Name" id="" />
          <input type="email" name="Email" placeholder="Email" id="" />
          <input
            type="text"
            name="Telefonnummer"
            placeholder="Telefonnummer"
            id=""
          />
          <div className="selection">
            <h3>Kontaktform</h3>
            <select className="select" name="Kontaktform">
              <option>
                Chatsystem [erfordert die erstellung eines Profils]
              </option>
              <option>WhatsApp</option>
              <option>Telefonat</option>
              <option>Email</option>
            </select>
          </div>

          <div className="selection">
            <h3>Paket</h3>
            <select className="select" name="Paket" id="package-selection">
              <option>Noch nicht sicher</option>
              <option>Standard-Paket</option>
              <option>Business-Paket</option>
              <option>Premium-Paket</option>
            </select>
          </div>

          <input
            className="hide"
            type="number"
            name="Betreff"
            placeholder="An welchem tag möchtest du angerufen werden [Datum]"
            id="day-input"
          />
          <textarea
            placeholder="Beschreiben Sie Ihr projekt in einigen Worten"
            name="Nachricht"
            id=""
            cols={30}
            rows={10}
          ></textarea>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
