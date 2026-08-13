import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function ProjectGrid() {
  return (
    <section className="grid grid-cols-1 items-center sm:grid-cols-2 border">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </section>
  );
}

export default ProjectGrid;