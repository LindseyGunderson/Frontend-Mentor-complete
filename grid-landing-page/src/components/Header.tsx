import { useState } from "react";
import iconMenuOpen from "../assets/images/icon-menu.svg";
import iconMenuClose from "../assets/images/icon-close.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-6">
        <a href="/">Bridge Collective</a>

        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label="Open navigation menu"
        >
          <img src={iconMenuOpen} alt="" />
        </button>
      </div>

      {/* Mobile Nav */}
      <nav
        id="main-navigation"
        aria-hidden={!isMenuOpen}
        className={`
          fixed inset-x-0 top-0 z-50
          h-[70vh]
          bg-neutral-600
          transition-transform duration-300 ease-out
          lg:hidden
          ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="flex items-center justify-between p-8">
          <a href="/" onClick={closeMenu}>
            Bridge Collective
          </a>
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <img src={iconMenuClose} alt="" />
          </button>
        </div>

        <ul className="flex flex-col gap-8 p-8">
          <li>
            <a href="#" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#" onClick={closeMenu}>
              About
            </a>
          </li>

          <li>
            <a href="#" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>


      {/* Desktop Nav */}
      <nav
        aria-hidden={!isMenuOpen}
        className={`
          fixed inset-y-0 z-50
          right-[max(0rem,calc((100vw-72rem)/2+2rem))]
          hidden w-80
          overflow-hidden
          bg-neutral-600
          transition-transform duration-300 ease-out
          lg:block
          ${isMenuOpen ? "translate-x-0" : "translate-x-[calc(100%+100vw)]"}
        `}
      >
        <div className="flex items-center justify-end p-8">
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <img src={iconMenuClose} alt="" />
          </button>
        </div>

        <ul className="flex flex-col gap-8 p-8">
          <li>
            <a href="#" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#" onClick={closeMenu}>
              About
            </a>
          </li>

          <li>
            <a href="#" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
