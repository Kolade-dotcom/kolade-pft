/**
 * @copyright 2025 Akolade-Salako
 * @license Apache-2.0
 */
import { ButtonPrimary } from "./Button.jsx";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Works",
    href: "#works",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Kolade-dotcom",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akolade-salako/",
  },
  {
    label: "Twitter X",
    href: "https://x.com/sal_kolade",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/akoladesalako/",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className={"lg:grid lg:grid-cols-2"}>
          <div className={"mb-10"}>
            <h2 className={"headline-1 reveal-up mb-8 lg:max-w-[12ch]"}>
              Let&apos;s work together today!
            </h2>

            <ButtonPrimary
              href={"mailto:akoladesalako5@gmail.com"}
              label={"Start project"}
              icon={"chevron_right"}
              className={"reveal-up"}
            />
          </div>

          <div className={"grid grid-cols-2 gap-4 lg:pl-20"}>
            <div>
              <p className={"reveal-up mb-2"}>Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className={
                        "reveal-up block py-1 text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                      }
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className={"reveal-up mb-2"}>Social</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target={"_blank"}
                      className={
                        "reveal-up block py-1 text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                      }
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={"mb-8 flex items-center justify-between pt-10"}>
          <a href={"/"} className={"logo reveal-up"}>
            <img src={"/images/logo.svg"} width={40} height={40} alt="logo" />
          </a>

          <p className={"reveal-up text-sm text-zinc-500"}>
            &copy; 2025 <span className={"text-zinc-300"}>akolade.salako</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
