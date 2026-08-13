import { useState } from "react";
import iconMenuOpen from "../assets/images/icon-menu.svg";
import iconMenuClose from "../assets/images/icon-close.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="border-b border-blue-200 bg-blue-700">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-8">
        <a href="/" className="text-xl font-semibold">
          Bridge Collective
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label="Open navigation menu"
          className="rounded-md p-2 transition-colors cursor-pointer hover:bg-back/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          <img src={iconMenuOpen} alt="" className="h-6 w-6" />
        </button>
      </div>

      <div
        className={`
        fixed inset-0 z-40 bg-black/25
        transition-opacity duration-300
        ${isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
            aria-hidden="true"
            onClick={closeMenu}
          />

      {/* Mobile Nav */}
      <nav
        id="main-navigation"
        aria-hidden={!isMenuOpen}
        className={`
          fixed inset-x-0 top-0 z-50 h-[50vh]
          bg-blue-700
          transition-transform duration-300 ease-out
          lg:hidden
          ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="flex items-center justify-between p-6 md:p-8">
          <a href="/" onClick={closeMenu} className="text-xl font-semibold">
            Bridge Collective
          </a>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="rounded-md p-2 transition-colors cursor-pointer hover:bg-blue-700/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <img src={iconMenuClose} alt="" className="h-6 w-6" />
          </button>
        </div>

        <ul className="flex flex-col items-center gap-6 px-6 py-4 md:px-8">
          <li>
            <a href="#" onClick={closeMenu} className="transition-colors">
              About
            </a>
          </li>

          <li>
            <a href="#" onClick={closeMenu} className="transition-colors">
              Our Work
            </a>
          </li>

          <li>
            <a href="#" onClick={closeMenu} className="transition-colors">
              Partners
            </a>
          </li>
          <li>
            <a href="#" onClick={closeMenu} className="transition-colors">
              Annual Report
            </a>
          </li>
          <li>
            <a href="#" onClick={closeMenu} className="transition-colors">
              Donate
            </a>
          </li>
        </ul>
      </nav>

      {/* Desktop Nav */}
      <nav
        aria-hidden={!isMenuOpen}
        className={`
          fixed inset-y-0 right-[max(0rem,calc((100vw-72rem)/2+2rem))] z-50
          hidden w-80 overflow-hidden
          bg-blue-700
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
            className="rounded-md p-2 transition-colors cursor-pointer hover:bg-blue-700/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <img src={iconMenuClose} alt="" className="h-6 w-6" />
          </button>
        </div>

        <ul className="flex flex-col items-end gap-8 px-8 py-4">
          <li>
            <a href="#" onClick={closeMenu} className="transition-colors">
              About
            </a>
          </li>

          <li>
            <a href="#" onClick={closeMenu} className="transition-colors">
              Our Work
            </a>
          </li>

          <li>
            <a href="#" onClick={closeMenu} className="transition-colors">
              Partners
            </a>
          </li>
          <li>
            <a href="#" onClick={closeMenu} className="transition-colors">
              Annual Report
            </a>
          </li>
          <li>
            <a href="#" onClick={closeMenu} className="transition-colors">
              Donate
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
