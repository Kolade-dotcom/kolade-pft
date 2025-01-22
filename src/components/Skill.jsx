/**
 * @copyright 2025 Akolade-Salako
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from "./SkillCard.jsx";

const skillItems = [
  {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "/images/html.svg",
    label: "HTML",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/typescript.svg",
    label: "Typescript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/django.svg",
    label: "Django",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/postgresql.svg",
    label: "PostgreSQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/expo.svg",
    label: "React Native",
    desc: "Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
];

const Skill = () => {
  return (
    <section className={"section"}>
      <div className={"container"}>
        <h2 className={"headline-2 reveal-up"}>Essential Tools I use</h2>

        <p className={"reveal-up mb-8 mt-3 max-w-[50ch] text-zinc-400"}>
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div
          className={
            "grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-3"
          }
        >
          {skillItems.map(({ imgSrc, label, desc }, key) => (
            <div key={key}>
              <SkillCard
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                className={"reveal-up"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
