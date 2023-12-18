import { NavLink } from "react-router-dom";
import { navLinks } from "../shared/fixtures";

function Navbar({
  handleActiveNavToggle,
}: {
  handleActiveNavToggle: () => void;
}) {
  return (
    <>
      {navLinks.map((link, index) => (
        <NavLink
          className={(data) =>
            data.isActive ? "anchor-text active" : "anchor-text"
          }
          key={`nav-links-${index}`}
          onClick={handleActiveNavToggle}
          to={link.route}
          style={{ fontWeight: 300, textAlign: "left" }}
        >
          {link.label}
        </NavLink>
      ))}
    </>
  );
}
export default Navbar;
