

const Header = () => {
  return (
    <>
      <header>
        <div className="logo-box">
          <a className="logo-heading" href="#">
            &lt;/Broussa&gt;
          </a>
        </div>
        <div className="progress-bar"></div>
        <ul className="menu-big-screen">
          <li className="underline_custom">
            <a href="/">Home</a>
          </li>
          <li className="underline_custom">
            <a href="#vorteile">Vorteile</a>
          </li>
          <li className="underline_custom">
            <a href="#FAQ">FAQ</a>
          </li>
          <li className="underline_custom">
            <a href="#angebote">Angebote</a>
          </li>
          <li className="underline_custom">
            <a href="/api/auth/login">Login</a>
          </li>
          <li className="underline_custom">
            <a href="/profile">Übersicht</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;