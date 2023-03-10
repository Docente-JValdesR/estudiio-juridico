import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/services", text: "Services" },
    { to: "/testimony", text: "Testimony" },
    { to: "/blog", text: "Blog" },
    { to: "/contact", text: "Contact" },
  ];
  const Nav = () => {
    return (
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto menu">
        {navItems.map((item, index) => (
          <li key={index} className="nav-item">
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to={item.to}
            >
              {item.text}
              <span class="border border-dark border-top"></span>
              <span class="border border-dark border-right"></span>
              <span class="border border-dark border-bottom"></span>
              <span class="border border-dark border-left"></span>
            </NavLink>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 rounded- fixed-top navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Servicios Legales S.A.
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>

            <NavLink className="navbar-brand" to="/">
              Servicios Legales S.A.
            </NavLink>
          </div>
          <div
            className="offcanvas-body text-center"
            data-bs-toggle="offcanvas"
          >
            <Nav />
          </div>
        </div>
      </div>
    </nav>
  );
}
