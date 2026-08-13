import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function ProjectGrid() {

  return (
   <div className="grid grid-cols-1 md:grid-cols-2">
      {projects.map((project) => (
          <div key={project.title}
          className="
            border-b
            last:border-b-0
            md:border-b
            md:[&:nth-child(odd)]:border-r
            md:[&:nth-child(n+3)]:border-b-0
          "
        >
          <ProjectCard key={project.title} project={project} />
        </div>
      ))}
    </div>
  );
}

export default ProjectGrid;