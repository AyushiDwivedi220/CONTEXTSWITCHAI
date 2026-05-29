import { FaTasks } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

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
      <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-300 to-fuchsia-400 bg-clip-text text-transparent mb-12">
        ContextSwitchAI
      </h1>

      <nav className="space-y-3">
        <div
          onClick={() => navigate("/")}
          className="
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
          "
        >
          <FaTasks />
          <span>Dashboard</span>
        </div>
      </nav>
    </aside>
  );
}