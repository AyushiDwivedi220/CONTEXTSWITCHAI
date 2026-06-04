import { useEffect } from "react";

import SessionCard from "../components/sessions/SessionCard";
import CreateSessionForm from "../components/sessions/CreateSessionForm";

import useSessionStore from "../store/sessionStore";

export default function SessionsPage() {
  const sessions = useSessionStore(
    (state) => state.sessions
  );

  const loading = useSessionStore(
    (state) => state.loading
  );

  const error = useSessionStore(
    (state) => state.error
  );

  const fetchSessions =
    useSessionStore(
      (state) => state.fetchSessions
    );

  useEffect(() => {
    console.log(
      "SessionsPage mounted"
    );

    fetchSessions();
  }, []);

  console.log(
    "Sessions:",
    sessions
  );

  console.log(
    "Loading:",
    loading
  );

  console.log(
    "Error:",
    error
  );

  if (loading) {
    return (
      <div className="p-8">
        Loading sessions...
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1
        className="
          text-3xl
          font-bold
          mb-8
        "
      >
        Session Logs
      </h1>

      <CreateSessionForm />

      {error && (
        <div
          className="
            mt-4
            mb-4
            text-red-500
          "
        >
          Error: {error}
        </div>
      )}

      <div className="grid gap-4">
        {sessions.length === 0 ? (
          <div className="text-zinc-400">
            No sessions found
          </div>
        ) : (
          sessions.map((session) => (
            <SessionCard
              key={session.id}
              session={session}
            />
          ))
        )}
      </div>
    </div>
  );
}