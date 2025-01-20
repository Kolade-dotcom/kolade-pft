/**
 * @copyright 2025 Akolade-Salako
 * @license Apache-2.0
 */

/**
 * Components
 */
import Navbar from "./Navbar";

/**
 * Node Modules
 */
import { useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-40 flex h-20 w-full items-center bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 md:grid-cols-[1fr,3fr,1fr] md:px-6">
        <h1>
          <a href="/" className="logo">
            <img src="/images/logo.svg" width={40} height={40} alt="kolade" />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
