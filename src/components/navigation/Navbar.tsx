import { NavLink } from 'react-router-dom';
import { navLinks } from '@/src/shared/index.fixtures';

function Navbar({
  handleActiveNavToggle,
}: {
  handleActiveNavToggle: () => void;
}) {
  return (
    <>
      {navLinks.map((link, index) => (
        <NavLink
          className={data =>
            data.isActive ? 'anchor-text active' : 'anchor-text'
          }
          key={`nav-links-${index}`}
          onClick={handleActiveNavToggle}
          to={`/${link.route}`}
          style={{
            fontSize: 18,
            marginTop: 4,
            textAlign: 'left',
          }}
        >
          {link.label}
        </NavLink>
      ))}
    </>
  );
}
export default Navbar;
