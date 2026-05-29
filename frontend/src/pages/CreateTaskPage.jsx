import { useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "../layouts/DashboardLayout";
import { createTask } from "../services/taskService";
import { useNavigate } from "react-router-dom";

export default function CreateTaskPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("High");
  const [status, setStatus] = useState("Pending");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await createTask({
        title,
        description,
        priority: "Medium",
        status: "Pending",
      });
  
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="relative min-h-[calc(100vh-120px)]">

        {/* Background Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[150px]" />

        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-[180px]" />

        <div className="absolute right-20 bottom-20 w-[350px] h-[350px] bg-purple-400/10 rounded-full blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="mb-10">
            <p className="text-violet-400 font-medium tracking-wider uppercase text-sm">
              Task Creation
            </p>

            <h1 className="text-6xl font-black text-white mt-3 tracking-tight">
              Create New Task
            </h1>

            <p className="text-zinc-400 mt-4 text-lg">
              Transform ideas into organized execution.
            </p>
          </div>

          {/* Form Card */}
          <div
            className="
            bg-white/[0.03]
            backdrop-blur-2xl
            border
            border-white/10
            rounded-[32px]
            p-10
            shadow-[0_20px_80px_rgba(168,85,247,0.15)]
            "
          >
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
                  {["Low", "Medium", "High"].map(
                    (item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() =>
                          setPriority(item)
                        }
                        className={`
                        px-5
                        py-3
                        rounded-xl
                        transition-all
                        border

                        ${
                          priority === item
                            ? "bg-violet-500 border-violet-500 text-white shadow-lg shadow-violet-500/20"
                            : "bg-white/[0.03] border-white/10 text-zinc-400 hover:border-violet-400/40"
                        }
                        `}
                      >
                        {item}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-3">
                  Status
                </label>

                <div className="flex gap-3">
                  {[
                    "Pending",
                    "In Progress",
                    "Completed",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        setStatus(item)
                      }
                      className={`
                      px-5
                      py-3
                      rounded-xl
                      transition-all
                      border

                      ${
                        status === item
                          ? "bg-fuchsia-500 border-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/20"
                          : "bg-white/[0.03] border-white/10 text-zinc-400 hover:border-fuchsia-400/40"
                      }
                      `}
                    >
                      {item}
                    </button>
                  ))}
                </div>
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
                Create Task
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}