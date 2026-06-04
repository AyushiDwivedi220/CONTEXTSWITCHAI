import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TaskForm({
  initialValues,
  onSubmit,
  submitLabel,
}) {
  const [title, setTitle] = useState("");

  const [description, setDescription] =
    useState("");

  const [priority, setPriority] =
    useState("MEDIUM");

  const [status, setStatus] =
    useState("PENDING");

  const [dueDate, setDueDate] =
    useState("");

  useEffect(() => {
    if (!initialValues) return;

    setTitle(initialValues.title || "");

    setDescription(
      initialValues.description || ""
    );

    setPriority(
      initialValues.priority || "MEDIUM"
    );

    setStatus(
      initialValues.status || "PENDING"
    );

    setDueDate(
      initialValues.due_date || ""
    );
  }, [initialValues]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await onSubmit({
      title,
      description,
      priority,
      status,
      due_date: dueDate || null,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-3">
          Task Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          placeholder="Enter task title..."
          className="
            w-full
            px-5
            py-4
            bg-white/[0.03]
            border
            border-white/10
            rounded-2xl
            text-white
            placeholder:text-zinc-500
            focus:border-violet-400
            focus:ring-4
            focus:ring-violet-500/20
            outline-none
            transition-all
          "
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-3">
          Description
        </label>

        <textarea
          rows={6}
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          placeholder="Describe your task..."
          className="
            w-full
            px-5
            py-4
            bg-white/[0.03]
            border
            border-white/10
            rounded-2xl
            text-white
            placeholder:text-zinc-500
            focus:border-violet-400
            focus:ring-4
            focus:ring-violet-500/20
            outline-none
            transition-all
            resize-none
          "
        />
      </div>

      {/* Priority */}
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-3">
          Priority
        </label>

        <div className="flex gap-3">
          {[
            {
              label: "Low",
              value: "LOW",
            },
            {
              label: "Medium",
              value: "MEDIUM",
            },
            {
              label: "High",
              value: "HIGH",
            },
          ].map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() =>
                setPriority(item.value)
              }
              className={`
                px-5
                py-3
                rounded-xl
                transition-all
                border
                ${
                  priority === item.value
                    ? "bg-violet-500 border-violet-500 text-white shadow-lg shadow-violet-500/20"
                    : "bg-white/[0.03] border-white/10 text-zinc-400 hover:border-violet-400/40"
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Status */}
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-3">
          Status
        </label>

        <div className="flex gap-3">
          {[
            {
              label: "Pending",
              value: "PENDING",
            },
            {
              label: "In Progress",
              value: "IN_PROGRESS",
            },
            {
              label: "Completed",
              value: "COMPLETED",
            },
          ].map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() =>
                setStatus(item.value)
              }
              className={`
                px-5
                py-3
                rounded-xl
                transition-all
                border
                ${
                  status === item.value
                    ? "bg-fuchsia-500 border-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/20"
                    : "bg-white/[0.03] border-white/10 text-zinc-400 hover:border-fuchsia-400/40"
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Due Date */}
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-3">
          Due Date
        </label>

        <input
          type="date"
          value={dueDate}
          onChange={(e) =>
            setDueDate(e.target.value)
          }
          className="
            w-full
            px-5
            py-4
            bg-white/[0.03]
            border
            border-white/10
            rounded-2xl
            text-white
            focus:border-violet-400
            focus:ring-4
            focus:ring-violet-500/20
            outline-none
          "
        />
      </div>

      {/* Submit */}
      <motion.button
        whileHover={{
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        type="submit"
        className="
          w-full
          py-4
          rounded-2xl
          bg-gradient-to-r
          from-violet-500
          via-purple-500
          to-fuchsia-500
          text-white
          font-semibold
          tracking-wide
          shadow-[0_10px_40px_rgba(168,85,247,0.35)]
        "
      >
        {submitLabel}
      </motion.button>
    </form>
  );
}