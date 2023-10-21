import { NavProps } from '../../types';
import './Nav.scss';

function Nav({ activeRoute, setRoute }: NavProps) {
  const handleOnClick = (name = 'home') => {
    setRoute(name);
  };

  return (
    <nav className="Nav">
      <ul className="Nav__options">
        {['#onelove', 'about', 'works', 'contact'].map((routeName) => (
          <li
            key={routeName}
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
