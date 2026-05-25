import { FaTasks } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-900 p-6">
      <h1 className="text-2xl font-bold mb-10">
        ContextSwitchAI
      </h1>

      <nav className="space-y-4">
        <div className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <FaTasks />
          <span>Dashboard</span>
        </div>
      </nav>
    </aside>
  );
}