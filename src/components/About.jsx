/**
 * @copyright 2025 Akolade-Salako
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: "Project done",
    number: 25,
  },
  {
    label: "Years of experience",
    number: 2,
  },
];

const About = () => {
  return (
    <section id={"about"} className={"section"}>
      <div className="container">
        <div className="reveal-up rounded-2xl bg-zinc-800/50 p-7 md:p-12">
          <p className="mb-4 text-zinc-300 md:mb-8 md:max-w-[60ch] md:text-xl">
            Welcome! I&apos;m Kolade, a professional full-stack developer
            specializing in React and Next.js web applications. Combining
            creativity and technical expertise, I craft powerful digital
            experiences across web and mobile platforms using React Native with
            Expo. I transform your vision into seamless, high-performance
            solutions that look as amazing as they function.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className={"flex items-center md:mb-2"}>
                  <span className={"text-2xl font-semibold md:text-4xl"}>
                    {number}
                  </span>
                  <span className={"font-semibold text-sky-400 md:text-3xl"}>
                    +
                  </span>
                </div>

                <p className={"text-sm text-zinc-400"}>{label}</p>
              </div>
            ))}

            <img
              src={"/images/logo.svg"}
              alt={"Logo"}
              width={30}
              height={30}
              className={"md: ml-auto md:h-[40px] md:w-[40px]"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
