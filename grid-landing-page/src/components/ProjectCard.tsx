import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col h-full justify-between px-6 py-12 gap-6">
      <div className="flex justify-between">
          <img src={project.iconSrc} alt="" className="mb-4 size-10" />
          <span>{project.stat}</span>
      </div>
      <div className="text-left">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="mt-2">{project.description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;