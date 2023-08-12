import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/navbar.scss';

const Navbar = () => {
  
  const [tooglMenu, setToogleMenu] = useState(false);

  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const routes = [
    {
      path: '/diegoapp/',
      name: 'Inicio'
    },
    {
      path: '/diegoapp/nosotros',
      name: 'Nosotros'
    },
    {
      path: '/diegoapp/galeria',
      name: 'Galeria'
    },
    {
      path: '/diegoapp/contacto',
      name: 'Contacto'
    }
  ];

  return (
    <header>
      <nav className="nav">
        <div className="container">
          <div className="nav-wrapper">
            <div className="nav-logo">
              <h3 className="logo" onClick={ scrollToTop }>
                <Link to="/">Mi LOGO</Link>
              </h3>
            </div>

            <div className={`nav-btn ${tooglMenu && 'nav-btn-open'}`} onClick={() => setToogleMenu(!tooglMenu)}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <ul className={`nav-links ${tooglMenu && 'nav-links-open'}`}>
              { routes.map((route) => (
                <li key={route.name} onClick={ scrollToTop }>
                  <Link to={route.path} onClick={() => setToogleMenu(!tooglMenu)} className={location.pathname === route.path ? 'active' : ''}>{ route.name }</Link>
                </li>
              )) }
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar