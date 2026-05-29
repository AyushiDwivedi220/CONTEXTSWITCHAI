import useAuthStore from "../../store/authStore";

export default function Navbar() {
  const logout = useAuthStore(
    (state) => state.logout
  );

  return (
    <header
      className="
      h-20
      px-8
      flex
      items-center
      justify-between
      border-b
      border-white/10
      bg-white/[0.02]
      backdrop-blur-xl
      "
    >
      <div>
        <h2 className="text-2xl font-bold">
          Productivity Dashboard
        </h2>

        <p className="text-zinc-400 text-sm">
          Manage your workflow intelligently
        </p>
      </div>

      <button
        onClick={logout}
        className="
        px-5
        py-2
        rounded-xl
        bg-gradient-to-r
        from-purple-500
        to-fuchsia-500
        hover:opacity-90
        transition-all
        "
      >
        Logout
      </button>
    </header>
  );
}