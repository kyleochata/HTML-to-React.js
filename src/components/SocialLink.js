import { socialLinks } from "../data";

const SocialLink = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        const { id, href, iconHref } = link;
        return (

          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={itemClass}
            >
              <i className={iconHref}></i>
            </a>
          </li>
        )
      })}
    </ul>
  );
};
export default SocialLink;
