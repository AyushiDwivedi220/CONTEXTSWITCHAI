import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import TaskForm from "../components/tasks/TaskForm";

import {
  getTask,
  updateTask,
} from "../services/taskService";

export default function EditTaskPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [task, setTask] = useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const data = await getTask(id);

        setTask(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  const handleUpdate = async (
    taskData
  ) => {
    try {
      await updateTask(id, taskData);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-[60vh] text-white">
          Loading...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="relative min-h-[calc(100vh-120px)]">
        {/* Background Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[150px]" />

        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-[180px]" />

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="mb-10">
            <p className="text-violet-400 font-medium tracking-wider uppercase text-sm">
              Task Management
            </p>

            <h1 className="text-6xl font-black text-white mt-3 tracking-tight">
              Edit Task
            </h1>

            <p className="text-zinc-400 mt-4 text-lg">
              Update your task details.
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
            <TaskForm
              initialValues={task}
              onSubmit={handleUpdate}
              submitLabel="Update Task"
            />
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}