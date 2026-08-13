import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article>
      <img src={project.iconSrc} alt="" />
      <span>{project.stat}</span>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </article>
  );
}

export default ProjectCard;