import { Link } from "react-router-dom";
import useProjectStore from "../../store/projectStore";

export default function ProjectCard({
  project,
}) {
  const { deleteProject } =
    useProjectStore();

  const handleDelete = async () => {
    const confirmed = window.confirm(
      `Delete "${project.name}"?`
    );

    if (!confirmed) return;

    try {
      await deleteProject(project.id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-5 border">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold">
            {project.name}
          </h3>

          <p className="text-gray-600 mt-2">
            {project.description}
          </p>
        </div>

        <span className="px-3 py-1 rounded-full text-sm bg-gray-100">
          {project.status}
        </span>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        Created:
        {" "}
        {new Date(
          project.created_at
        ).toLocaleDateString()}
      </div>

      <div className="flex gap-3 mt-5">
        <Link
          to={`/projects/${project.id}`}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          View
        </Link>

        <Link
          to={`/projects/${project.id}/edit`}
          className="px-4 py-2 bg-yellow-500 text-white rounded"
        >
          Edit
        </Link>

        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}