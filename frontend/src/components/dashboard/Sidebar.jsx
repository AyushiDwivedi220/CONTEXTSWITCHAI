import {
  FaTasks,
  FaFolderOpen,
  FaProjectDiagram,
} from "react-icons/fa";

import {
  useNavigate,
  useLocation,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import useProjectStore from "../../store/projectStore";
import useWorkspaceStore from "../../store/workspaceStore";

export default function Sidebar() {
  const navigate = useNavigate();

  const location = useLocation();

  const [showProjects, setShowProjects] =
    useState(false);

  const [
    showWorkspaces,
    setShowWorkspaces,
  ] = useState(false);

  const {
    projects,
    fetchProjects,
  } = useProjectStore();

  const {
    workspaces,
    fetchWorkspaces,
  } = useWorkspaceStore();

  useEffect(() => {
    fetchProjects();
    fetchWorkspaces();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <aside
      className="
        w-72
        min-h-screen
        bg-white/[0.03]
        backdrop-blur-xl
        border-r
        border-white/10
        p-6
      "
    >
      <h1
        className="
          text-3xl
          font-bold
          tracking-tight
          bg-gradient-to-r
          from-purple-300
          to-fuchsia-400
          bg-clip-text
          text-transparent
          mb-12
        "
      >
        ContextSwitchAI
      </h1>

      <nav className="space-y-3">
        {/* Dashboard */}
        <button
          onClick={() => navigate("/")}
          className="
            w-full
            flex
            items-center
            gap-3
            p-4
            rounded-2xl
            cursor-pointer
            transition-all
            hover:bg-purple-500/10
            hover:border-purple-500/20
            border
            border-transparent
            text-left
          "
        >
          <FaTasks />
          <span>Dashboard</span>
        </button>

        {/* Workspaces */}
        <div>
          <button
            onClick={() =>
              setShowWorkspaces(
                !showWorkspaces
              )
            }
            className="
              w-full
              flex
              items-center
              gap-3
              p-4
              rounded-2xl
              cursor-pointer
              transition-all
              hover:bg-purple-500/10
              hover:border-purple-500/20
              border
              border-transparent
              text-left
            "
          >
            <FaFolderOpen />
            <span>Workspaces</span>
          </button>

          {showWorkspaces && (
            <div className="ml-6 mt-2 space-y-1">
              <button
                onClick={() =>
                  navigate(
                    "/workspaces"
                  )
                }
                className="
                  block
                  w-full
                  text-left
                  px-2
                  py-2
                  rounded-lg
                  text-sm
                  text-zinc-400
                  hover:text-white
                "
              >
                View All
              </button>

              {workspaces.map(
                (workspace) => (
                  <button
                    key={
                      workspace.id
                    }
                    onClick={() =>
                      navigate(
                        `/workspaces/${workspace.id}`
                      )
                    }
                    className={`
                      w-full
                      text-left
                      px-3
                      py-2
                      rounded-lg
                      text-sm
                      transition
                      ${
                        location.pathname ===
                        `/workspaces/${workspace.id}`
                          ? "bg-purple-500/20 text-purple-300"
                          : "text-zinc-300 hover:bg-white/5"
                      }
                    `}
                  >
                    {workspace.name}
                  </button>
                )
              )}
            </div>
          )}
        </div>

        {/* Projects */}
        <div>
          <button
            onClick={() =>
              setShowProjects(
                !showProjects
              )
            }
            className="
              w-full
              flex
              items-center
              gap-3
              p-4
              rounded-2xl
              cursor-pointer
              transition-all
              hover:bg-purple-500/10
              hover:border-purple-500/20
              border
              border-transparent
              text-left
            "
          >
            <FaProjectDiagram />
            <span>Projects</span>
          </button>

          {showProjects && (
            <div className="ml-6 mt-2 space-y-1">
              <button
                onClick={() =>
                  navigate(
                    "/projects"
                  )
                }
                className="
                  block
                  w-full
                  text-left
                  px-2
                  py-2
                  rounded-lg
                  text-sm
                  text-zinc-400
                  hover:text-white
                "
              >
                View All
              </button>

              {projects.map(
                (project) => (
                  <button
                    key={project.id}
                    onClick={() =>
                      navigate(
                        `/projects/${project.id}`
                      )
                    }
                    className={`
                      w-full
                      text-left
                      px-3
                      py-2
                      rounded-lg
                      text-sm
                      transition
                      ${
                        location.pathname ===
                        `/projects/${project.id}`
                          ? "bg-purple-500/20 text-purple-300"
                          : "text-zinc-300 hover:bg-white/5"
                      }
                    `}
                  >
                    {project.name}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}