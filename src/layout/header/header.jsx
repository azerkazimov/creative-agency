import "./header.css";

export default function Header() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <a href="/">
            <img src="/logo.png" alt="" />
          </a>
        </div>
        <nav className="nav-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <a href="/">Home</a>
            </li>
            <li className="menu-item">
              <a href="/about">About</a>
            </li>
            <li className="menu-item">
              <a href="/service">Service</a>
            </li>
            <li className="menu-item">
              <a href="/project">Project</a>
            </li>
          </ul>
        </nav>
        <div className="nav-btn">
          <button className="btn btn-transparent">Contact</button>
        </div>
      </header>
    </div>
  );
}
