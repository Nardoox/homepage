const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-div">
          <h3 className="underlined">Kontakt</h3>
          <div>
            <p>Email:</p>
            <a>broussa@web.de</a>
          </div>
          {/* <div>
            <p>Telefonnummer:</p>
            <a href="tel:+4915773934304">+49 1577 3934304</a>
          </div> */}
        </div>
        <div className="footer-div-second">
          <h3 className="underlined">Sonstiges</h3>
          <div>
            <a href="#">Impressum</a>
          </div>
          <div>
            <a href="#">Datenschutz</a>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
