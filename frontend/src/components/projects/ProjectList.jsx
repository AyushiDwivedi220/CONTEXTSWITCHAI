import ProjectCard from "./ProjectCard";

export default function ProjectList({
  projects,
}) {
  if (!projects.length) {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        No projects found.
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}