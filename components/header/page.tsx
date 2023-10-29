

const Header = () => {
  return (
    <>
      <header>
        <div className="logo-box">
          <a className="logo-heading" href="#">
            &lt;/WebNeural&gt;
          </a>
        </div>
        <div className="progress-bar"></div>
        <ul className="menu-big-screen">
          <li className="underline">
            <a href="/">Home</a>
          </li>
          <li className="underline">
            <a href="#vorteile">Vorteile</a>
          </li>
          <li className="underline">
            <a href="#FAQ">FAQ</a>
          </li>
          <li className="underline">
            <a href="#angebote">Angebote</a>
          </li>
          <li className="underline">
            <a href="/api/auth/login">Login</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;