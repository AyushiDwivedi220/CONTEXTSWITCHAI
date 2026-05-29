import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#0B0B0F] text-white relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-fuchsia-500/10 blur-[160px]" />

      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-[120px]" />

      <Sidebar />

      <div className="flex-1 relative z-10">
        <Navbar />

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}