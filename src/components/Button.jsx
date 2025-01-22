/**
 * @copyright 2025 Akolade-Salako
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from "prop-types";

/**
 * Primary button
 */
export const ButtonPrimary = ({
  href,
  target = "_self",
  label,
  icon,
  className,
  onClick,
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        onClick={onClick}
        className={`btn btn-primary ${className}`}
      >
        {label}
        {icon ? (
          <span className={"material-symbols-rounded"} aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-primary ${className}`} onClick={onClick}>
        {label}
        {icon ? (
          <span className={"material-symbols-rounded"} aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

/**
 * Ouline button
 */
export const ButtonOutline = ({
  href,
  target = "_self",
  label,
  icon,
  className,
}) => {
  if (href) {
    return (
      <a href={href} target={target} className={`btn btn-outline ${className}`}>
        {label}
        {icon ? (
          <span className={"material-symbols-rounded"} aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-outline ${className}`}>
        {label}
        {icon ? (
          <span className={"material-symbols-rounded"} aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </button>
    );
  }
};

ButtonOutline.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
};
