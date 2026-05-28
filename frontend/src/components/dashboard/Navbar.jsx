import useAuthStore from "../../store/authStore";

export default function Navbar() {

  const logout = useAuthStore(
    (state) => state.logout
  );

  return (
    <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-6">

      <h2 className="text-xl font-semibold">
        Productivity Dashboard
      </h2>

      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm"
      >
        Logout
      </button>

    </header>
  );
}