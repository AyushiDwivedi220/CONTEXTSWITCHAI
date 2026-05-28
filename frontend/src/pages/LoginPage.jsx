import LoginForm from "../components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">
            ContextSwitchAI
          </h1>

          <p className="text-zinc-400 mt-3">
            Continue your workflow seamlessly.
          </p>
        </div>

        <LoginForm />

      </div>

    </div>
  );
}