import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function ProjectGrid() {
  return (
    <section>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </section>
  );
}

export default ProjectGrid;