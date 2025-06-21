/**
 * @copyright 2025 Akolade-Salako
 * @license Apache-2.0
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard.jsx";

const works = [
  {
    imgSrc: "/images/project-reelix.png",
    title: "Movie Trailers App",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://reelix-b4f0.onrender.com/",
  },
  {
    imgSrc: "/images/project-socially.png",
    title: "Full stack social app",
    tags: ["API", "web-design", "Development"],
    projectLink: "https://socially-sand.vercel.app/",
  },
  {
    imgSrc: "/images/aora.JPG",
    title: "AI video sharing app",
    tags: ["Development", "API", "Mobile"],
    projectLink: "https://github.com/Kolade-dotcom/aora",
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "Free stock photo app",
    tags: ["API", "SPA"],
    projectLink: "https://pixstock-official.vercel.app/",
  },
  {
    imgSrc: "/images/ryde.jpg",
    title: "Ride sharing App",
    tags: ["Ride sharing", "Development", "Mobile"],
    projectLink: "https://github.com/Kolade-dotcom/ryde",
  },
  {
    imgSrc: "/images/project-1.jpg",
    title: "Full stack music app",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://musify-5al0.onrender.com/",
  },
  // {
  //   imgSrc: "/images/project-spotlight.png",
  //   title: "Full stack social app (Mobile)",
  //   tags: ["Mobile", "MVC", "Development"],
  //   projectLink: "https://github.com/Kolade-dotcom/blogger",
  // },
];

const Works = () => {
  return (
    <section id={"works"} className={"section"}>
      <div className={"container"}>
        <h2 className={"headline-2 reveal-up mb-8"}>My portfolio highlights</h2>

        <div
          className={
            "grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-x-4 gap-y-5"
          }
        >
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <div key={key}>
              <ProjectCard
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                className={"reveal-up"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
