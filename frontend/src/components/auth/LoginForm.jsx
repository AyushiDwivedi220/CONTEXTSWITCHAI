import { useState } from "react";
import { loginUser } from "../../services/authService";
import useAuthStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {

  const login = useAuthStore((state) => state.login);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    setError("");

    try {

      const data = await loginUser(formData);

      login(data);

      console.log("Login Successful");

      navigate("/");

    } catch (err) {

      setError("Invalid username or password");

      console.error(err);

    } finally {

      setLoading(false);

    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >

      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-400 p-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm mb-2 text-zinc-400">
          Username
        </label>

        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your username"
          className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm mb-2 text-zinc-400">
          Password
        </label>

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 py-3 rounded-xl font-semibold disabled:opacity-50"
      >
        {loading ? "Logging In..." : "Login"}
      </button>

    </form>
  );
}