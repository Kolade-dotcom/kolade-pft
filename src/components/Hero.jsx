/**
 * @copyright 2025 Akolade-Salako
 * @license Apache-2.0
 */

/**
 * Media
 */
// import resumeExample from "/resume-example.pdf";

/**
 * Components
 */
import { ButtonOutline, ButtonPrimary } from "./Button.jsx";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box h-9 w-9 rounded-lg">
              <img
                src="/images/avatar-pic.png"
                width={40}
                height={40}
                alt="Akolade Salako avatar"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-sm tracking-wide text-zinc-400">
              <span className="relative h-2 w-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 h-2 w-2 animate-ping rounded-full bg-emerald-400"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1 mb-8 mt-5 max-w-[15ch] sm:max-w-[20ch] lg:mb-10 lg:max-w-[15ch]">
            Building Scalable Modern Apps for the Future
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              label={"Download CV"}
              icon={"download"}
              // onClick={() => window.open(resumeExample)}
            />
            <ButtonOutline
              href={"#about"}
              label={"Scroll down"}
              icon={"arrow_downward"}
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="ml-auto w-full max-w-[480] overflow-hidden rounded-[60px] bg-gradient-to-t from-sky-400 via-sky-400/40 via-20% to-45%">
            <img
              src="/images/hero-banner1.png"
              width={656}
              height={800}
              alt="Akolade Salako"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
