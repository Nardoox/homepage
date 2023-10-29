"use client";

import { push as Menu } from 'react-burger-menu'

export default function Angebote() {
  const divStyle = {
    backgroundColor: "lightblue",
    color: "darkblue",
    padding: "10px",
    borderRadius: "5px",
  };

  return (
    <div id="page-wrap">
      <Menu width={280} pageWrapId={"page-wrap"} className="Menu" right>
            <a id="home" className="menu-item" href="/">
              Home
            </a>
            <a id="about" className="menu-item" href="/about">
              About
            </a>
            <a id="contact" className="menu-item" href="/contact">
              Contact
            </a>
            <a className="menu-item" href="">
              Settings
            </a>
          </Menu>
      <div className="platzhalter"></div>
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
              Am Beliebtesten <span style={{color: "red"}}>10%</span>{" "}
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
    </div>
  );
}
