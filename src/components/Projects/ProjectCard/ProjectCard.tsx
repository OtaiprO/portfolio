import "./ProjectCard.css";

export type ProjectCardProps = {
  title: string;
  details: string[];
  link?: string;
  github?: string;
};

export const ProjectCard = ({
  title,
  details,
  link,
  github,
}: ProjectCardProps) => {
  return (
    <div className="project-card">
      <h6>{title}</h6>

      <ul>
        {details.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="project-links-container">
        {link ? (
          <a href={link}>
            <div className="project-link">Project Webpage</div>
          </a>
        ) : (
          ""
        )}
        {github ? (
          <a href={github}>
            <div className="project-link">GitHub Reposotory</div>
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
