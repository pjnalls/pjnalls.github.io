import logo from '/logo.png';
import { NavProps } from '../types';
import './Nav.css';

function Nav({ activeRoute, setRoute }: NavProps) {
  const handleOnClick = (name = 'home') => {
    setRoute(name);
    // document.head.title = `Preston Nalls — ${name.toUpperCase()}`;
  };

  return (
    <nav className="Nav">
      <div onClick={() => handleOnClick()}>
        <a href="/#home">
          <img
            src={logo}
            className={activeRoute === 'home' ? 'logo active' : 'logo'}
            alt="Preston's brand"
          />
        </a>
      </div>
      <ul className="Nav__options">
        {['about', 'portfolio', 'contact'].map((routeName) => (
          <li
            className={routeName === activeRoute ? 'active' : ''}
            onClick={() => handleOnClick(routeName)}
          >
            <a href={`/#${routeName}`}>{routeName.toUpperCase()}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
