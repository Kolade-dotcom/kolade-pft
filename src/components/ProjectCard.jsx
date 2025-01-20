/**
 * @copyright 2025 Akolade-Salako
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, projectLink, tags, title, className }) => {
  return (
    <div
      className={`relative rounded-2xl bg-zinc-800 p-4 ring-1 ring-inset ring-zinc-50/5 transition-colors hover:bg-zinc-700/50 active:bg-zinc-700/60 ${className}`}
    >
      <figure className={"img-box mb-4 aspect-square rounded-lg"}>
        <img
          src={imgSrc}
          alt={title}
          loading={"lazy"}
          className={"img-cover"}
        />
      </figure>

      <div className={"flex items-center justify-between gap-4"}>
        <div>
          <h3 className={"title-1 mb-3"}>{title}</h3>

          <div className={"flex flex-wrap items-center gap-2"}>
            {tags.map((tag, key) => (
              <span
                className={
                  "grid h-8 items-center rounded-lg bg-zinc-50/5 px-3 text-sm text-zinc-400"
                }
                key={key}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          className={
            "grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-sky-400 text-zinc-950"
          }
        >
          <span className={"material-symbols-rounded"} aria-hidden={"true"}>
            arrow_outward
          </span>
        </div>
      </div>

      <a href={projectLink} target="_blank" className={`absolute inset-0`}></a>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  projectLink: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ProjectCard;
