import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full min-h-[320px] flex-col justify-between gap-10 px-6 py-8 transition-colors cursor-pointer hover:bg-blue-400/30 md:px-8 md:py-10 lg:min-h-[360px] lg:px-10 lg:py-12">
      <div className="flex items-start justify-between gap-6">
        <img
          src={project.iconSrc}
          alt=""
          className="size-10 shrink-0 object-contain"
        />

        <span className="text-2xl font-medium md:text-3xl lg:text-4xl">
          {project.stat}
        </span>
      </div>

      <div className="text-left">
        <h2 className="text-xl font-semibold md:text-2xl">
          {project.title}
        </h2>

        <p className="mt-3 max-w-sm">
          {project.description}
        </p>
      </div>
    </article>
  );
}

export default ProjectCard;
