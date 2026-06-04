import { useEffect, useState } from "react";

import useWorkspaceStore from "../../store/workspaceStore";

export default function ProjectForm({
  initialData = null,
  onSubmit,
  loading = false,
}) {
  const {
    workspaces,
    fetchWorkspaces,
  } = useWorkspaceStore();

  const [formData, setFormData] =
    useState({
      workspace:
        initialData?.workspace
          ? String(
              initialData.workspace
            )
          : "",
      name: initialData?.name || "",
      description:
        initialData?.description || "",
      status:
        initialData?.status ||
        "planning",
    });

  useEffect(() => {
    fetchWorkspaces();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    const { name, value } =
      e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      workspace: Number(
        formData.workspace
      ),
    };

    console.log(
      "Project Payload:",
      payload
    );

    onSubmit(payload);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-2xl
        p-8
        space-y-6
      "
    >
      {!initialData?.workspace && (
        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-2">
            Workspace
          </label>

          <select
            name="workspace"
            value={formData.workspace}
            onChange={handleChange}
            className="
              w-full
              bg-zinc-950
              border
              border-zinc-800
              rounded-xl
              p-3
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
            required
          >
            <option value="">
              Select Workspace
            </option>

            {workspaces.map(
              (workspace) => (
                <option
                  key={workspace.id}
                  value={workspace.id}
                >
                  {workspace.name}
                </option>
              )
            )}
          </select>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-zinc-400 mb-2">
          Project Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter project name"
          className="
            w-full
            bg-zinc-950
            border
            border-zinc-800
            rounded-xl
            p-3
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-400 mb-2">
          Description
        </label>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="5"
          placeholder="Describe your project..."
          className="
            w-full
            bg-zinc-950
            border
            border-zinc-800
            rounded-xl
            p-3
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-400 mb-2">
          Status
        </label>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="
            w-full
            bg-zinc-950
            border
            border-zinc-800
            rounded-xl
            p-3
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        >
          <option value="planning">
            Planning
          </option>

          <option value="active">
            Active
          </option>

          <option value="completed">
            Completed
          </option>

          <option value="archived">
            Archived
          </option>
        </select>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="
            bg-blue-600
            hover:bg-blue-700
            transition
            px-6
            py-3
            rounded-xl
            font-medium
            text-white
            disabled:opacity-50
          "
        >
          {loading
            ? "Saving..."
            : "Save Project"}
        </button>
      </div>
    </form>
  );
}