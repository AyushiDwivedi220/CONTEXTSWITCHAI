import { useState } from "react";
import useWorkspaceStore from "../../store/workspaceStore";

const WorkspaceCard = ({ workspace }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState(workspace.name);

  const [description, setDescription] =
    useState(workspace.description);

  const {
    updateWorkspace,
    deleteWorkspace,
  } = useWorkspaceStore();

  const handleSave = async () => {
    await updateWorkspace(
      workspace.id,
      {
        name,
        description,
      }
    );

    setIsEditing(false);
  };

  const handleCancel = () => {
    setName(workspace.name);

    setDescription(
      workspace.description
    );

    setIsEditing(false);
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Delete this workspace?"
    );

    if (!confirmed) return;

    await deleteWorkspace(
      workspace.id
    );
  };

  return (
    <div
      className="
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
        rounded-2xl
        p-5
        hover:border-purple-500/30
        transition
      "
    >
      {!isEditing ? (
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-white">
              {workspace.name}
            </h3>

            <p className="text-zinc-400 mt-2">
              {workspace.description}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() =>
                setIsEditing(true)
              }
              className="
                bg-purple-600
                hover:bg-purple-700
                px-4
                py-2
                rounded-lg
                text-white
                transition
              "
            >
              Edit
            </button>

            <button
              onClick={handleDelete}
              className="
                bg-red-600
                hover:bg-red-700
                px-4
                py-2
                rounded-lg
                text-white
                transition
              "
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="
              w-full
              bg-black/20
              border
              border-white/10
              rounded-lg
              px-4
              py-3
              text-white
            "
          />

          <textarea
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            className="
              w-full
              bg-black/20
              border
              border-white/10
              rounded-lg
              px-4
              py-3
              text-white
            "
          />

          <div className="flex gap-3">
            <button
              onClick={handleSave}
              className="
                bg-green-600
                hover:bg-green-700
                px-4
                py-2
                rounded-lg
                text-white
                transition
              "
            >
              Save
            </button>

            <button
              onClick={handleCancel}
              className="
                bg-zinc-700
                hover:bg-zinc-600
                px-4
                py-2
                rounded-lg
                text-white
                transition
              "
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkspaceCard;