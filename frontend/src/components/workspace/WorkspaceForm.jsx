import { useState } from "react";
import useWorkspaceStore from "../../store/workspaceStore";

const WorkspaceForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] =
    useState("");

  const { createWorkspace } =
    useWorkspaceStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createWorkspace({
      name,
      description,
    });

    setName("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        type="text"
        placeholder="Workspace Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        className="border p-2 w-full"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(
            e.target.value
          )
        }
        className="border p-2 w-full"
      />

<div className="flex justify-center">
  <button
    type="submit"
    className="
      bg-gradient-to-r
      from-purple-600
      to-fuchsia-600
      text-white
      px-6
      py-3
      rounded-xl
      font-medium
      hover:scale-105
      transition-all
    "
  >
    Create Workspace
  </button>
</div>
    </form>
  );
};

export default WorkspaceForm;